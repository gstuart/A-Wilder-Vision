import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div >
      <form class="pure-form pure-form-stacked" id="editForm">
      <fieldset *ngIf="childSelectedAnimal">
          <legend>Edit Animal</legend>
          <label for="species">Species</label>
            <input [(ngModel)]="childSelectedAnimal.species" name="spiecies" id="species" type="text">
          <label for="name">Name</label>
            <input [(ngModel)]="childSelectedAnimal.name" name="name" id="name" type="text">
          <label for="age">Age</label>
            <input [(ngModel)]="childSelectedAnimal.age" name="age" id="age" type="text">
          <label for="diet">Diet</label>
            <select [(ngModel)]="childSelectedAnimal.diet" name="diet" id="diet">
                <option>Carnivore</option>
                <option>Detritivore</option>
                <option>Geophagy</option>
                <option>Herbivore</option>
                <option>Omnivore</option>
                <option>Saprophagy</option>
                <option>Scavenger</option>
            </select>
          <label for="location">Location</label>
            <select [(ngModel)]="childSelectedAnimal.location" name="location" id="location">
                <option>Africa Plains</option>
                <option>Africa Rocks</option>
                <option>Asian Jungle</option>
                <option>Asia Passage</option>
                <option>Every Backyard</option>
                <option>Lost Forest</option>
                <option>Northern Frontier</option>
                <option>South American Jungle</option>
                <option>Outback</option>
            </select>
          <label for="caretakers">Caretakers</label>
            <select [(ngModel)]="childSelectedAnimal.caretakers" name="caretakers" id="caretakers">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
          <label for="gender">Gender</label>
            <select [(ngModel)]="childSelectedAnimal.gender" name="gender" id="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
          <label for="likes">Likes</label>
            <input [(ngModel)]="childSelectedAnimal.likes" name="likes" id="likes" type="text">
          <label for="dislikes">Dislikes</label>
            <input [(ngModel)]="childSelectedAnimal.dislikes" name="dislikes" id="dislikes" type="text">
          <button type="submit" class="pure-button pure-button-primary" (click)="doneButtonClicked()">Submit</button>
        </fieldset>
      </form>
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
