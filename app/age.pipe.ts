import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe ({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], animal) {
    var output: Animal[] = [];
    if(animal === "young"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].animal <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animal === "old"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].animal >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }
  }
}
