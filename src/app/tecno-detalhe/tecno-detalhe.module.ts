import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnoDetalhePageRoutingModule } from './tecno-detalhe-routing.module';

import { TecnoDetalhePage } from './tecno-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnoDetalhePageRoutingModule
  ],
  declarations: [TecnoDetalhePage]
})
export class TecnoDetalhePageModule {}
