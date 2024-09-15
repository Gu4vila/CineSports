import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  name!: string;
  apellido!: string;
  nivel!: string;
  fechaNacimiento!: string;
  edLevels: Map<string, string> = new Map<string, string>;


  constructor(
    private router: Router,
    private alertController: AlertController
  ){
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      console.log('Username: ' + state['user'])
      this.username = state['user']
    }
  }
  ngOnInit(){
  }
  limpiar(){
    this.name = '';
    this.apellido = '';
    this.fechaNacimiento = '';
    this.nivel = '';
  }
  mostrar(){
    
  }
  async showAlert(){
    const alert = await this.alertController.create({
      header: "Usuario",
      subHeader: "Datos del Usuario",
      message: `El Nombre del usuario es ${this.name} ${this.apellido}`
    })
    alert.present()
  }
}
