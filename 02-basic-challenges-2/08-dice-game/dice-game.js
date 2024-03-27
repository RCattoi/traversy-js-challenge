function diceGameSimulation(simulation) {
  const result = [];

  for (let i = 0; i < simulation; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let simresult = '';

    if (sum === 7 || sum === 11) {
      simresult = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      simresult = 'lose';
    } else {
      simresult = 'roll again';
    }
    result.push({ dice1: dice1, dice2: dice2, sum: sum, result: simresult });
  }
  return result;
}
console.log(diceGameSimulation(10));
console.log(diceGameSimulation(10));
console.log(diceGameSimulation(10));
module.exports = diceGameSimulation;
