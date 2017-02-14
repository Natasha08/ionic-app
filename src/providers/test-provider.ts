import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class testProvider {
  constructor(private http: Http) {
  }

  load = function() {
    console.log("====loading Provider");

    // return new Promise(resolve => {
      console.log("==== In da promise");
      this.http.get('https://randomuser.me/api/?results=10').subscribe(
        (data) => {

          console.log("I CAN SEE DATA HERE: ", data.json())
        }
    // })
  );
  }

  test_data = ['One', 'Zoo', 'Bee', 'Me'];

}
