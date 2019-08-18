interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

interface Character {
  name: string;
  class: string;
  race: string;
  background: string;
  alignment?: string;
  stats: AbilityScores;
  proficiencies: string[];
}
