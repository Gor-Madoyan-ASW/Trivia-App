import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {ICategoriesResponse, ICategory, IQuestions, IQuestionsResponse} from "../interfaces/questions.interface";
import {shuffleArray} from "../utils/helper";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private apiUrl = 'https://opentdb.com'

  constructor(private http: HttpClient) {}

  getQuestions(categoryId: number): Observable<IQuestions[]> {
    return this.http.get<IQuestionsResponse>(`${this.apiUrl}/api.php?amount=10&category=${categoryId}`).pipe(
      map((response: IQuestionsResponse) => response.results),
      map((questions) => questions.map(question => {
          return {...question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer])};
        }
      )),
      retry( {count: 3, delay: 1000}),
      catchError((err)=> {
        console.log('HTTP Error Occurred');
        return throwError(()=> err)
      })
    )
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategoriesResponse>(`${this.apiUrl}/api_category.php`).pipe(
      map((response: ICategoriesResponse) => response.trivia_categories))
  }
}
