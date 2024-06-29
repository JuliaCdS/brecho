import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminPecasPageRoutingModule } from './admin-pecas-routing.module';
import { AdminPecasPage } from './admin-pecas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPecasPageRoutingModule
  ],
  declarations: [AdminPecasPage]
})
export class AdminPecasPageModule {}
