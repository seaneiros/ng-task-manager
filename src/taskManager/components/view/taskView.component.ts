import { Component, Input } from '@angular/core';

import { Task }             from '../../models/task';

@Component({
    selector: 'task-view',
    templateUrl: 'taskManager/components/view/taskView.html',
    styleUrls: [ 'taskManager/components/view/taskView.css' ],
})
export class TaskViewComponent {
  @Input() task: Task;
  @Input() clipDescription: boolean;
}
