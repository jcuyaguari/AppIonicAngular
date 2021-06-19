import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[]=[];

  private contacts: Contact[];
  private lastId: number = 20;

  private productos: Array<Producto> = [];

  constructor(private http: HttpClient) {
    for(let i =0; i<20; i++){
      const producto = new Producto();
      producto.id = (i+1);
      producto.nombre = `P ${i}`;
      producto.precio = (i*2+2);
      producto.stockMax = 40;
      producto.stockMin = 20;
      this.productos.push(producto);
    }
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  getContacts(): Observable<Contact[]> {
    if (this.contacts) {
      return of(this.contacts);
    } else {
      // fetch contacts
      return this.http.get<Contact[]>('./assets/contacts.json')
      .pipe(tap(contacts => this.contacts = contacts));
    }
  }

  getContactsByCategory(category: string): Observable<Contact[]> {
    return this.getContacts().pipe(map(contacts => contacts.filter(contact => contact.category == category)));
  }

  getContactById(id: number): Observable<Contact> {
    return this.getContacts().pipe(map(contacts => contacts.find(contact => contact.id == id)));
  }

  createContact(contact: Contact) {
    contact.id = this.lastId + 1;
    // increment lastId value
    this.lastId = this.lastId + 1;
    this.contacts.push(contact);
  }

  updateContact(contact: Contact): Contact {
    let itemIndex = this.contacts.findIndex(item => item.id == contact.id);
    this.contacts[itemIndex] = contact;
    return contact;
  }

  deleteContact(id: number): Contact {
    let itemIndex = this.contacts.findIndex(item => item.id == id);
    return this.contacts.splice(itemIndex, 1)[0];
  }

  //Webservice de prueba
  getPost(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  //Productos de prueba
  getProductos(){
    return new Promise((resolve,reject)=>{
      if(this.productos.length>0){
        resolve(this.productos);

      }else{
        reject('Problemas');
      }
    });
  }

  //Carrito de compras

  addCarrito(producto:Producto){
    console.log("Add desde WS",producto)
    this.subject.next([...this.itemsCarrito,producto]);
    
  }

  limpiarCarrito(){
    this.subject.next(null);
  }

  getCarrito(): Observable<Producto[]>{
    return this.subject;
  }

  getTotal(){
    return this.itemsCarrito.reduce((total,producto:Producto) => {return total + producto.precio;},0);
  }
}
