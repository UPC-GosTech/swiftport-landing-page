import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-function',
  imports: [],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {
  @Input() title: string = 'my title';
  @Input() functionText: string = 'my text';
}
