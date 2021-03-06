import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
    <button (click)="newButtonHasBeenClicked()" type="submit" class="pure-button pure-button-primary" id="newButton" data-toggle="modal" data-target="#newModal">New Animal</button>
    <br>
    <div id="newModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body" *ngIf="newAnimal" id="newAnimalForm">
            <form class="pure-form pure-form-stacked">
              <fieldset>
                <legend>Add New Animal</legend>
                <label for="species">Species</label>
                  <input #newSpecies id="species" type="text">
                <label for="name">Name</label>
                  <input #newName id="name" type="text">
                <label for="age">Age</label>
                  <input #newAge id="age" type="text">
                <label for="diet">Diet</label>
                  <select #newDiet id="diet">
                    <option>Carnivore</option>
                    <option>Detritivore</option>
                    <option>Geophagy</option>
                    <option>Herbivore</option>
                    <option>Omnivore</option>
                    <option>Saprophagy</option>
                    <option>Scavenger</option>
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
                      <option>Unknown</option>
                      <option>Female</option>
                      <option>Male</option>
                  </select>
                <label for="likes">Likes</label>
                  <input #newLikes id="likes" type="text">
                <label for="dislikes">Dislikes</label>
                  <input #newDislikes id="dislikes" type="text">
                <button type="submit" class="pure-button pure-button-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCartakers.value, newGender.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCartakers.value=''; newGender.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="pure-button pure-button-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
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
}
