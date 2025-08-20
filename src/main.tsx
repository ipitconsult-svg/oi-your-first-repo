import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  console.log('Iniciando a aplicação');
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
    console.log('App renderizado com sucesso');
  } else {
    console.error('Elemento root não encontrado!');
    document.body.innerHTML = '<div style="color: red; padding: 20px;">Erro: Elemento root não encontrado!</div>';
  }
} catch (error) {
  console.error('Erro ao renderizar a aplicação:', error);
  document.body.innerHTML = `<div style="color: red; padding: 20px;">Erro na aplicação: ${error?.toString()}</div>`;
}
