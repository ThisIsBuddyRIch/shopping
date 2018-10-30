import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeaderTab } from './headertabs.model';
import { generateLink, RECIPES, SHOPPING } from '../app-routing.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],providers:[]
})
export class HeaderComponent implements OnInit {

  recipeLink = generateLink(RECIPES)
  shoppingLink = generateLink(SHOPPING);


  constructor() { }

  ngOnInit() {
  }  

}
