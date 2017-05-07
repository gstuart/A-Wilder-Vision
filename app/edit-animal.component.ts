import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>Edit Animal</h3>
        <label>Enter Animal Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species">
        <label>Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
        <label>Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
        <label>Animal Diet</label>
          <input [(ngModel)]="childSelectedAnimal.diet">
        <label>Animal Location:</label>
          <input [(ngModel)]="childSelectedAnimal.location">
        <label>Number of Cartakers Needed:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
        <label>Animal Gender:</label>
          <input [(ngModel)]="childSelectedAnimal.gender">
        <label>Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
        <label>Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
        <br>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
