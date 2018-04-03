import { Component, OnInit } from '@angular/core';
import { WorkOut} from '../../model/workouttracker';
import {workoutcollectionService } from '../../service/workoutcollectionService';
import {Router} from '@angular/router'
@Component({
  selector: 'app-allworkouts',
  templateUrl: './allworkouts.component.html',
  styleUrls: ['./allworkouts.component.css'],
  providers : [workoutcollectionService]
})
export class AllworkoutsComponent implements OnInit {
 workOuts : Array<WorkOut>;
 ddlworkOuts : Array<WorkOut>;
  constructor(private routes : Router , private _workoutService : workoutcollectionService) { 
    this.getallWorkOut();
  }

  ngOnInit() {
    this.getallWorkOut();
  }
  getallWorkOut()
  {
     this._workoutService.getAll().subscribe( workoutCollection =>{ 
       this.workOuts = workoutCollection; this.ddlworkOuts = workoutCollection;
      });
  }

  searchWorkout(sname)
  {
    if(sname!="")
    {
    this._workoutService.search(sname).subscribe(
      resp=> {
          this.workOuts = resp;
      }
     )
    }
     else 
     this.getallWorkOut();
  }

  deleteWorkOut(id)
  {    
    this._workoutService.Delete(id).subscribe(data => {      
      this.getallWorkOut();
      return true;
    });
  }

  startWorkOut(Id)
  {       
    this.routes.navigateByUrl('/Start/'+Id)
  }

  endWorkOut(Id, WorkOutId)
{

  this.routes.navigateByUrl('/End/'+Id + "/"+WorkOutId )
}
}
