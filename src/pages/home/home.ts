import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  libros = [{
    autor: "Paula Hawkins",
    titulo: "La chica del tren",
    editorial: "Booket",
    resena: "",
    portada: "../assets/LCDT.jpg",
    valoracion: [1,2,3,4]
  }];
  constructor(public navCtrl: NavController) {

  }

}
