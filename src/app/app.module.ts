import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FileFormComponent } from './file-form/file-form.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [AppComponent, FileFormComponent, DrawerComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
