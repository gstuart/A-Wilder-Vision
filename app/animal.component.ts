import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="well">
        <h1>{{currentFocus}}</h1>
        <p [class]="animals(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">
          <br><strong>Species:</strong> {{currentAnimal.species}} <br>
          <strong>Name:</strong> {{currentAnimal.name}} <br>
          <strong>Age: </strong> {{currentAnimal.age}} <br>
          <strong>Diet: </strong> {{currentAnimal.diet}} <br>
          <strong>Location: </strong> {{currentAnimal.location}} <br>
          <strong># of Caretakers needed: </strong>{{currentAnimal.caretakers}}<br>
          <strong>Gender: </strong>{{currentAnimal.gender}} <br>
          <strong>Likes: </strong>{{currentAnimal.likes}} <br>
          <strong>Dislikes: </strong>{{currentAnimal.dislikes}} <br>
          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button> <br>
        <p>
      </div>
    </div>
  `
})

export class AppComponent {
  currentFocus: String = 'A Wilder Vision';
}
