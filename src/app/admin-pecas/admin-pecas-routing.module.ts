import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPecasPage } from './admin-pecas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPecasPageRoutingModule {}
