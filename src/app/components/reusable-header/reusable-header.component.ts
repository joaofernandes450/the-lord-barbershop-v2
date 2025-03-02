import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reusable-header',
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './reusable-header.component.html',
  styleUrl: './reusable-header.component.scss',
  standalone: true,
})
export class ReusableHeaderComponent {}
