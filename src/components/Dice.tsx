import React from 'react'

// * Observação:
// Pensei em fazer uma Interface, mas acredito que neste caso é melhor um Type.
type DiceProp = {
  nome: string;
  quantidade: number;
}

const Dice: React.FunctionComponent<DiceProp> = (dp) => {
  return (
    <>
      {Array.from({ length: dp.quantidade }).map((_, index) => (
        <div className="dice" id={dp.nome + (index + 1)} key={index}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot" style={{top:"50%", left: "50%", transform: "translate(-50%, -50%)"}} />
        <div>{(index + 1)}</div>
      </div>
      ))}
    </>
  )
}

export default Dice