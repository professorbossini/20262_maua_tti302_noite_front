import React from 'react'
import EstacaoClimatica from './EstacaoClimatica'
class App extends React.Component{

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  obterEstacao = (data, latitude) => {
    //21/06/2026
    const d1 = new Date(data.getFullYear(), 5, 21)
    //24/09
    const d2 = new Date(data.getFullYear(), 8, 24)
    //22/12
    const d3 = new Date(data.getFullYear(), 11, 22)
    //21/03
    const d4 = new Date(data.getFullYear(), 2, 21)
    const estaNoSul = latitude < 0
    if (data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if(data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Verão': 'fa-solid fa-sun',
    'Inverno': 'fa-solid fa-snowflake',
    'Outono': 'fa-brands fa-canadian-maple-leaf',
    'Primavera': 'fa-solid fa-tree'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        //pegar a data atual do sistema
        const data = new Date()
        //chamar a função obterEstacao, entregando a ela data e latitude
        const estacao = this.obterEstacao(data, posicao.coords.latitude)
        //pegar o nome do icone correspondente
        const icone = this.icones[estacao]
        //atualizar estado com a funcao setState
        //this.state.latitude = posicao.coords.latitude
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
      }
    )
  }

  render(){
    return (
      <div className='container mt-2'>
        <div className="row">
          <div className="col-md-8">
            <i className="fa-solid fa-hippo fa-3x"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {
              this.state.mensagemDeErro ?
                <p className="border rounded p-2 fs-1 text-center">
                  É preciso dar permissão para acesso à localização. Atualize a página e tente de novo, ajustando a configuração no seu navegador.
                </p>
              :
              <EstacaoClimatica 
                icone={this.state.icone}
                estacao={this.state.estacao}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                data={this.state.data}
                mensagemDeErro={this.state.mensagemDeErro}
                obterLocalizacao={this.obterLocalizacao}  />
              
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}

export default App