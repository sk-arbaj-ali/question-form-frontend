import { Component, input } from '@angular/core';
import Mcq from '../../../DataTypes/mcqType';

@Component({
  selector: 'app-msq-component',
  imports: [],
  templateUrl: './msq-component.html',
  styleUrl: './msq-component.css',
})
export class MsqComponent {
  title = input('');
 text = input('');
 hints = input('');
 marks = input('');
 answers = input<Mcq>();
}
