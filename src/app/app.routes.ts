import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ResultComponent} from "./components/result/result.component";
import {QuestionnaireComponent} from "./components/questionnaire/questionnaire.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuestionnaireComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', component: NotFoundComponent }
];
