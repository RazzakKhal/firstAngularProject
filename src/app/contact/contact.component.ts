import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName : string= "";
  firstNameList : string [] = [];

  addFirstName(){
    this.firstNameList.push(this.firstName);
    this.firstName="";
  }

  deleteFirstName(index : number){
this.firstNameList.splice(index, 1);
  }

}
