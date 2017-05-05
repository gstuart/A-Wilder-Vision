import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { AppComponent }      from './app.component';
import { FormsModule }       from '@angular/forms';
import { AnimalComponent } from './animal.component';
import { AnimalEditComponent } from './edit-animal.component';
import { NewAnimalComponent }  from './new-animal.component';
import { AgePipe }             from './age.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, AnimalComponent, AnimalEditComponent, NewAnimalComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }