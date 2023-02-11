import { SkeletonComponent } from './skeleton/skeleton.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/landing/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'inicio', component: SkeletonComponent,
    children: [
      { path: 'contabilidade', loadChildren: () => import('./modules/accouting/accouting.module').then(m => m.AccoutingModule) },
      { path: 'productos-servicos', loadChildren: () => import('./modules/product-service/product-service.module').then(m => m.ProductServiceModule) }
    ]
  },

  {
    path: 'error',
    children: [
      { path: 'page-not-found', loadComponent: () => import('./pages/error/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
    ]
  },
  {
    path: '**',
    redirectTo: '/error/page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
