import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { categoryService } from '../../service/categoryService';
import { workoutcollectionService} from '../../service/workoutcollectionService'
import { WorkOut } from '../../model/workouttracker';
import { JsonPipe } from '@angular/common/src/pipes/json_pipe';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers :[categoryService,workoutcollectionService]
})
export class CreateComponent implements OnInit {
 Info : string;
  categories : Array<Category>; 
  workout = new WorkOut();
  constructor(private _categoryService : categoryService, private _workoutService : workoutcollectionService) { 
    
   this.OnComponentLoad();
  }

  OnComponentLoad()
  {
     this.Info = "";
      this.workout = new WorkOut();
     this.workout.CaloriesBurnPerMin = 0;
     this.workout.CategoryId = 0;
     this._categoryService.getAll().subscribe(cateogries => {this.categories = cateogries});
     
  }

  ngOnInit() {
  }

  addWorkOut()
  {  

    this._workoutService.Add(this.workout).subscribe(data=>{
      this.OnComponentLoad();
      this.Info="WorkOut Created Successfully"
      return true;
    })
    
    

    // if(localStorage.getItem("workOuts")==null)    
    //   this.workOuts =[];
    // else 
    //   this.workOuts = JSON.parse(localStorage.getItem("workOuts"));
    
    // this.workOuts.push(new WorkOut(this.workOuts.length+1, this.workout.Title, this.workout.Note,
    // this.workout.Calories, this.workout.Id,0));
    //localStorage.setItem("workOuts", JSON.stringify(this.workOuts) );
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
