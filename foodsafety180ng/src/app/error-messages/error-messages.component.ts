import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
// import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  @Input() _formControlName;
  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage() {
    for (let propertyName in this._formControlName.errors) {
      if (this._formControlName.errors.hasOwnProperty(propertyName) && (this._formControlName.touched || this._formControlName.dirty)) {
        return ValidationService.getValidatorErrorMessage(propertyName, this._formControlName.errors[propertyName]);
      }
    }

    return null;
  }

}
