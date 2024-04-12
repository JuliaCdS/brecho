import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P7Page } from './p7.page';

const routes: Routes = [
  {
    path: '',
    component: P7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P7PageRoutingModule {}
