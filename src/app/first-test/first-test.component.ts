import { Component } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent {

  title = 'This is a title'
  heading = 'testing components'

  sum(a:number , b:number){
    return a + b
  }
  sleep(){
    throw new Error('I am sleeping')
  }

}
