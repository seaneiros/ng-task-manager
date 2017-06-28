import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { TaskManagerComponent } from './taskManager.component';
import { TaskListComponent }    from './components/list/taskList.component';
import { TaskViewComponent }    from './components/view/taskView.component';
import { TaskFormComponent }    from './components/form/taskForm.component';
import { TaskPanelComponent }   from './components/panel/taskPanel.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  exports:      [ TaskManagerComponent ],
  declarations: [
    TaskManagerComponent,
    TaskListComponent,
    TaskViewComponent,
    TaskFormComponent,
    TaskPanelComponent
  ],
  bootstrap:    [ TaskManagerComponent ]
})
export class TaskManagerModule { }
