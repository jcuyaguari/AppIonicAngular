import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoProductosPageRoutingModule } from './ingreso-productos-routing.module';

import { IngresoProductosPage } from './ingreso-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoProductosPageRoutingModule
  ],
  declarations: [IngresoProductosPage]
})
export class IngresoProductosPageModule {}
