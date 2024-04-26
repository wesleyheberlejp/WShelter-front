
import { HttpHeaders } from "@angular/common/http";
import { AppSettings } from "./AppSettings";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService{

  constructor(
    private AppSettings : AppSettings,

  ){}

  apiUrl = this.AppSettings.ApiUrl;

  public getOptionsArgs() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    let options = {
      headers: headers
    };

    return options;
  }
}
