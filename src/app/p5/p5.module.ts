import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P5PageRoutingModule } from './p5-routing.module';

import { P5Page } from './p5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P5PageRoutingModule
  ],
  declarations: [P5Page]
})
export class P5PageModule {}
