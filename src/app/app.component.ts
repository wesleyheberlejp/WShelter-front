import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SenhasComponent } from './senhas/senhas.component';
import { SenhasService } from '../services/senhasService';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BaseService } from '../services/BaseService';
import { AppSettings } from '../services/AppSettings';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
      SenhasService,
      BaseService,
      HttpClient,
      AppSettings
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        NgbModule,
        SenhasComponent
    ]
})
export class AppComponent {


}
