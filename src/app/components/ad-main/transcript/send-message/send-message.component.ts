import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  title = "ReactiveForms"
  reactiveForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      messageText: new FormControl(null)
    })
  }

}
