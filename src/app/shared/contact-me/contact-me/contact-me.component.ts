import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constStateAndUTs, StateAndUTs } from 'src/app/utils/constant';
export interface Client{
  name:string;
  phoneNumber:string;
  email: string;
  state:string;
  alt:string;
  city: string;
  query:string;
}
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  stateAndUTs:StateAndUTs[]=constStateAndUTs
  value=""
  fg: FormGroup = this.fb.group({
    name: [, Validators.compose([Validators.required])],
    phoneNumber: [, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    email: [, Validators.required],
    state:[""],
    alt:[],
    city:[],
    query:[]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
   
  }
  submit(){
    this.whatsAppMe(this.fg.value)
  }

  whatsAppMe(value:Client){
    let msg = "Hii!! Developer Myself "+ value.name + "%0a %0a And my query is "+ value.query + 
    "my location: "+ value.city +", "+value.state + "%0a %0a contact no " + value.phoneNumber + "%0a %0a alt no "+ value.alt  
    window.open("https://api.whatsapp.com/send/?phone=918376857964&text="+msg);
  }

  validatePhoneNo(event:any) {
    if ((event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 43 || event.keyCode == 32)
      return event.returnValue;
    return event.returnValue = '';
  }

}
