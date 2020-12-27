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
@Pipe({name: 'percentagePipe'})
export class PercentagePipe implements PipeTransform {
  transform(value: number): string {
    value = Math.floor(value * 10000) / 100;

    return value + "%";
  }
}