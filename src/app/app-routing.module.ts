import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the routes for the app
const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, // Lazy load user module
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, // Lazy load product module
  { path: '', redirectTo: '/users/list', pathMatch: 'full' }, // Default route redirects to the user list
  { path: '**', redirectTo: '/users/list' } // Wildcard route redirects to user list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
