import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-skeleton',
  imports: [RouterModule],
  template: `
    <div>
      <nav>
        <ul>
          <li>contabilidade</li>
          <ul>
            <li><a [routerLink]="['/inicio/contabilidade/plano-de-contas']">plano de contas</a></li>
            <li><a [routerLink]="['/inicio/contabilidade/criar-conta']">criar conta</a></li>
          </ul>
          
          <li>
            <a [routerLink]="['/inicio/productos-servicos/listar']">productos e servicos</a>
            <ul>
              <li><a [routerLink]="['/inicio/productos-servicos']">criar servico</a></li>
                <li><a [routerLink]="['/inicio/productos-servicos/criar-producto']">criar producto</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
