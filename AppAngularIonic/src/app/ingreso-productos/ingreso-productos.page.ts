import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
//import { Camera, DestinationType } from '@ionic-native/camera';

@Component({
  selector: 'app-ingreso-productos',
  templateUrl: './ingreso-productos.page.html',
  styleUrls: ['./ingreso-productos.page.scss'],
})
export class IngresoProductosPage implements OnInit {

 imgURL:any;
  //, private camara: Camera
  constructor(public router: Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }

/*   getCamera(){
    this.camara.getPicture({
      sourceType:this.camara.PictureSourceType.CAMERA,
      destinationType: this.camara.DestinationType.FILE_URI
    }).then( (res)=>{
      this.imgURL = res;
    }).catch(e=>{
      console.log(e);
    })
  } */

  // getGallery(){
  //   this.camara.getPicture({
  //     sourceType:this.camara.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camara.DestinationType.DATA_URL
  //   }).then( (res)=>{
  //     this.imgURL = 'data:image/jpeg;base64,' + res;
  //   }).catch(e=>{
  //     console.log(e);
  //   })
  // }

  guardar(event){
    console.log("SAve",event)
  }


  async alertaSalir(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cerrando Sesión Espere!...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.router.navigate(['/login']);
  }
}
