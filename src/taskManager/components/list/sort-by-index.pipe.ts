import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../models/task';

@Pipe({
  name: 'sortByOrderIndex',
  pure: false
})
export class SortByIndexPipe implements PipeTransform {

  transform(value: Task[]) {
    return value.sort( (a, b) => a.orderIndex > b.orderIndex ? 1 : -1);
  }
}
