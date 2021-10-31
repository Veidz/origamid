import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

function App() {
  const dados = luana;

  return (
    <div>
      <p>{`Nome: ${dados.cliente}`}</p>
      <p>{`Idade: ${dados.idade}`}</p>
      <p>
        Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {`${dados.ativa ? 'Ativa' : 'Inativa'}`}
        </span>
      </p>
    </div>
  );
}

export default App;
