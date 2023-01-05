export interface cocktail {
  id: number,
  name: string,
  spirituosity: boolean,
  icy: boolean,
  motto: string,
  ingredient: [number]
}

export interface ingredient {
  id: number,
  cn: string,
  en: string
}