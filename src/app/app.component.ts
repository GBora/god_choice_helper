import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';
import { Choice, Dillema } from './interfaces';
import { ChoiceComponent } from "./components/choice/choice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dillema: Dillema
  jsonCopy: Dillema
  choiceIndex = 0;
  showJson = false;

  constructor() {
    this.dillema = {
      text: "",
      choices: []
    }
    this.jsonCopy = {
      text: "",
      choices: []
    }
  }


  addChoice = () => {
    this.choiceIndex++;
    this.dillema.choices.push({
      id: this.choiceIndex.toString(),
      text: "",
      after: []
    })
  }

  removeChoice = (i: number) => {
    this.dillema.choices.splice(i, 1);
  }

  renderJson = () => {
    this.showJson = !this.showJson;
    this.jsonCopy = _.cloneDeep(this.dillema);
    // put in extra text
    this.jsonCopy.choices.forEach((choice: Choice) => {
      choice.after.unshift({ text: this.jsonCopy.text });
    })
  }

  reset = () => {
    this.dillema = {
      text: "",
      choices: []
    }
    this.jsonCopy = {
      text: "",
      choices: []
    }
    this.choiceIndex = 0;
    this.showJson = false;
  }

}