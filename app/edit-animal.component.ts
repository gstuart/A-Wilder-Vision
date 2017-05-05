import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>Edit Animal</h3>
        <label>Enter Animal Species:</label>
          <input #newSpecies>
        <label>Animal Name:</label>
          <input #newName>
        <label>Animal Age:</label>
          <input #newAge>
        <label>Animal Diet</label>
          <input #newDiet>
        <label>Animal Location:</label>
          <input #newLocation>
        <label>Number of Cartakers Needed:</label>
          <input #newCartakers>
        <label>Animal Gender:</label>
          <input #newGender>
        <label>Animal Likes:</label>
          <input #newLikes>
        <label>Animal Dislikes:</label>
          <input #newDislikes>    
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
