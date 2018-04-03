import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOut } from '../../model/workouttracker';
import { WorkOutActive } from '../../model/workoutactive';
import { workoutactiveService } from '../../service/workoutactiveService';
@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css'],
  providers : [workoutactiveService]
})
export class EndWorkoutComponent implements OnInit {
  workout = new WorkOutActive();
  Info :any;
  endDate ;
  endTime;
  
  constructor(private router : ActivatedRoute,private route : Router,  private _workoutService : workoutactiveService) {
    this.endDate = new Date().toLocaleDateString().slice(0,10); 
    this.endTime = new Date().toTimeString().slice(0,8);   
    this.Info="";
    this.endComponentData(); 
   }

  ngOnInit() {
    // if(localStorage.getItem("workOuts")!=null)    
    // {
    //   this.workouts = JSON.parse(localStorage.getItem("workOuts"));
    //   this.workout = this.workouts.find(k=> k.WorkOutId ==this.router.snapshot.params.Id)      
    // }
  }
  endComponentData()
  { 
    
    this.workout.WorkOutId =  this.router.snapshot.params.WorkOutId;    
    this.workout.Id = this.router.snapshot.params.Id    
    this._workoutService.getEnd(this.workout.Id,this.workout.WorkOutId).subscribe(workout => {
      this.workout = workout;   
      this.workout.EndTime = this.endTime;      
    });   
  }
  addEndWorkOut()
  {
    this.workout.EndDate = this.endDate ;
    this.workout.EndDate = this.workout.EndDate.toString().split('/').join('_');
    this.workout.EndTime = this.endTime.toString().split(':').join('_');
    this._workoutService.AddEnd(this.workout).subscribe(data=>{ 
      this.endComponentData();
      this.route.navigateByUrl('workouts');
    }, (err)=>{
      this.Info = "Error Occurred";
    });

  }


}
