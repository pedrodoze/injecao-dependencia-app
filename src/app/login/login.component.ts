import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.username && this.password) {
      // Simulando lógica de autenticação
      this.message = this.authService.login(this.username, this.password);
    } else {
      this.message = 'Por favor, insira usuário e senha.';
    }
  }
}
