import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal }    from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="container">
      <div class="well">
        <fieldset>
          <label for="view">Select View</label>
            <select (change)="onChange($event.target.value)" id="age">
              <option value="allAnimals" selected="selected">All Animals</option>
              <option value="youngAnimals">2 years of age and under</option>
              <option value="oldAnimals">Over 2 years of age</option>
            </select>
        </fieldset>
      </div>
      <div class="pure-g">
          <div class="pure-u-1-1">
            <p [class]="ageIndicator(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge" id="animalList">
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
              <br>
              <button (click)="editButtonHasBeenClicked(currentAnimal)" type="submit" class="pure-button pure-button-primary">Edit Animal</button>
            </p>
          </div>
      </div>
    </div>
    <!-- SCRIPTS AND LINKS FOR TILES -->
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>

    <!-- CODE FOR TILES -->
      <header>
        <h1>Page Title</h1>
      </header>

      <div id="tile1" class="flip">
        <div class="card">
          <div class="face front">
            <h2>One</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile2" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Two</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile3" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Three</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile4" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Four</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile5" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Five</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile6" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Six</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile7" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Seven</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <div id="tile8" class="flip">
        <div class="card">
          <div class="face front">
            <h2>Eight</h2>
          </div>
          <div class="face back">
            <p>Some more text that says more than the other side but still not much. <a class="explore-link" href="#">Explore</a></p>
          </div>
        </div>
      </div>

      <br class="cl" />

      <footer>
        <h3>Footer</h3>
      </footer>
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
