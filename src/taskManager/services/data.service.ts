import { Task } from '../models/task';

const NOW = Date.now();
const DAY = 24 * 60 * 60 * 1000;

const presets = [
  { title: 'Upcoming task', description: 'some description', deadline: NOW + DAY },
  { title: 'Task faaaar late', description: 'some description here', deadline: NOW + 30 * DAY },
  { title: 'Expired task', description: 'omg....expired!', deadline: NOW - DAY },
  { title: 'Long task', description: 'some rreeeeeeeeeeeaaaally loooooooong description', deadline: NOW + 3 * DAY },
];

const taskPresets: Task[] = presets.map( ({ title, description, deadline }, idx) => new Task(title, description, deadline, idx) )

export class DataService {

  getTasks(): Task[] {
    return taskPresets;
  }

  addTask(task: Task): void {
    taskPresets.push(task);
  }

  popUp(task: Task) {
    const curIdx = task.orderIndex;

    if (curIdx === 0) {
      return;
    }

    taskPresets.find( i => i.orderIndex === curIdx - 1 ).orderIndex++;
    task.orderIndex--;
  }

  pushDown(task: Task) {
    const curIdx = task.orderIndex;

    if (curIdx === taskPresets.length - 1) {
      return;
    }

    taskPresets.find( i => i.orderIndex === curIdx + 1 ).orderIndex--;
    task.orderIndex++;
  }

}
