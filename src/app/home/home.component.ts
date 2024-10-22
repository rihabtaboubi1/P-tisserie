import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message: string = '';

  save() {
    localStorage.setItem("liked", 'true');
    this.message = "Merci d'avoir aimé nos produits!";
  }

  ngOnInit() {
    if (localStorage.getItem('liked') === 'true') {
      this.message = "Merci d'avoir aimé nos produits!";
    }
  }
}
