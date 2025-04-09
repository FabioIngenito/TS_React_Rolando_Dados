import "../../public/dice.css";
import Dice from "./Dice";
import rollDice from "./RollDice";

const sorteia = (valor: number) => {
  for (let index = 1; index <= valor; index++) {
    rollDice("dice" + index);
  }
};

const SorteioDados = ({...props}) => {
  const d: string = "dice";
  const qtd: number = props.numeroDados;
  const mystyle = {
    // maxWidth: 580 // para 5 dados
    maxWidth: 110 * qtd + 30,
  };

  if (qtd > 0 && qtd <= 10000) {
    return (
      <>
        <div className="container" style={mystyle}>
          <Dice nome={d} quantidade={qtd} />
          <button className="button" onClick={() => sorteia(qtd)}>
            Rolar Dados
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default SorteioDados;
