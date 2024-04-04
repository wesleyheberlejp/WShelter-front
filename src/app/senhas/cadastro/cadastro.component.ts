import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent implements OnInit {

  @Input() ExibirCadastro! : boolean;

  constructor(private fb:FormBuilder){

  }

  public CadastroForm = this.fb.group({
    Local : this.fb.control(""),
    Senha : this.fb.control(""),
    Alias : this.fb.control(""),
  })

  ngOnInit(): void {
    console.log(this.ExibirCadastro);
  }
}
