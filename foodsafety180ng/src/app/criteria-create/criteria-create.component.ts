import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criteria-create',
  templateUrl: './criteria-create.component.html',
  styleUrls: ['./criteria-create.component.css']
})
export class CriteriaCreateComponent implements OnInit {

  criteriaForm: any;

  constructor(private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criteriaForm = this._FormBuilder.group({
      name: [
        '',
        [Validators.required,
        Validators.minLength(4)]
      ],
      lastName: [
        '',
        [Validators.required,
        Validators.minLength(4)]
      ]
    });
  }

  get name() { return this.criteriaForm.get('name'); }
  get lastName() { return this.criteriaForm.get('lastName'); }

  save(): void {
    console.warn(this.criteriaForm.value);
  }

}
