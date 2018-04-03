import { 
    Injectable 
 } from '@angular/core';  
import { Category } from '../model/category';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
 
 @Injectable()
 export class categoryService {  
        baseUrl :string="http://localhost/WorkOutService";

    constructor(private _http: Http){}
    getAll():Observable<Category[]> { 
        return this._http.get(this.baseUrl + "/api/Category")
      .map((response: Response) => <Category[]> response.json());      
    } 
    search(name:string):Observable<Category[]> { 
        return this._http.get(this.baseUrl + "/api/Category/search/"+ name)
      .map((response: Response) => <Category[]> response.json());      
    } 

    addCategory(_category : Category): Observable<any>
    {       
        
        return this._http.post(this.baseUrl + "/api/Category/Add/"+ _category.CategoryName +"/"+ _category.CategoryId,"")
        .map((res:Response)=>{res.json()})
    }
    
    deleteCategory(Id : number): Observable<any>
    {               
        return this._http.post(this.baseUrl + "/api/category/Delete/"+ Id,"").map((res: Response) => res.json());
    }


 }