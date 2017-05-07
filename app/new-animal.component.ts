import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
    <button (click)="newButtonHasBeenClicked()">New Animal</button>
    <br>
    <form class="pure-form pure-form-stacked">
    <fieldset *ngIf="newAnimal">
        <legend>Add New Animal</legend>
        <label for="species">Species</label>
          <input #newSpecies id="species" type="species">
        <label for="name">Name</label>
          <input #newName id="name" type="name">
        <label for="age">Age</label>
          <input #newAge id="age" type="age">
        <label for="diet">Diet</label>
          <select #newDiet id="diet">
              <option>Carnivor</option>
              <option>Herbivore</option>
              <option>Omnivore</option>
              <option>Scavenger</option>
              <option>Detritivore</option>
              <option>Geophagy</option>
              <option>Saprophagy</option>
          </select>
        <label for="location">Location</label>
          <select #newLocation id="location">
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
          <select #newCartakers id="caretakers">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        <label for="gender">Gender</label>
          <select #newGender id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Unknown</option>
          </select>
        <label for="likes">Likes</label>
          <input #newLikes id="likes" type="likes">
        <label for="dislikes">Dislikes</label>
          <input #newDislikes id="dislikes" type="dislikes">

        <button type="submit" class="pure-button pure-button-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCartakers.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCartakers.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
      </fieldset>
    </form>
    <div>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class NewAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  newAnimal = null;
  newAnimalForm = null;

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  newButtonHasBeenClicked(){
    this.newAnimal = true;
  }

  doneButtonClicked(){
    this.newAnimal= null;
  }

}
