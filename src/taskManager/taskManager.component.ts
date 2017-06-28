import { Component } from '@angular/core';
import { Task }      from './models/task';

export enum SelectionMode {
  VIEW,
  EDIT
};

@Component({
    selector: 'task-manager',
    templateUrl: 'taskManager/taskManager.html'
})
export class TaskManagerComponent {

  selectedTask: Task;
  selectedMode: SelectionMode;

  openTaskForEdit(task: Task) {
    this.selectedMode = SelectionMode.EDIT;
    this.selectedTask = task;
  }

  openTaskForView(task: Task) {
    this.selectedMode = SelectionMode.VIEW;
    this.selectedTask = task;
  }
}
