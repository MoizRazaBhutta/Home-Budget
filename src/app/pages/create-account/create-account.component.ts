import { Component, OnInit } from '@angular/core';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { ButtonComponent } from '../../components/button/button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [InputFieldComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  createAccount() {
    this.userService.addUser(this.accountForm.value.name);
    this.router.navigate(['/home']);
  }
}
