import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-skeleton',
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
