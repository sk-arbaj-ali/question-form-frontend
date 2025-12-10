import { Component, input } from '@angular/core';

@Component({
  selector: 'app-short-answer-component',
  imports: [],
  templateUrl: './short-answer-component.html',
  styleUrl: './short-answer-component.css',
})
export class ShortAnswerComponent {
  title = input('');
  text = input('');
  hints = input('');
  marks = input('');
}
