import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task }              from '../../models/task';
import { TaskViewComponent } from '../view/taskView.component';

@Component({
    selector: 'task-list',
    templateUrl: 'taskManager/components/list/taskList.html',
    styleUrls: [ 'taskManager/components/list/taskList.css' ],
})
export class TaskListComponent {

  @Output() onViewTask = new EventEmitter<Task>();
  @Output() onEditTask = new EventEmitter<Task>();

  @Input() listItems: Task[];

  onlyActive: boolean = true;

  viewTask(task: Task) {
    this.onViewTask.emit(task);
  }

  editTask(task: Task) {
    this.onEditTask.emit(task);
  }

}
