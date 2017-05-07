import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 id="pageTitle"><img src="./resources/img/common/banner.jpg" alt="Banner Image"/></h1>
      <p>
        <animal-list [childAnimalList]="masterAnimalList"(clickSender)="editAnimal($event)"></animal-list>
      </p>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()">
      </edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Frontier', 3, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Lost Forest', 5, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Every Backyard', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
