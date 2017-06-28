import { Component, Input } from '@angular/core';

import { Task } from '../../models/task';
import { SelectionMode } from '../../taskManager.component';

@Component({
    selector: 'task-panel',
    templateUrl: 'taskManager/components/panel/taskPanel.html',
})
export class TaskPanelComponent {
  @Input() selectedTask: Task;
  @Input() mode: SelectionMode;

  isViewMode() {
    return this.mode === SelectionMode.VIEW;
  }
}
