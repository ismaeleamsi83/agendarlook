import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopheaderComponent } from '../topheader/topheader.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TopheaderComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
