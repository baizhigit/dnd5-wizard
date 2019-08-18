export const d = (sides: number) => Math.floor(Math.random() * sides) + 1;

export const roll4dropLowest = () => {
  const rolls = [d(6), d(6), d(6), d(6)];

  const lowest = rolls.reduce((acc, i) => (acc > i ? i : acc));
  rolls[rolls.indexOf(lowest)] = 0;

  return rolls.reduce((acc, i) => acc + i);
};
