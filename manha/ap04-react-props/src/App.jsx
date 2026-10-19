import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
function App(){
  const textoOK = "Já chegou"
  const textoNOK = "Não chegou ainda"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o ocorrido")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}/>
  )
  return(
    <div className="container border rounded mt-2">
      
      <div className="row">
        <div className="col-12">
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          
          <Cartao
            cabecalho="22/10/2025">
            <Pedido 
              icone="fa-tractor"
              titulo="Um trator"
              descricao="Um trator de 2 toneladas"/>
            {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          
          <Cartao
              cabecalho="21/09/2025"
            >
            <Pedido 
              icone="fa-tv"
              titulo="TV"
              descricao="Uma TV colorida"/>
              {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          
          <Cartao
            cabecalho="11/09/2026">
            <Pedido 
              icone="fa-fish-fins"
              titulo="Peixe"
              descricao="Um peixe grande"/>
              {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="11/02/2025">
            <Pedido 
              icone="fa-pizza-slice"
              titulo="Pizza"
              descricao="Uma fatia de pizza de atum"/>
              {componenteFeedback}
          </Cartao>          

        </div>
      </div>
    </div>
  )
}

// function App(){
//   return(
//     <div className="container border rounded mt-2">
//       <div className="row">
//         <div className="col-12 col-lg-3 col-md-6">
//           <div className="bg-danger p-3"></div>
//         </div>
//         <div className="col-12 col-lg-9 col-md-6">
//           <div className="bg-info p-3"></div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12 col-lg-4 col-md-6">
//           <div className="bg-primary p-3"></div>
//         </div>
//         <div className="col-12 col-lg-4 col-md-6">
//           <div className="bg-primary p-3"></div>
//         </div>
//         <div className="col-12 col-lg-4 col-md-12">
//           <div className="bg-primary p-3"></div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12">
//           <div className="bg-secondary p-3"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default App