import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// define uma raiz para a aplicação
// raiz = o elemento na árvore onde o código JSX dos componentes
// será renderizado
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
