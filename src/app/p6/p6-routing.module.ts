import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P6Page } from './p6.page';

const routes: Routes = [
  {
    path: '',
    component: P6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P6PageRoutingModule {}
