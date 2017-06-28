import { Task } from '../models/task';

const NOW = Date.now();
const DAY = 24 * 60 * 60 * 1000;

const presets = [
  { title: 'Upcoming task', description: 'some description', deadline: NOW + DAY },
  { title: 'Task faaaar late', description: 'some description here', deadline: NOW + 30 * DAY },
  { title: 'Expired task', description: 'omg....expired!', deadline: NOW - DAY },
  { title: 'Long task', description: 'some rreeeeeeeeeeeaaaally loooooooong description', deadline: NOW + 3 * DAY },
];

const taskPresets: Task[] = presets.map( ({ title, description, deadline }) => new Task(title, description, deadline) )

export class DataService {

  getTasks(): Task[] {
    return taskPresets;
  }

  addTask(title: string, description: string, deadline: number): void {
    // implement later
  }

}
