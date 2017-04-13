import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Category } from "../models/category";

import { Observable } from "rxjs/Observable";
import { GeneralService } from "../services/general.service";
import '../rxjs-operators';


@Injectable()
export class CategoryService {

  private API_URL_CATEGORIES: string = '/categories'

  constructor(private http:Http, private generalService: GeneralService) { }

  loadCategories(){
    return this.http.get(this.generalService.url(this.API_URL_CATEGORIES))
                    .map(this.generalService.extrairDados)
                    .catch(this.generalService.processarErros);
  }

}
