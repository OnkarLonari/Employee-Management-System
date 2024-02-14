import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  user: User = new User();
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {}

  onSubmit() {
    this.userService.register(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert('Error registering new user!');
        console.log(error);
      },
    });
  }
}
