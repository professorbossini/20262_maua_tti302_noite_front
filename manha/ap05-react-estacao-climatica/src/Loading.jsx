// rafce
// rcc
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center border rounded p-3'>

        <div
          style={{width: '3rem', height: '3rem'}} 
          className="spinner-border text-primary">
            <span className="visually-hidden">Carregando...</span>
        </div>
        
      </div>
    )
  }
}
