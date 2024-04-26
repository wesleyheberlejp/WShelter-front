import { Component, OnInit } from '@angular/core';
import { Senha } from '../../../Models/Senha';
import { CommonModule } from '@angular/common';
import { SenhasService } from '../../../services/senhasService';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent implements OnInit{

  Senhas : Senha[] = [];

  constructor(
    private SenhasService : SenhasService
  ){}

  ngOnInit(): void {
    this.GetSenhas()
  }

  private GetSenhas(){
    this.SenhasService.GetSenhas().subscribe(
      (response:Senha[]) => {
        this.Senhas = response;
      }
    )
  }

  public ToggleSenha(id : number){
      let senha = this.Senhas.filter(p => p.Id == id)[0];
      senha.Expandir = !senha.Expandir;
  }

}
