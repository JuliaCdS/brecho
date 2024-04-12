import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
 
  {
    path: 'home/tabs',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'p2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p3',
    loadChildren: () => import('./p3/p3.module').then( m => m.P3PageModule)
  },
  {
    path: 'p4',
    loadChildren: () => import('./p4/p4.module').then( m => m.P4PageModule)
  },
  {
    path: 'p5',
    loadChildren: () => import('./p5/p5.module').then( m => m.P5PageModule)
  },
  {
    path: 'p6',
    loadChildren: () => import('./p6/p6.module').then( m => m.P6PageModule)
  },
  {
    path: 'p7',
    loadChildren: () => import('./p7/p7.module').then( m => m.P7PageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
