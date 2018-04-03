import { 
    Injectable 
 } from '@angular/core';  
import { WorkOut } from '../model/workouttracker';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
 
 @Injectable()
 export class workoutcollectionService {  
    baseUrl : string ="http://localhost/WorkOutService";

    constructor(private _http: Http){}
    
    getAll():Observable<WorkOut[]> { 
        return this._http.get(this.baseUrl + "/api/workout")
      .map((response: Response) => <WorkOut[]> response.json());      
    } 
    get(Id : number):Observable<WorkOut> { 
      return this._http.get(this.baseUrl + "/api/workout/"+ Id)
    .map((response: Response) => <WorkOut> response.json());      
  } 
  search(name : string):Observable<WorkOut[]> { 
      return this._http.get(this.baseUrl + "/api/workout/search/"+ name)
    .map((response: Response) => <WorkOut[]> response.json());      
  } 


    Add (item:WorkOut):Observable<any> { 
       
        return this._http.post(this.baseUrl + "/api/workout/Add/" + item.WorkOutTitle + "/"+ item.WorkOutNote + "/"+ item.CaloriesBurnPerMin + "/"+ item.CategoryId , "")
      .map((response: Response) => <string> response.json());      
    } 

    Update (item:WorkOut):Observable<any> { 
       
        return this._http.post(this.baseUrl + "/api/workout/Update/"+item.WorkOutId+"/" + item.WorkOutTitle + "/"+ item.WorkOutNote + "/"+ item.CaloriesBurnPerMin + "/"+ item.CategoryId , "")
      .map((response: Response) => <WorkOut> response.json());      
    } 

    Delete (Id:number):Observable<any> {         
      return this._http.post(this.baseUrl + "/api/workout/Delete/"+Id,"")
    .map((response: Response) => <WorkOut> response.json());      
  } 
}