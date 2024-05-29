import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  ornamentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.ornamentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      weight: new FormControl(0, [Validators.required, Validators.min(0)]),
      diamondCarat: new FormControl(0, [Validators.required, Validators.min(0)]),
      priceMin: new FormControl(0, [Validators.required, Validators.min(0)]),
      priceMax: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      priceMedian: new FormControl(0, [Validators.required, Validators.min(0)]),
      currency: new FormControl('', [Validators.pattern('^[A-Za-z]*$')])
    });
  }

  onSubmit() {
    if (this.ornamentForm.valid) {
      console.log('Form Submitted', this.ornamentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
