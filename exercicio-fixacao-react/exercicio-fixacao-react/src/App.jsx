import React from 'react';
import { MainContent, Card } from './components'; 
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Dashboard Prático</h1>

      {/* Usando MainContent com a prop 'title' */}
      <MainContent title="Minha Seção de Conteúdo">
        
        {/* Usando o Card com children (texto simples) */}
        <Card cardTitle="Card Informativo">
          <p>Este é um conteúdo passado via props.children!</p>
        </Card>

        {/* Usando o Card com children (lista HTML) */}
        <Card cardTitle="Lista de Tarefas">
          <ul>
            <li>Aprender Import/Export</li>
            <li>Praticar Props</li>
            <li>Estilizar com CSS</li>
          </ul>
        </Card>

      </MainContent>
    </div>
  );
}

export default App; // Exportação padrão para o componente principal