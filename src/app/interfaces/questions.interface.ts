export interface IQuestionsResponse {
  response_code: number;
  results: IQuestions[]
}

export interface IQuestions {
  category: string;
  correct_answer: string;
  difficulty: string
  question: string
  type: string
  incorrect_answers: string[];
}

export interface ICategoriesResponse {
  trivia_categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string
}
