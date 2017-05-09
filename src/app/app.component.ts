import { Component } from '@angular/core';
import { MockData } from './mock-card-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Welcome to this simple input app!';
  subtitle = 'Customize the content of the card by entering your data below.';
  data = MockData;
}
