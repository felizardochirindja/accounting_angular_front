import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  standalone: true,
  selector: 'app-skeleton',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
