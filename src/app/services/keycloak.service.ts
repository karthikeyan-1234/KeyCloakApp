import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloak: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }
  logout(): void {
    this.keycloak.logout();
  }

  login(): void {
    this.keycloak.login();
  }

  getUserProfile(): any {
    return this.keycloak.loadUserProfile();
  }

  getUserName(): string {
    if (this.keycloak.isLoggedIn()) {
      return this.keycloak.getUsername();
    }
    return 'Guest';
  }
  // Add other methods as needed for token access, user info retrieval, etc.}
}