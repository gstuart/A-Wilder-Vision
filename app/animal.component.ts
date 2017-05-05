import { Component } from '@angular/core';
import { Animal }    from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="container">
      <h1>{{currentFocus}}</h1>
      <div class="well">
        <select (change)="onChange($event.target.value)">
          <option value="allAnimals">All Animals</option>
          <option value="youngAnimals">Under 2 years of age</option>
          <option value="oldAnimals" selected="selected">Over 2 years of age</option>
        </select>
      </div>
      <div class="well">
        <p [class]="priorityColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | completeness:filterByAge">
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

          <input *ngIf="currentAnimal.age <= 2"/>
          <input *ngIf="currentAnimal.age >= 3"/>

          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
        </p>
      </div>
    </div>
  `
})

export class AppComponent {
  currentFocus: String = 'A Wilder Vision';
}
