const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
}

export default function RollDice(nome: string) {
  const dice = document.getElementById(nome);
  const random = getRandomInt(6);
  
  if (dice != null) {   
    dice.className = 'dice';

    switch (random) {
      case 1:
        dice.classList.add('one');
        break;
      case 2:
        dice.classList.add('two');
        break;
      case 3:
        dice.classList.add('three');
        break;
      case 4:
        dice.classList.add('four');
        break;
      case 5:
        dice.classList.add('five');
        break;
      case 6:
        dice.classList.add('six');
        break;
      default:
        break;
    }
  }
}
