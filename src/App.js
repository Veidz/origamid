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
};

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
};

const red = {
  backgroundColor: 'red',
}

const green = {
  backgroundColor: 'green',
}

const App = () => {
  const dados = luana;

  return (
    <>
    <p>{`Nome: ${dados.cliente}`}</p>
    <p>{`Idade: ${dados.idade}`}</p>
    <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{`${dados.ativa ? 'Ativa' : 'Inativa'}`}</span></p>
    </>
  );
};

export default App;
