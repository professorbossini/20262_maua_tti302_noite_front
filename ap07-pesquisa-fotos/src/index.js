import {createRoot} from "react-dom/client"
import App from './components/App'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'


// raiz da aplicação = elemento da árvore DOM (index.html) onde será renderizado App
const root = createRoot(document.getElementById("root"))
// renderiza o componente App na raiz
root.render(<App/>)