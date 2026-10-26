import React from 'react'
class App extends React.Component{

  constructor(props){
    super(props)  
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
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
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone
        })
      },
      (erro) => {

      }
    )
  }



  render(){
    return (
      <div className='container mt-2'>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center border mb-2" style={{height: '6rem'}}>
                  <i className={`fa-5x ${this.state.icone}`}></i>
                  <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App