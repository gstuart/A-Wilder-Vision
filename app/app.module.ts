import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { AppComponent }      from './app.component';
import { FormsModule }       from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './edit-animal.component';
import { NewAnimalComponent }  from './new-animal.component';
import { AgePipe }             from './age.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AnimalEditComponent, NewAnimalComponent, AgePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
