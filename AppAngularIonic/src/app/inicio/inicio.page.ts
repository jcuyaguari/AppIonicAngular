import { Component, OnInit } from '@angular/core';
import { IonItemSliding, MenuController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  posts: any[] =[];
  private producto:any;
  private subscription: Subscription;
  private productos: Array<any> = [];
  

  constructor(private router: Router,
    private menuController:MenuController,
    private dataService: DataService,
    public loadingController: LoadingController,
     public modalCtrl: ModalController,
     //private badge: Badge
     ) { }

  ngOnInit() {
      this.dataService.getPost().subscribe(posts =>{
      this.posts = posts;

      //Productos
        this.dataService.getProductos()
        .then(data =>{
          this.productos = (data as Array<Producto>);
        })
        .catch(error => alert(error));
    })
  }

  buscarProducto(event){
    const items = Array.from(document.querySelector('ion-list').children);
    const query = event.target.value.toLowerCase();

    console.log("Se escribe en el Search",query);
    requestAnimationFrame(()=>{
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        //item.style.display = shouldShow ? 'block' : 'none';
      });
    })
    
  }


  msm(p){
    console.log("llega msm - en esta linea",p);


  }

  agregarAlCarrito(product){
    console.log("este es le id producto", product.id)
    this.dataService.addCarrito(product);
    console.log("agregarAlCarrito")
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
