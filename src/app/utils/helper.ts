import { DifficultyColor, DifficultyLevel } from "../enum/enums";

export function shuffleArray<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


export function difficultySwitcher(difficulty: string): string {
  switch (difficulty) {
    case DifficultyLevel.Easy:
      return DifficultyColor.Green;
    case DifficultyLevel.Medium:
      return DifficultyColor.Yellow;
    case DifficultyLevel.Hard:
      return DifficultyColor.Orange;
    default:
      return  ''
  }
}
