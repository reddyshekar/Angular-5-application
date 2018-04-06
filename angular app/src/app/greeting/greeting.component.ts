import { GreetingService } from './greeting.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  myform: FormGroup;
  greetingMessage:  string;
  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', [ 
        Validators.required])
    });
  }

  getMsg(model: any, isValid: boolean) {
    this.greetingMessage = "";
    if(!isValid) 
      return;
    this.greetingService.getGreetingMessage(model.name)
    .subscribe((products) => {
      this.greetingMessage = products;
    });
}

}
