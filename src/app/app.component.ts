import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './form-validation/must-match.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apporatart-two';
  registerForm: FormGroup;
  
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          Companyname: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

  
    if (this.registerForm.invalid) {
        return;
    }

    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
