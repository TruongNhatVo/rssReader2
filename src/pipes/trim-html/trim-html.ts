import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimHtml',
})
export class TrimHtmlPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/<(?:.|\n)*?>/gm, '');
  }
}
