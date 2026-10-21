import { createRoot } from "react-dom/client";
import React from "react";

// componente de classe = classe que herda de Component
// entre as várias funções herdadas de Component, a função render() serve
// para retornar o JSX do componente de classe
class App extends React.Component {
  // definimos o estado inicial do componente
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null,
    };
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    // new Date(ano, mês(0 a 11), dia(1 a 31))
    // d1 = 21/06
    const d1 = new Date(anoAtual, 5, 21);
    // d2 = 24/09
    const d2 = new Date(anoAtual, 8, 24);
    // d3 = 22/12
    const d3 = new Date(anoAtual, 11, 22);
    // d4 = 21/03
    const d4 = new Date(anoAtual, 2, 21);
    // sul = true se a latitude é negativa
    const sul = latitude < 0;

    // intervalo 1: data >= 21/06 e < 24/09
    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    // intervalo 2: data >= 24/09 e < 22/12
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    // intervalo 3: data >= 22/12 ou < 21/03
    if (data >= d3 || data < d4) return sul ? "Verão" : "Inverno";
    // se não entramos em nenhum dos ifs anteriores, caimos neste return
    return sul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      // callback
      (posicao) => {
        let data = new Date();
        let estacao = this.obterEstacao(data, posicao.coords.latitude);
        let icone = this.icones[estacao];
        //console.log(icone)
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      (erro) => {
        console.log(erro);
        this.setState({ mensagemDeErro: "Tente novamente mais tarde" });
      },
    );
  };

  render() {
    console.log(this.state);

    // render() executa sempre que o estado do componente é alterado
    return (
      <div className="container mt-2">
        {/*uma linha, conteúdo centralizado, display flex*/}
        <div className="row justify-content-center">
          {/*a partir do breakpoint medium, passa a ocupar 8/12 do espaço horizontal*/}
          <div className="col-md-8">
            {/*cartão do Bootstrap*/}
            <div className="card">
              {/*corpo do cartão*/}
              <div className="card-body">
                {/*centraliza os elementos e margem abaixo*/}
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: "6rem" }}
                >
                  {/*icone obtido do estado do componente*/}
                  <i className={`fas fa-5x ${this.state.icone}`}></i>
                  {/*largura 75%, margem à esquerda (start), fs aumenta a fonte*/}
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>

                <div>
                  <p className="text-center">
                    {/*renderização condicional*/}
                    {this.state.latitude
                      ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                      : this.state.mensagemDeErro
                        ? `${this.state.mensagemDeErro}`
                        : "Clique no botão para saber a sua estação climática"}
                  </p>
                </div>

                <button
                  onClick={this.obterLocalizacao}
                  className="btn btn-outline-primary w-100 mt-2"
                >
                  Qual a minha estação?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// createRoot = cria a raiz da aplicação
// raiz da aplicação = elemento da árvore DOM (index.html) onde será
// renderizado o código JSX
// o método render() renderiza o JSX na raiz da aplicação
createRoot(document.getElementById("root")).render(<App />);
