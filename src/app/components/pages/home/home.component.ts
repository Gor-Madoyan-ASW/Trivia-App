import {ChangeDetectionStrategy, Component} from '@angular/core';
import {QuestionnaireService} from "../../../services/questionnaire.service";
import {Observable} from "rxjs";
import { ICategory } from "../../../interfaces/questions.interface";
import { AsyncPipe } from "@angular/common";
import {CategoriesComponent} from "../../categories/categories.component";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../../core/button/button.component";
import {LoadingComponent} from "../../core/loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    CategoriesComponent,
    RouterLink,
    ButtonComponent,
    LoadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selectedCategoryId!: number;
  categories$: Observable<ICategory[]> = this.questionnaireService.getCategories();

  constructor(private questionnaireService: QuestionnaireService) {
  }

  selectedCategory(id: number): void {
    if (id) {
      console.log('id: ', id)
      this.selectedCategoryId = id;
    }
  }
}
