import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 4 app';
  months = ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
            ];
            isavailable = false;
            myClickFunction(event) {
              alert("button is clicked");
              console.log(event);
            }

            changemonths(event){
              event.preventDefault();
              alert("changed month from drop down");
              console.log(event);
            }
}
