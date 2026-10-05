import { createRoot } from "react-dom/client";

const App = () => {
  return <div>Um componente</div>;
};

// define uma raiz para a aplicação
// raiz = o elemento na árvore onde o código JSX dos componentes
// será renderizado
createRoot(document.getElementById("root")).render(<App />);
