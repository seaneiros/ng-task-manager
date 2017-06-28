import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task }              from '../../models/task';
import { DataService }       from '../../services/data.service';
import { TaskViewComponent } from '../view/taskView.component';

@Component({
    selector: 'task-list',
    templateUrl: 'taskManager/components/list/taskList.html',
    providers: [ DataService ]
})
export class TaskListComponent implements OnInit {

  @Output() onViewTask = new EventEmitter<Task>();
  @Output() onEditTask = new EventEmitter<Task>();

  listItems: Task[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.listItems = this._dataService.getTasks();
  }

  viewTask(task: Task) {
    this.onViewTask.emit(task);
  }

  editTask(task: Task) {
    this.onEditTask.emit(task);
  }

}
