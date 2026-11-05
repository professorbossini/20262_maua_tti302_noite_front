// rcc
import React, { Component } from 'react'

export default class EstacaoClimatica extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">

          <div className="d-flex align-items-center border mb-2" style={{ height: '6rem' }}>
            <i className={`fa-5x ${this.state.icone}`}></i>
            <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p>
          </div>

          <div>
            <p className="text-center">
              {
                this.state.latitude ?
                  `Coordenadas: ${this.state.latitude},${this.state.longitude}. Data: ${this.state.data}` :
                  this.state.mensagemDeErro ?
                    `${this.state.mensagemDeErro}` :
                    `Clique no botão para saber a sua estação climática`
              }
            </p>
          </div>

          <button
            onClick={this.obterLocalizacao}
            className='btn btn-outline-primary w-100 mt-2'>
            Qual a minha estação?
          </button>
        </div>
      </div>
    )
  }
}
