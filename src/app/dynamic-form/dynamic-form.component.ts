import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  rawFormData: any = [];

  formData = new FormGroup({});

  constructor(private fbService: FormBuilderService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fbService.form.subscribe((field) => {
      this.rawFormData.push(field)
      if (field.type === 'checkbox') {
        this.formData.addControl(field.name, new FormArray([], Validators.required))
      } else {
        this.formData.addControl(field.name, new FormControl('', Validators.required))
      }
    });
  }

  handleCheckBox(event: any) {

    const temp: FormArray = this.formData.get(event.target.name) as FormArray;

    if (!event.target.checked) {
      let index = temp.value.indexOf(event.target.value);
      temp.removeAt(index);
    } else {
      temp.push(this.fb.control(event.target.value))
    }
  }

  onSubmit() {
    console.log(this.formData.value);
    this.formData.reset();
  }

}
