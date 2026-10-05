const App = () => (

  <div
    style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label 
        htmlFor="nome"
        style={{display: 'block', marginBottom: 4}}>
          Nome:
        </label>
        <input
          id="nome" 
          type="text"
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            borderStyle: 'hidden',
            width: '100%',
            borderRadius: 8,
            outline: 'none'
          }} 
          />
        <button
          style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', backgroundColor: "blueviolet", color: 'white', border: 'none', width: '100%', borderRadius: 8}}>
          Enviar
        </button>
  </div>
)

export default App
//definir 2 componentes react
//um deles, exibe o seu primeiro nome
//o segundo, exibe a sua idade
//adapte o App para que ele exiba: Olá, sou a Ana e tenho 20 anos.
// const PrimeiroNome = () => <span>Rodrigo</span>
// function Idade(){
//   return <span>20</span>
// }
// const Hello = () => {
//   return <p>Hello!</p>
// }

// const App = () => {
//   return <div>
//     <h1>Meu primeiro componente React</h1>
//     <Hello />
//     <p>
//       Olá, sou o <PrimeiroNome /> e tenho <Idade /> anos.
//     </p>
//   </div>
// }

// export default App