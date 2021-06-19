import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Producto } from '../models/producto';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  private carrito:Array<Producto> = [];
  private subscription: Subscription;
  private cantidad:number;
  private total: number;

  constructor(private router: Router,public loadingController: LoadingController,private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getCarrito().subscribe(data => {
      console.log("ESTO ES EL DATO",data);
      this.carrito = data;
      this.total = this.dataService.getTotal();
    });
  }

  incremento($event){
    console.log("Incremento",event)
  }

  eliminarProducto(product){
    console.log("Id a eliminar",product.id)
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
