import { Component } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from "./lista/lista.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-senhas',
    standalone: true,
    templateUrl: './senhas.component.html',
    styleUrl: './senhas.component.scss',
    imports: [CadastroComponent, ListaComponent, CommonModule]
})
export class SenhasComponent {
  public ExibirCadastro = false;

  OpenCadastro(){
    this.ExibirCadastro = true;
  }
}
