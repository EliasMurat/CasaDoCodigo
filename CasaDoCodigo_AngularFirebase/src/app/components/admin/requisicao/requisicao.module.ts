import { MatIconModule } from '@angular/material/icon';
import { ListaComponent } from './../movimentacao/lista/lista.component';
import { MovimentacaoComponent } from './../movimentacao/movimentacao.component';
import { ComumModule } from 'src/app/modules/comum/comum.module';
import { NgModule } from '@angular/core';
import { RequisicaoRoutingModule } from './requisicao-routing.module';
import { RequisicaoComponent } from './requisicao.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [RequisicaoComponent, MovimentacaoComponent,  ListaComponent],
  imports: [
    ComumModule,
    RequisicaoRoutingModule,
    NgSelectModule,
    MatIconModule
  ]
})
export class RequisicaoModule { }
