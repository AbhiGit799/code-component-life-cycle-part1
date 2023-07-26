import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,filter,map, mergeMap } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';


interface emp {
  Id: number;
  Name: string;
}

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

class EmployeeSameAppComp {
  private empCode: String;
  empName: String;

  private fun() {
    let name = 'Ajeet';
    console.log(name);
  }
}

class MyClass {
  name1: String; //Here, name1 is public by default

  private name2: string;

  protected name3: string;

  fun3() {
    console.log(this.name2);
  }
}

class MySubClass extends MyClass {
  fun() {
    console.log(this.name1);
    //console.log(this.name2); //Give error because name2 is private
    console.log(this.name3);
  }
}

class MySubChildClass extends MySubClass {
  fun2() {
    console.log(this.name3);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [Abc, EmployeeSameAppComp], //viewProviders is for using class.
  encapsulation: ViewEncapsulation.None,

  providers: [], //Making service component level ; //21-March-2023
})


export class AppComponent {

  title="Angular Tutorial";

  constructor(private _messageService:MessageService)
  {
      console.log("Constructor called of app.component.ts file");
      
  }

  ngOnChanges()
  {
     //In specific condition ngOnChanges() calls i.e with @Input()
     console.log("app.component.ts ngOnChanges called.");
     
  }

  ngOnInit()
  {
    console.log("app.component.ts ngOnInit called.");
    
    console.log(this._messageService.getMessage());
    
  }


  isShow:boolean=true;
  showHide()
  {
   this.isShow=!this.isShow;
  }

  ngOnDestroy()
  {
    console.log("AppComponent app.component.ts ngDestroy");
    
  }
   
}




























