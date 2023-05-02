import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/landing/home/home.component';

const routes: Routes = [
  { path: 'bem-vindo', component: HomeComponent },
  { path: '', redirectTo: '/bem-vindo', pathMatch: 'full' },

  {
    path: '', component: SkeletonComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'contabilidade', loadChildren: () => import('./modules/accouting/accouting.module').then(m => m.AccoutingModule) },
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
