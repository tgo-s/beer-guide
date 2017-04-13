import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs/add/operator';

@Injectable()
export class GeneralService{

    private API_URL: string = 'http://api.brewerydb.com/v2';

    /**
     * Método para montagem da
     * @param path 
     */
    url(path: string){
        return this.API_URL + path;
    }

    /**
     * Método para montar o cabeçalho da requisição http
     */
    httpHeaders(){
        let headersParams = { 'Content-Type': 'application/json' }
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    /**
     * Método para extrair o JSON de um objeto de requisição
     * @param response Objeto Response da requisição
     */
    extrairDados(response: Response){
        let resp = response.json();
        let data;
        if(resp.status === 'success'){
            data = resp.data;
        }
        else{
            data = resp.message;
        }
        return data || {};
    }

    /**
     * Método para tratar o erro da requisição http
     * @param error 
     */
    processarErros(error: any){
        return Observable.throw(error);
    }
}