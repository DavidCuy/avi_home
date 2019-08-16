import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PageComponent } from './page.component';
import { PageSettingsComponent } from '../shared/page-settings/page-settings.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PageRoutingModule } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { FloatinActionButtonComponent } from '../shared/floatin-action-button/floatin-action-button.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    PageComponent,
    PageSettingsComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FloatinActionButtonComponent,
    HomeComponent,
    RoomsComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PageRoutingModule
  ]
})
export class PagesModule {

}
