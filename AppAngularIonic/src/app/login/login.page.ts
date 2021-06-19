import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  persona: Persona = new Persona();
  constructor(private activatedRoute: ActivatedRoute, private router: Router,public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  login(usuario:string, contrasenia:string){
    console.log(usuario);
    console.log(contrasenia);
    if(usuario === 'juan' && contrasenia === "juan"){
      console.log("paso el if")
      this.router.navigate(['/inicio']);
    }else{
      
      console.log('errror')
      this.alerta();
    }
  }

  async alerta(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Algo ha salido mal',
      subHeader: 'Usuario o contraseña errónea',
      message: 'Ingrese bien su usuario o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaPws(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar Contraseña',
      subHeader: 'Comuníquese con administración',
      message: 'www.crea.fin.ec',
      buttons: ['OK']
    });

    await alert.present();
  }


}
