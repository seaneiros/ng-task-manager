import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task }              from '../../models/task';
import { TaskViewComponent } from '../view/taskView.component';

const DAY = 24 * 60 * 60 * 1000;

@Component({
    selector: 'task-list',
    templateUrl: 'taskManager/components/list/taskList.html',
    styleUrls: [ 'taskManager/components/list/taskList.css' ],
})
export class TaskListComponent {

  @Output() onViewTask = new EventEmitter<Task>();
  @Output() onEditTask = new EventEmitter<Task>();
  @Output() onPopUp = new EventEmitter<Task>();
  @Output() onPushDown = new EventEmitter<Task>();

  @Input() listItems: Task[];

  onlyActive: boolean = true;

  viewTask(task: Task) {
    this.onViewTask.emit(task);
  }

  editTask(task: Task) {
    this.onEditTask.emit(task);
  }

  popTaskUp(task: Task) {
    if (task.orderIndex !== 0) {
      this.onPopUp.emit(task);
    }
  }

  pushTaskDown(task: Task) {
    if (task.orderIndex !== this.listItems.length - 1) {
      this.onPushDown.emit(task);
    }
  }

  isTaskExpired(task: Task) {
    return task.deadline < Date.now();
  }

  isTaskUpcoming(task: Task) {
    const now = Date.now();
    return task.deadline <= now + 3 * DAY && task.deadline > now;
  }
}
