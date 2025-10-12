import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BemVindo from './BemVindo';
import Texto from './Texto';
import App from './App';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <h1 style={{color:'blue'}}>Semana 1</h1>
   <h2>Relógio</h2>
   <Relogio/>
   <h2>Letreiro</h2>
   <Letreiro/>
  </>
);
