import { Component, Input } from '@angular/core';

import { Task }             from '../../models/task';

const CLIPPED_LENGTH = 30;

@Component({
    selector: 'task-view',
    templateUrl: 'taskManager/components/view/taskView.html',
})
export class TaskViewComponent {
  @Input() task: Task;
  @Input() clipDescription: boolean;

  getDescription() {
    if (!this.clipDescription) {
      return this.task.description;
    } else {
      return this.task.description.length < CLIPPED_LENGTH ? this.task.description : this.task.description.substr(0, CLIPPED_LENGTH - 3) + '...';
    }
  }
}
