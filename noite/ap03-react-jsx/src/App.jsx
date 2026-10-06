import './styles.css'
function App(){
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'}
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => {
    return 'Enviar'
  }
  const aoClicar = () => alert('clicou')
  return(
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label
        className='rotulo' 
        style={{display: 'block', marginBottom: 12}}
        htmlFor="nome">
          {textoDoRotulo}
      </label>
      <input 
        id="nome" 
        type="text"
        style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
      <button
        onClick={() => aoClicar()}
        style={estilosBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>
  )
}
export default App



// //criar um componente React que exibe seu nome
// //criar um componente React que exibe a sua idade
// //No App, exibir: Olá, me chamo Ana e tenho 20 anos.

// const Hello = () => {
//   return <p>Hello!</p>
// }


// const App = () => {
//   return (
//     <div>
//       <Hello />
//       <p>Meu primeiro componente</p>
//     </div>
//   )
// }
// export default App