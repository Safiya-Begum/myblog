import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitVisibleContent'
})
export class LimitVisibleContentPipe implements PipeTransform {
  textString:string;
  transform(value: any, args?: any): any {
    if(value && value.length>200){
      this.textString=value.substring(0,200);
    }
    else{
      this.textString=value;
    }
    return this.textString;
  }

}
