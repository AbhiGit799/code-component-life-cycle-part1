import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() pData: any;
  @Input() nameList:string[];

  constructor()
  {
    console.log("Child component constructor called.");
  }

  ngOnChanges(changes:any)
  {
     //In specific condition ngOnChanges() calls i.e with @Input()
    
     console.log("ChildComponent ngOnChanges called.");
    
     // console.log(this.pData);

    console.log(changes);
    //previousValue: undefined, currentValue: '', firstChange: true

    
     
  }

  ngOnInit()
  {
    console.log("ChildComponent component ngOnInit");
    
  }

  ngDoCheck() //rarely used. It degrades the performance.
  {
    console.log("Child component ngDoCheck");
  }

  // Important Note
// ==============
// Reference change karne par ngOnChanges() call nahi hota hai.

}
