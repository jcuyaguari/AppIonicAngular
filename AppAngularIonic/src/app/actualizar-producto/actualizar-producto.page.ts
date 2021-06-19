import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {
  
  posts: any[] =[];
  constructor(public router: Router,public loadingController: LoadingController,public dataService: DataService,public alertController:AlertController) { }

  ngOnInit() {
    this.dataService.getPost().subscribe(posts =>{
      this.posts = posts;
    })
  }


  async popupActualizarProducto(ev:any){
    console.log("Este es el evento",ev.id)
    const alerta = await this.alertController.create({
      header: 'ACTUALIZAR PRECIO Y CANTIDAD',
      inputs: [
        {
          label:'Ingrese Precio',
          name: 'Precio',
          placeholder: 'Ingrese Precio',
          type: 'number'
        },
        {
          label:'Ingrese Cantidad',
          name: 'Ingrese Cantidad',
          placeholder: 'Ingrese Cantidad',
          type: 'number'
        }
      ],
      buttons: [
        {
          text:'Guardar',
          handler: (data:any)=>{
            console.log('',data);
          }
        }
      ]
    }).then(res =>{
      res.present();
    })
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
