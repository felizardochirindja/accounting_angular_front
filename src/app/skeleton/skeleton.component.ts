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
            <li><a routerLink="./contabilidade/plano-de-contas">plano de contas</a></li>
            <li><a routerLink="./contabilidade/criar-conta">criar conta</a></li>
            <li><a routerLink="./contabilidade/criar-taxa">criar taxa</a></li>
          </ul>
          
          <li>
            <a routerLink="./productos-servicos/listar">productos e servicos</a>
            <ul>
              <li><a routerLink="./productos-servicos">criar servico</a></li>
                <li><a routerLink="./productos-servicos/criar">criar producto</a></li>
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
