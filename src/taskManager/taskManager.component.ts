import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';
import { DataService } from './services/data.service';

export enum SelectionMode {
  VIEW,
  EDIT,
  CREATE
};

@Component({
    selector: 'task-manager',
    templateUrl: 'taskManager/taskManager.html',
    styleUrls: [ 'taskManager/taskManager.css' ],
    providers: [ DataService ]
})
export class TaskManagerComponent implements OnInit {

  taskList: Task[] = [];

  selectedTask: Task;
  selectedMode: SelectionMode;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.taskList = this._dataService.getTasks();
  }

  clearSelection() {
    this.selectedMode = null;
    this.selectedTask = null;
  }

  openTaskForEdit(task: Task) {
    this.selectedMode = SelectionMode.EDIT;
    this.selectedTask = task;
  }

  openTaskForView(task: Task) {
    this.selectedMode = SelectionMode.VIEW;
    this.selectedTask = task;
  }

  openTaskForCreate() {
    this.selectedMode = SelectionMode.CREATE;
    this.selectedTask = new Task();
  }

  saveNewTask(task: Task) {
    if (this.selectedMode === SelectionMode.CREATE && !!task) {
      this._dataService.addTask(task);
      this.clearSelection();
    }
  }
}
