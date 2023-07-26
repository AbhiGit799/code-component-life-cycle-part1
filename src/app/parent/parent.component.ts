import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor()
  {
    console.log("Parent component constructor called.");
    
  }

  ngOnChanges()
  {
     //In specific condition ngOnChanges() calls i.e with @Input()
     console.log("Parent component ngOnChanges called.");
     
  }
  
  ngOnInit()
  {
    console.log("Parent component ngOnInit");
    
  }

  ngDoCheck() //rarely used. It degrades the performance.
  {
    console.log("Parent component ngDoCheck");
  }
  

  names = ["Arjun","Ram"];

  addName(nam:any)
  {
     this.names.push(nam);
  }

// Important Note
// ==============
// Reference change karne par ngOnChanges() call nahi hota hai.


}





