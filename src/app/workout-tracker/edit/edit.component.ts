import { Component, OnInit } from '@angular/core';
import { WorkOut } from '../../model/workouttracker';
import { ActivatedRoute } from '@angular/router';
import { categoryService } from '../../service/categoryService';
import { workoutcollectionService} from '../../service/workoutcollectionService'
import { Category } from '../../model/category';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers :[categoryService,workoutcollectionService]
})
export class EditComponent implements OnInit {
    workout = new WorkOut();    
    categories : Array<Category>; 
    constructor(private router : ActivatedRoute,private _categoryService : categoryService, private _workoutService : workoutcollectionService) {

      this.editComponentData();
     }

  ngOnInit() {
    //this.editComponentData();
    // if(localStorage.getItem("workOuts")!=null)    
    // {
    //   this.workouts = JSON.parse(localStorage.getItem("workOuts"));
    //   this.workout = this.workouts.find(k=> k.WorkOutId ==this.router.snapshot.params.Id)      
    // }
  }
  editComponentData()
  {  
    this._categoryService.getAll().subscribe(cateogries => {this.categories = cateogries});  
    this.workout.WorkOutId =  this.router.snapshot.params.Id;
    this._workoutService.get(this.workout.WorkOutId).subscribe(workout => {this.workout = workout;
      
    });   
  }
  UpdateWorkOut()
  {
    this._workoutService.Update(this.workout).subscribe((resp:Response)=>{ resp.json()})    
  }

  Increment()
  { 
      this.workout.CaloriesBurnPerMin = this.workout.CaloriesBurnPerMin+ 1;
  }
  Decrement()
  {
    if(this.workout.CaloriesBurnPerMin >0)
    this.workout.CaloriesBurnPerMin = this.workout.CaloriesBurnPerMin-1;
  }

}
