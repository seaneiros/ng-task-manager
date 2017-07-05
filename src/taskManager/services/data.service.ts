import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Task }           from '../models/task';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  private _taskPresets: Task[] = [];

  constructor(private _http: Http) { }

  getTasks(): Observable<Task[]> {
    return this._http.get('presets.json')
      .map( (data: Response) => {
        this._taskPresets = data.json().map( ({ title, description, deadline }: any, idx: number) => new Task(title, description, deadline, idx) );
        return this._taskPresets;
      } );
  }

  addTask(task: Task): void {
    this._taskPresets.push(task);
  }

  popUp(task: Task) {
    const curIdx = task.orderIndex;

    if (curIdx === 0) {
      return;
    }

    this._taskPresets.find( i => i.orderIndex === curIdx - 1 ).orderIndex++;
    task.orderIndex--;
  }

  pushDown(task: Task) {
    const curIdx = task.orderIndex;

    if (curIdx === this._taskPresets.length - 1) {
      return;
    }

    this._taskPresets.find( i => i.orderIndex === curIdx + 1 ).orderIndex--;
    task.orderIndex++;
  }

}
