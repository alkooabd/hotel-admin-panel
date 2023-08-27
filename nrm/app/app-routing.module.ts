import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SidebarComponent } from './services/sidebar/sidebar.component';
import { IzvestuvanjeComponent } from './services/izvestuvanje/izvestuvanje.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
 
  { path: 'izvestuvanje', component: IzvestuvanjeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
