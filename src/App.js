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

const App = () => {
  const dados = mario;
  const gastos = dados.compras.reduce((acc, p) => {
    return Number(p.preco.replace('R$ ', '')) + acc
  }, 0);
  return (
    <>
    <p>{`Nome: ${dados.cliente}`}</p>
    <p>{`Idade: ${dados.idade}`}</p>
    <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{`${dados.ativa ? 'Ativa' : 'Inativa'}`}</span></p>
    <p className="gastos">Total gasto: {gastos}</p>
    <p>{gastos > 10000 ? 'Você está gastando demais' : ''}</p> 
    </>
  );
};

export default App;
