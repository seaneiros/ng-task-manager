import { Component, Input } from '@angular/core';

import { Task }             from '../../models/task';

@Component({
    selector: 'task-form',
    templateUrl: 'taskManager/components/form/taskForm.html',
    styleUrls: [ 'taskManager/components/form/taskForm.css' ]
})
export class TaskFormComponent {
  @Input() task: Task;
  @Input() isNewTask: boolean;

  getDatepickerValue(dateStr: string) {
    return dateStr ? new Date(dateStr).valueOf() : null;
  }
}
