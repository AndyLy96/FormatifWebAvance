import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  aimeLeSucre: boolean = false;
  aimeLeSel: boolean = false;

  constructor(private cookieService: CookieService, private router: Router) {
    this.aimeLeSucre = this.cookieService.get('aimeLeSucre') === 'true';
    this.aimeLeSel = this.cookieService.get('aimeLeSel') === 'true';
  }

  jaiFaim() {
    this.cookieService.set('aimeLeSucre', this.aimeLeSucre.toString());
    this.cookieService.set('aimeLeSel', this.aimeLeSel.toString());

    if (this.aimeLeSucre && this.aimeLeSel) {
      this.router.navigate(['/caramelAuSel']);
    } else if (!this.aimeLeSucre && !this.aimeLeSel) {
      this.router.navigate(['/verreDEau']);
    } else if (this.aimeLeSucre && !this.aimeLeSel) {
      this.router.navigate(['/bonbon']);
    } else if (!this.aimeLeSucre && this.aimeLeSel) {
      this.router.navigate(['/sel']);
    }
  }
}
