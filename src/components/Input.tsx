// /* eslint-disable react-refresh/only-export-components */
// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.eslint(react-refresh/only-export-components)
// A atualização rápida só funciona quando um arquivo exporta apenas componentes. Mova seu(s) contexto(s) React para um arquivo separado.eslint(react-refresh/only-export-components)

import React from 'react'
import { NumeroContext } from './NumeroContext';

// Esta linha foi para o arquivo "NumeroContext.ts" para resolver o problema de "Fast refresh":
// export const NumeroContext = React.createContext(0);

const Input = () => {
    const [numeroDados, setNumeroDados] = React.useState<number>(5);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumeroDados(Number(event.currentTarget.value));
    };
  return (
    <>
    <NumeroContext.Provider value={numeroDados}>

      <p>
        Numero de Dados: &nbsp;
        <input
          id="numerodados"
          type="number"
          value={numeroDados}
          onChange={handleOnChange}
          />
      </p>
      <br />
          </NumeroContext.Provider>
    </>
  )
}

export default Input
