import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {
  @Input() title: string = 'Característica';
  @Input() functionText: string = 'Descripción de la funcionalidad ofrecida por SwiftPort.';
  @Input() accentColor: string = '#EE812C';
}
