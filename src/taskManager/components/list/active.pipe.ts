import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../models/task';

@Pipe({
  name: 'filterActive',
  pure: false
})
export class ActivePipe implements PipeTransform {

  transform(value: Task[], onlyActive: boolean) {
    return value.filter(task => { return onlyActive ? task.isActive : true; });
  }
}
