import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <header class="mb-16">
      <mat-toolbar class="fixed top-0" color="primary">
        <mat-toolbar-row>
            <button mat-icon-button><mat-icon>arrow_back</mat-icon></button>
            <span>{{ title }}</span>
        </mat-toolbar-row>
      </mat-toolbar>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() public title!: string;
}
