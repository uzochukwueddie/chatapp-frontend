import { TokenService } from './services/token.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {
    const token = this.tokenService.GetToken();
    if (token) {
      this.router.navigate(['streams']);
    } else {
      this.router.navigate(['']);
    }
  }
}
