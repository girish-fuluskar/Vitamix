import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeProvider {

  constructor(public http: HTTP, public https: Http ) {
    console.log('Hello RecipeProvider Provider');

  }

  getMessage() {
      // let receipeURL = "assets/json/message.json";
      // this.http.setHeader('*','Access-Control-Allow-Origin','*');
      // return this.http.get(receipeURL, null, null);

      return this.https.post("assets/json/message.json", null, null)
                .map(res => res.json());
  }


  
  getReceipe() {
    let receipeURL = "https://6CF2BCEC6C334E8DB6378E18FEAE1D05.mobile.ocp.oraclecloud.com:443/mobile/custom/VitamixCustomAPI2/recipeData";
    this.http.setHeader('*','Access-Control-Allow-Origin','*');
    this.http.setHeader('*', 'Authorization', 'Basic Z2lyaXNoLmZ1bHVza2FyQGxudGluZm90ZWNoLmNvbTpOZXd1c2VyMTIzNDU2Nzg5MA==');
    this.http.setHeader('*', 'Oracle-Mobile-Backend-Id', '4752a39d-ffed-43ce-9f7c-f5e80b047f09');
    return this.http.get(receipeURL, null, null);
  }

  getBlender() {
    let receipeURL = "https://6CF2BCEC6C334E8DB6378E18FEAE1D05.mobile.ocp.oraclecloud.com:443/mobile/custom/VitamixCustomAPI2/getBlenders";
   
    this.http.setHeader('*','Access-Control-Allow-Origin','*');
    this.http.setHeader('*', 'Authorization', 'Basic Z2lyaXNoLmZ1bHVza2FyQGxudGluZm90ZWNoLmNvbTpOZXd1c2VyMTIzNDU2Nzg5MA==');
    this.http.setHeader('*', 'Oracle-Mobile-Backend-Id', '4752a39d-ffed-43ce-9f7c-f5e80b047f09');
    return this.http.get(receipeURL, null, null);
  }


}


