import { Component, OnInit } from '@angular/core';
import { Senha } from '../../../Models/Senha';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent implements OnInit{

  Senhas : Senha[] = [];

  ngOnInit(): void {
    this.ListaSenhas();
  }

  private ListaSenhas(){

    this.Senhas.push({
      Id:0,
      Local : "www.google.com",
      Alias : "Google",
      Senha : "123",
      Expandir : false
    })

    this.Senhas.push({
      Id:1,
      Local : "www.google.com",
      Alias : "Google",
      Senha : "123",
      Expandir : false,
    })

    this.Senhas.push({
      Id:2,
      Local : "www.google.com",
      Alias : "Google",
      Senha : "123",
      Expandir : false,
    })

    this.Senhas.push({
      Id:3,
      Local : "www.google.com",
      Alias : "Google",
      Senha : "123",
      Expandir : false,
    })
  }

  public ToggleSenha(id : number){
      let senha = this.Senhas.filter(p => p.Id == id)[0];
      senha.Expandir = !senha.Expandir;
  }

}
