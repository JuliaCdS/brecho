import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P6PageRoutingModule } from './p6-routing.module';

import { P6Page } from './p6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P6PageRoutingModule
  ],
  declarations: [P6Page]
})
export class P6PageModule {}
