import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
  <button (click)="newButtonHasBeenClicked()">New Animal</button> <br>
    <div *ngIf="newAnimal">
      <h1>New Animal</h1>
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
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCartakers.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCartakers.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Save</button>
    </div>
  `
})

export class NewAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  newAnimal = null;

  newButtonHasBeenClicked(){
    this.newAnimal = true;
  }
}
