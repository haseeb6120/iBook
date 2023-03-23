import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-sent-page',
  templateUrl: './sent-page.component.html',
  styleUrls: ['./sent-page.component.scss'],
})
export class SentPageComponent implements OnInit {
  friendDetailsForm!: FormGroup;

  draft$ = this.store.select((state) => state.draft);

  displayData: any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.friendDetailsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      name: ['', [Validators.required]],
      city: ['', [Validators.required]],
      draft: ['', [Validators.required]],
    });

    this.draft$.subscribe((draft) => {
      this.friendDetailsForm.get('draft')?.setValue(draft);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(form: FormGroup, formDirective: FormGroupDirective) {
    if (form.valid) {
      console.log('form values', form.value);
      this.openSnackBar('Draft Sent Successfully!', 'Close');
      this.friendDetailsForm.reset();
      formDirective.resetForm();
      this.router.navigate(['/']);
    }
  }

  getErrorMessage(): string {
    if (this.friendDetailsForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    } else if (this.friendDetailsForm.controls['email'].hasError('email')) {
      return 'Not a valid email';
    }
    if (this.friendDetailsForm.controls['address'].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.friendDetailsForm.controls['name'].hasError('required')) {
      return 'You must enter a value';
    }
    if (this.friendDetailsForm.controls['city'].hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }
}
