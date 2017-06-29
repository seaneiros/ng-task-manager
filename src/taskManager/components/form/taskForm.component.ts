import { Component, Input } from '@angular/core';

import { Task }             from '../../models/task';

@Component({
    selector: 'task-form',
    templateUrl: 'taskManager/components/form/taskForm.html',
})
export class TaskFormComponent {
  @Input() task: Task;

  getDatepickerValue(dateStr: string) {
    return dateStr ? new Date(dateStr).valueOf() : null;
  }
}
