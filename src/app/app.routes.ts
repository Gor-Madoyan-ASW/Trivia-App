import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {QuestionnaireComponent} from "./components/pages/questionnaire/questionnaire.component";
import {NotFoundComponent} from "./components/pages/not-found/not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'quiz', component: QuestionnaireComponent },
  { path: '**', component: NotFoundComponent }
];
