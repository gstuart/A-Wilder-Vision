import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal }    from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="container">
      <h1>{{currentFocus}}</h1>
      <div class="well">
        <select (change)="onChange($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngAnimals">Under 2 years of age</option>
          <option value="oldAnimals">Over 2 years of age</option>
        </select>
      </div>
      <div class="well">
        <p [class]="ageIndicator(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
          <br>
          <strong>Species:</strong> {{currentAnimal.species}} <br>
          <strong>Name:</strong> {{currentAnimal.name}} <br>
          <strong>Age: </strong> {{currentAnimal.age}} <br>
          <strong>Diet: </strong> {{currentAnimal.diet}} <br>
          <strong>Location: </strong> {{currentAnimal.location}} <br>
          <strong># of Caretakers needed: </strong>{{currentAnimal.caretakers}}<br>
          <strong>Gender: </strong>{{currentAnimal.gender}} <br>
          <strong>Likes: </strong>{{currentAnimal.likes}} <br>
          <strong>Dislikes: </strong>{{currentAnimal.dislikes}} <br>

          <input *ngIf="young"/>
          <input *ngIf="old"/>

          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
        </p>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  currentFocus: String = 'A Wilder Vision';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  filterByAge: string = "allAnimals";

  ageIndicator(currentAnimal){
    if (currentAnimal.age >= 3){
      return "bg-danger";
    } else if (currentAnimal.age < 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
  }
}
