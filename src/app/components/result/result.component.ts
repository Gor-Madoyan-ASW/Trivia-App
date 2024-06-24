import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonComponent} from "../core/button/button.component";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
    @Input()score: number = 0;
    @Input()questionsLength: number = 0;
}
