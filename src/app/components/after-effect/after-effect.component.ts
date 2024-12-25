import { Component, Input } from '@angular/core';
import { AfterEffect } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import stats from "../../stats.json";

@Component({
  selector: 'app-after-effect',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './after-effect.component.html',
  styleUrl: './after-effect.component.css'
})
export class AfterEffectComponent {
  @Input() afterEffect: AfterEffect | undefined;
  @Input() index: number | undefined;
  @Input() remove: Function| undefined;
  statOptions: string[] = stats;

  removeAfter = () => {
    this.remove!(this.index);
  }
}
