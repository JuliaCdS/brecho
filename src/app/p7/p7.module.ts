import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P7PageRoutingModule } from './p7-routing.module';

import { P7Page } from './p7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P7PageRoutingModule
  ],
  declarations: [P7Page]
})
export class P7PageModule {}
