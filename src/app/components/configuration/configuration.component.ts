import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent implements OnInit {


  inputSelected = [false, false, false, false, false, false, false, false]; 

  constructor(){}

  ngOnInit(): void {
    
  }


  editInput(id: number){
    this.inputSelected[id] = !this.inputSelected[id];
  }

}
