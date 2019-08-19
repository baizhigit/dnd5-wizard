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
  mainClass: string;
  subClass: string;
  race: string;
  stats: AbilityScores;
  proficiencies: string[];
}
