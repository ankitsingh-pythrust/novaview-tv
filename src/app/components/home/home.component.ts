import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDividerModule } from '@angular/material/divider';

@Component ({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public mobileMenuOpen = false;
  public toggleMobileMenu(): void { this.mobileMenuOpen = !this.mobileMenuOpen; }
  public closeMobileMenu(): void { this.mobileMenuOpen = false; }
  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
