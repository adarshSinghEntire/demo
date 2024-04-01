 
import { NgSelectComponent } from '@ng-select/ng-select';
export default class Utility {
   
  public static openSlectBox(select: NgSelectComponent) {
    select.open();
    setTimeout(() => {
      select.focus();
      // select.handleClearClick();
    }, 10);
  }
  
}
