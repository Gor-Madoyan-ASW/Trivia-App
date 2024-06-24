import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {QuestionnaireService} from "../../../services/questionnaire.service";
import {ActivatedRoute} from "@angular/router";
import { switchMap} from "rxjs";
import {IQuestions} from "../../../interfaces/questions.interface";
import {AsyncPipe, NgStyle} from "@angular/common";
import {ResultComponent} from "../../result/result.component";
import {LoadingComponent} from "../../core/loading/loading.component";
import {difficultySwitcher, textNormalize} from "../../../utils/helper";
import {CallWithPipe} from "../../../pipes/call-with.pipe";

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    AsyncPipe,
    ResultComponent,
    LoadingComponent,
    NgStyle,
    CallWithPipe
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionnaireComponent {
  protected readonly difficultySwitcher = difficultySwitcher;
  protected readonly textNormalize = textNormalize;

  questions: IQuestions[] = [];
  question!: IQuestions;
  answer: string = '';
  score: number = 0;
  currentStep: number = 0;


  constructor(private questionnaireService: QuestionnaireService,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef) {

    this.route.queryParams.pipe(
      switchMap(({category}) => this.questionnaireService.getQuestions(Number(category)))
    ).subscribe((questions) => {
        this.questions = questions;
        this.question = this.questions[this.currentStep];
        this.cd.markForCheck();
      });
  }

  onSelecting(answer: string): void {
    this.answer = answer
    this.onNext();
  }

  private onNext(): void {
    if (this.answer === this.question?.correct_answer) {
      ++this.score;
    }

    ++this.currentStep;
    this.question = this.questions[this.currentStep];
  }
}
