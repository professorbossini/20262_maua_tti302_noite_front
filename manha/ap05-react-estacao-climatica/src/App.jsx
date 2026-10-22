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
    const d3 = new Date()
  }


  render(){
    return (
      <div>App</div>
    )
  }
}

export default App