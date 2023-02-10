import { SkeletonComponent } from './skeleton/skeleton.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', component: SkeletonComponent,
    children: [
      { path: 'contabilidade', loadChildren: () => import('./modules/accouting/accouting.module').then(m => m.AccoutingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
