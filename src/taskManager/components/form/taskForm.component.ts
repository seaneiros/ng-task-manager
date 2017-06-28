import { Component, Input } from '@angular/core';

import { Task }             from '../../models/task';

@Component({
    selector: 'task-form',
    templateUrl: 'taskManager/components/form/taskForm.html',
})
export class TaskFormComponent {
  @Input() task: Task;
}
