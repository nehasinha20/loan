import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanInformationComponent } from './loan-information/loan-information.component';
import { LoanEstimateComponent } from './loan-estimate/loan-estimate.component';
import { LoanPackageComponent } from './loan-package/loan-package.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'app-loan-application', component: LoanApplicationComponent },
  { path: 'app-loan-information', component: LoanInformationComponent },
  { path: 'app-loan-estimate', component: LoanEstimateComponent },
  { path: 'app-loan-package', component: LoanPackageComponent },

  /*,
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'addblock',
    loadChildren: () => import('./block/block.module').then( m => m.BlockModule),
   
  },
  {
    path: 'slab',
    loadChildren: () => import('./slab/slab.module').then( m => m.SlabPageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
