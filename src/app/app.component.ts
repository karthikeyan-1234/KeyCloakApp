import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VERSION } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KeycloakAngularModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeyCloakApp';
  userName: string | undefined;

  constructor(private keyCloakService: KeycloakService) {
    console.log('Angular version: ', VERSION.full);
  }
  

  async ngOnInit() {
    // console.log('AppComponent initialized');

    // if (this.keyCloakService.isLoggedIn()) {
    //   try {
    //     const userProfile = await this.keyCloakService.loadUserProfile();
    //     this.userName = userProfile.username;
    //     console.log('User profile: ', userProfile);
    //   } catch (error) {
    //     console.error('Error loading user profile:', error);
    //   }
    // } else {
    //   console.log('User not logged in, redirecting to login...');
    //   this.keyCloakService.login();
    // }
  }

  ngOnDestroy() {
    console.log('AppComponent destroyed');
  }

  isLoggedIn(): boolean {
    return this.keyCloakService.isLoggedIn();
  }

  getUserName(): string {
    if (this.keyCloakService.isLoggedIn()) {
      return this.keyCloakService.getUsername();
    }
    return "Guest";
  }

  logout(): void {
    this.keyCloakService.logout('http://localhost:4200');
  }
}
