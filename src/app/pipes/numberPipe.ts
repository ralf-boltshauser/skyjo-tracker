import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'numberPipe'})
export class NumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 2) {
        value = "0" + value; 
    }
    return value;
  }
}