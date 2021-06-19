import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoProductosPage } from './ingreso-productos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoProductosPageRoutingModule {}
