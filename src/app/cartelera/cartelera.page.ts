import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {

  username: string = '';
  userAge: number | undefined;
  peliculas = [
    { titulo: 'Derby de Manchester (Manchester United vs. Manchester City)', precio: 4500, imagen: 'assets/img/manchester_derby.jpg' },
    { titulo: 'El Clásico (Real Madrid vs. Barcelona)', precio: 4500, imagen: 'assets/img/elclasico.jpg' },
    { titulo: 'Super Bowl (NFL)', precio: 4500, imagen: 'assets/img/superbowl.jpg' },
    { titulo: 'Wimbledon', precio: 4500, imagen: 'assets/img/wimbledon.jpg' },
    { titulo: 'Real Madrid vs Manchester City (Final de la UEFA Champions League)', precio: 4500, imagen: 'assets/img/finalchampions.jpg' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.username = navigation.extras.state['user'] || 'Invitado';
      this.userAge = navigation.extras.state['userAge'];
    } else {
      this.username = 'Invitado';
    }
  }

  comprarEntrada(pelicula: any) {
    if (this.userAge === undefined) {
      alert('No se puede calcular el descuento porque la edad del usuario no está disponible.');
      return;
    }

    let descuento = 0;
    if (this.userAge >= 60) {
      descuento = 0.20; // 20% de descuento para mayores de 60
    } else if (this.userAge < 18) {
      descuento = 0.10; // 10% de descuento para menores de 18
    }

    const precioOriginal = pelicula.precio;
    const precioConDescuento = precioOriginal * (1 - descuento);

    console.log(`Comprando entrada para: ${pelicula.titulo}`);
    alert(`Compra realizada para: ${pelicula.titulo}.\nPrecio original: $${precioOriginal}\nPrecio con descuento: $${precioConDescuento.toFixed(2)}`);
    // Aquí puedes agregar la lógica para proceder con el pago, usando el precioConDescuento.
  }
}
