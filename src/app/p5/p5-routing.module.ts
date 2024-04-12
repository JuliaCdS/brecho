import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P5Page } from './p5.page';

const routes: Routes = [
  {
    path: '',
    component: P5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P5PageRoutingModule {}
