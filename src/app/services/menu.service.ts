import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Menu } from "../models/menu";

import { Observable } from "rxjs/Observable";
import { GeneralService } from "../services/general.service";
import '../rxjs-operators';


@Injectable()
export class MenuService {

  private API_URL_MENU_CATEGORIES: string = '/menu/categories'

  constructor(private http:Http, private generalService: GeneralService) { }

  loadCategoryMenu(){
    this.http.get(this.generalService.url(this.API_URL_MENU_CATEGORIES))
             .map(this.generalService.extrairDados)
             .catch(this.generalService.processarErros);
  }

}
