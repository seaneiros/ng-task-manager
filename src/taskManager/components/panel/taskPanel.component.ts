import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task';
import { SelectionMode } from '../../taskManager.component';

@Component({
    selector: 'task-panel',
    templateUrl: 'taskManager/components/panel/taskPanel.html',
    styleUrls: [ 'taskManager/components/panel/taskPanel.css' ],
})
export class TaskPanelComponent {
  @Input() selectedTask: Task;
  @Input() mode: SelectionMode;

  @Output() onSaveTask = new EventEmitter<Task>();
  @Output() onCancel = new EventEmitter();

  isViewMode() {
    return this.mode === SelectionMode.VIEW;
  }

  isEditMode() {
    return this.mode === SelectionMode.EDIT;
  }

  isCreateMode() {
    return this.mode === SelectionMode.CREATE;
  }

  closePanel() {
    this.onCancel.emit();
  }

  submitTaskCreation() {
    this.onSaveTask.emit(this.selectedTask);
  }
}
