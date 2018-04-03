import { 
    Injectable 
 } from '@angular/core';  

import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { WorkOutActive } from '../model/workoutactive';
import { calroieSummary, chart } from '../model/calroieSummary';

 
@Injectable()
export class workoutactiveService {  
  baseUrl : string ="http://localhost/WorkOutService";

   constructor(private _http: Http){}
   


   getStart(Id : number):Observable<WorkOutActive> { 
     return this._http.get(this.baseUrl + "/api/workoutactive/start/"+ Id)
   .map((response: Response) => <WorkOutActive> response.json());      
 }

 getEnd(Id : number, workId : number):Observable<WorkOutActive> { 
  return this._http.get(this.baseUrl + "/api/workoutactive/end/"+ Id + "/"+ workId )
.map((response: Response) => <WorkOutActive> response.json());      
}
 
  AddStart(model : WorkOutActive):Observable<any>
  { 
    console.log(model);
      return this._http.post(this.baseUrl + "/api/workoutactive/Add/"+ model.WorkOutId +"/"
    + model.WorkOutComment+"/"+model.StartDate+"/"+model.StartTime, "")
    .map((response: Response) => <WorkOutActive> response.json());      
  }

  AddEnd(model : WorkOutActive):Observable<any>
  { 
    
      return this._http.post(this.baseUrl + "/api/workoutactive/Update/"
       + model.Id + "/"+ model.WorkOutId +"/"
    + model.WorkOutComment+"/"+model.EndDate+"/"+model.EndTime, "")
    .map((response: Response) => <WorkOutActive> response.json());      
  }


  getCalorieSummary()
  { 
      return this._http.get(this.baseUrl + "/api/report/workoutsummary")
      .map((response: Response) => <calroieSummary> response.json());      
    }

    getweeklyChartSummary()
    {
      return this._http.get(this.baseUrl + "/api/report/weeklyChart")
      .map((response: Response) => <chart> response.json()); 
    }
     getMonthlyChartSummary()
    {
      return this._http.get(this.baseUrl + "/api/report/monthlyChart")
      .map((response: Response) => <chart> response.json()); 
    }
     getYearlyChartSummary()
    {
      return this._http.get(this.baseUrl + "/api/report/yearlyChart")
      .map((response: Response) => <chart> response.json()); 
    }
   
}