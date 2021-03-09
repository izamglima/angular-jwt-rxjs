import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers/auth.guard';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ShellComponent,
        children: [
          { path: 'welcome', component: WelcomeComponent },
          {
            path: 'products',
            loadChildren: './products/product.module#ProductModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'account',
            loadChildren: './account/account.module#AccountModule'
          },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' }
        ]
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
