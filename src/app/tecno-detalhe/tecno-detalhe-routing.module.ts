import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnoDetalhePage } from './tecno-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnoDetalhePageRoutingModule {}
