import { Component, input } from '@angular/core';

@Component({
  selector: 'app-true-false-component',
  imports: [],
  templateUrl: './true-false-component.html',
  styleUrl: './true-false-component.css',
})
export class TrueFalseComponent {
  title = input('');
  text = input('');
  hints = input('');
  marks = input('');
}
