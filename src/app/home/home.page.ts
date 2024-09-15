import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginMessage: string = '';
  username: string = '';
  age: number | undefined;
  welcomeMessage: string = '';

  constructor(private router: Router) { }

  validateLogin() {
    console.log("Ejecutando validación");
    if (this.username && this.age && this.age > 0) {
      this.loginMessage = 'Inicio de sesión válido';
      this.welcomeMessage = 'Bienvenido ' + this.username;

      // Pasar el nombre y la edad a la página de cartelera
      const extras: NavigationExtras = {
        state: {
          user: this.username,
          userAge: this.age
        }
      };
      this.router.navigate(['/cartelera'], extras);
    } else {
      this.loginMessage = 'Inicio de sesión inválido. Asegúrate de ingresar un nombre y una edad válida.';
    }
  }
}
