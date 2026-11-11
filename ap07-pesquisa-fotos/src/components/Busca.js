import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// componente de classe = componente que é declarado a partir de uma classe que
// herda da classe Component do pacote React
export default class Busca extends React.Component{
  state = {
    termoDeBusca: "",
  };

  onTermoAlterado = (event) => {
    console.log(event.target.value);
    this.setState({ termoDeBusca: event.target.value });
  };

  onFormSubmit = (event) => {
    // não deixa o navegador recarregar/submeter
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  // render = executa toda vez que o estado do componente for atualizado
  render() {
    return (
      // empilha os filhos da <div>
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText
              value={this.state.termoDeBusca}
              className="w-full"
              onChange={this.onTermoAlterado}
              placeholder={this.props.dica}
            />
          </span>
          <Button label="OK" className="p-button-outlined mt-2" />
        </div>
      </form>
    );
  }
}
Busca.defaultProps = {
  dica: "Digite algo que deseja ver...",
};
