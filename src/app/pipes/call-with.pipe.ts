import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callWith',
  standalone: true
})
export class CallWithPipe implements PipeTransform {

  /**
   * @param fn function to call
   * @param args arguments with which the function will be called
   */
  transform(fn: Function, ...args: any[]): any {
    return fn(...args);
  }
}
