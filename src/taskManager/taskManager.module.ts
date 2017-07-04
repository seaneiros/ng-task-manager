import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { TaskManagerComponent } from './taskManager.component';
import { TaskListComponent }    from './components/list/taskList.component';
import { TaskViewComponent }    from './components/view/taskView.component';
import { TaskFormComponent }    from './components/form/taskForm.component';
import { TaskPanelComponent }   from './components/panel/taskPanel.component';
import { ActivePipe }           from './components/list/active.pipe';
import { SortByIndexPipe }      from './components/list/sort-by-index.pipe';

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
    TaskPanelComponent,
    ActivePipe,
    SortByIndexPipe
  ],
  bootstrap:    [ TaskManagerComponent ]
})
export class TaskManagerModule { }
