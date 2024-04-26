import { AppSettings } from './AppSettings';
import { Observable } from "rxjs";
import { BaseService } from "./BaseService";
import { Senha } from "../Models/Senha";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SenhasService{
  apiUrl!: string;

  constructor(
    private http:HttpClient,
    private BaseService : BaseService,
    private AppSettings : AppSettings
  ){
    this.apiUrl = this.AppSettings.ApiUrl;
  }

  public GetSenhas() : Observable<Senha[]> {
    return this.http.get<Senha[]>(this.apiUrl + "/GetSenhas", this.BaseService.getOptionsArgs());
  }

  // public Post(path: string, data: any): Observable<any> {
  //   return this.http.post(this.apiUrl + path, JSON.stringify(data), this.BaseService.getOptionsArgs());
  // }

  // public Get(path: string): Observable<any> {
  //   return this.http.get(this.apiUrl + path, this.BaseService.getOptionsArgs());
  // }
}
