import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOutActive } from '../../model/workoutactive';
import { workoutactiveService } from '../../service/workoutactiveService';
import { Response } from '@angular/http/src/static_response';
@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css'],
  providers : [workoutactiveService]
})
export class StartWorkoutComponent implements OnInit {
  workout = new WorkOutActive();
  Info :any;
  startDate ;
  startTime;
  constructor(private router : ActivatedRoute, private route : Router,  private _workoutService : workoutactiveService) {
    this.startDate = new Date().toLocaleDateString().slice(0,10);    
    this.startTime = new Date().toTimeString().slice(0,8);    
    this.startComponentData();
    this.Info ="";
   }

  ngOnInit() {
   
  }

  startComponentData()
  { 
    
    this.workout.WorkOutId =  this.router.snapshot.params.Id;
    this._workoutService.getStart(this.workout.WorkOutId).subscribe(workout => {
      this.workout = workout;   
      this.workout.StartTime = this.startTime;      
    });   
  }
  addStartWorkOut()
  {
    this.workout.StartDate = this.startDate ;
    this.workout.StartDate = this.workout.StartDate.toString().split('/').join('_');
    this.workout.StartTime = this.startTime.toString().split(':').join('_');
    this._workoutService.AddStart(this.workout)
    .subscribe(data=>{ 
      this.startComponentData();
      this.route.navigateByUrl('workouts');
    }, (err)=>{
      this.Info = "Error Occurred";
    });
    
  }

}
