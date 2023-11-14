import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): string {
    // Lógica de autenticação (exemplo simples)
    if (username === 'user' && password === 'password') {
      return 'Login bem-sucedido! Usuário autenticado.';
    } else {
      return 'Credenciais inválidas. Tente novamente.';
    }
  }
}
