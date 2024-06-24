import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../interfaces/questions.interface";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() categories: ICategory[] = [];
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter<number>();
  selectedCategoryName: string = '';
  isOpened: boolean = false;

  selectCategory(categoryId: number): void {
    const selectedCategory = this.categories?.find((category: ICategory)=> category.id === categoryId);

    if(selectedCategory) {
      this.selectedCategory.next(selectedCategory.id);
      this.isOpened = false;
      this.selectedCategoryName = selectedCategory.name
    }
  }

  toggleCategory(): void {
    this.isOpened = !this.isOpened;
  }
}
