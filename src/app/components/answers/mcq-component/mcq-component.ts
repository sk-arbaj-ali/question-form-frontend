import { Component, input } from '@angular/core';
import Mcq from '../../../DataTypes/mcqType';

@Component({
  selector: 'app-mcq-component',
  imports: [],
  templateUrl: './mcq-component.html',
  styleUrl: './mcq-component.css',
})
export class McqComponent {
 title = input('');
 text = input('');
 hints = input('');
 marks = input('');
 answers = input<Mcq>();
}
