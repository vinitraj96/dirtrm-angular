import { Component } from '@angular/core';
import { NgModel } from '@angular/cli';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'title';
  name: String;

  showTitleToNestedClass(): String {
    return this.title;
  }

  getDataEventFromNestedC(event) {
    console.log(event);
    this.name = event;
    console.log('name : ' + this.name);
  }
}
