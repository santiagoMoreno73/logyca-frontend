import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ShowForRolesDirective } from './auth/directives/show-for-roles.directive';
import { AccountModule } from './appui/project/account/account.module';

const APP_CONTAINERS = [HomeComponent, PageNotFoundComponent];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AccountModule
  ],
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    LoginComponent,
    ShowForRolesDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ShowForRolesDirective],
})
export class AppModule {}
