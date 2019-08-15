import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from '../services/guards/login.guard';
import { RoomsComponent } from './rooms/rooms.component';


const PAGES_ROUTES: Routes = [
  {
    path: '',
    // canActivate: [LoginGuard],
    component: PageComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'AVi - Home'} },
      { path: 'home/:id', component: RoomsComponent, data: { title: 'AVi - Home'} },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(PAGES_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class PageRoutingModule {}
