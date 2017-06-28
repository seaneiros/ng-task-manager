import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskManagerModule } from '../taskManager/taskManager.module';
import { AppComponent }      from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    TaskManagerModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
