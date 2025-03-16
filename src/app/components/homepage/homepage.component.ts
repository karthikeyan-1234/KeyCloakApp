import { Component } from '@angular/core';
import { KeycloakOperationService } from '../../services/keycloak.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  userProfile: any | null = null;

  constructor(private keyCloakService: KeycloakOperationService) { }

  ngOnInit(): void {

    //Check if keycloak is initialized
    if (!this.keyCloakService.isLoggedIn()) {
      console.log('User not logged in, redirecting to login...');
      this.keyCloakService.login();
    }

    this.keyCloakService.getUserProfile().then((data: any) => {
      this.userProfile = data;
      console.log('User profile from HomePage: ');
      console.table(this.userProfile);
    });
  }

  isLoggedIn(): boolean {
    return this.keyCloakService.isLoggedIn();
  }

  logout(): void {
    this.keyCloakService.logout();
  }

  getUserProfile(): any {
    return this.keyCloakService.getUserProfile();
  }

  getUserName(): string {
    if (this.keyCloakService.isLoggedIn()) {
      return this.keyCloakService.getUserName();
    }
    return "Guest";
  }

}
