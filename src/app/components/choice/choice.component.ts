import { Component, Input } from '@angular/core';
import { Choice } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterEffectComponent } from "../after-effect/after-effect.component";

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CommonModule, FormsModule, AfterEffectComponent],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  @Input() option: Choice | undefined;
  @Input() index: number | undefined;
  @Input() removeChoice: Function | undefined;
  
  addAfterText = () => {
    this.option?.after.push({ text: ""});
  }

  addAfterEffect = () => {
    this.option?.after.push({ effect: {
      value: 1,
      boon: true,
      target: "Bravery"
    } });
  }

  removeAfter = (index: number) => {
    this.option?.after.splice(index, 1);
  }

  removeOption = () => {
    this.removeChoice!(this.index);
  }
}
