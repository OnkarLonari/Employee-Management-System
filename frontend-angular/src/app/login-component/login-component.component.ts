import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit{

  user: User = new User();
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.login(this.user).subscribe({
      next: (data) => {
        localStorage.setItem('new_token', data.token);
        localStorage.setItem('userrole', data.role);
        console.log(data.token);
        console.log(data.role);
        if (data.role == 'ADMIN') {
          this.router.navigate(['/employees']);
        } else if (data.role == 'USER') {
          this.router.navigate(['/create-employee']);
        }
      },
      error: (error) => {
        alert('Error logging in user!');
        console.log(error);
      },
    });
  }

}
