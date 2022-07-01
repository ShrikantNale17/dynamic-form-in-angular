import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../form-builder.service';

@Component({
	selector: 'app-add-field-form',
	templateUrl: './add-field-form.component.html',
	styleUrls: ['./add-field-form.component.css']
})
export class AddFieldFormComponent implements OnInit {

	formBuilder!: FormGroup;

	constructor(private fb: FormBuilder, private fbService: FormBuilderService) { }

	ngOnInit(): void {
		this.formBuilder = this.fb.group({
			label: this.fb.control('', [Validators.required]),
			type: ['', [Validators.required]],
			name: ['', [Validators.required]],
			value: ['']
		})
	}

	get type() {
		return this.formBuilder.get('type') as FormControl;
	}

	get value() {
		return this.formBuilder.get('value') as FormControl;
	}

	onSubmit() {
		// console.log(this.formBuilder.valid);
		if (this.formBuilder.valid) {
			this.fbService.raiseFormEmmiterEvent({ ...this.formBuilder.value, value: this.value.value ? this.value.value.split(",") : [] })
			this.formBuilder.reset()
		}
	}

}
