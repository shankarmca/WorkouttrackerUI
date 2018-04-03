import { Component, OnInit } from '@angular/core';
import { categoryService } from '../service/categoryService';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { workoutactiveService } from '../service/workoutactiveService';
import { calroieSummary, chart, ChartModel } from '../model/calroieSummary';


@Component({
  selector: 'app-workout-track',
  templateUrl: './workout-track.component.html',
  styleUrls: ['./workout-track.component.css'],
  providers: [workoutactiveService]
})
export class WorkoutTrackComponent implements OnInit {
  calroiesummary = new calroieSummary();
  chart = new chart();
   
  public barChartLabels:string[] =["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
  public barChartData:number[] = [0];
  public barChartType:string = 'bar';
 public barChartLegend : boolean = false;
  public barChartLabels1:string[] =["Week1","Week2","Week3","Week4","Week5"];
  public barChartData1:number[] = [1];
  public barChartLabels2:string[] =["1","2","3","4","5","6","7","8","9","10","11","12"];
  public barChartData2:number[] = [1];
 public weekTotalCalorie : number = 0;
 public monthlyTotalCalorie : number = 0;
 public yearlyTotalCalorie : number = 0;

  constructor(private _workoutService : workoutactiveService) { 
      this.loadSummary();      
  }
 
  ngOnInit() {
    this.loadChart();
  }

  loadSummary()
  {
      this._workoutService.getCalorieSummary()
      .subscribe(calorie => {this.calroiesummary = calorie; console.log(this.calroiesummary)});
  }

  loadChart()
  {
    this._workoutService.getweeklyChartSummary()
    .subscribe(charts => {             
        this.barChartLabels = charts.ChartLabel;        
        this.barChartData = charts.ChartData; 
        const reducer = (accumulator, currentValue) => accumulator + currentValue;     
        this.weekTotalCalorie = this.barChartData.reduce(reducer); 
    })
    this._workoutService.getMonthlyChartSummary()
    .subscribe(charts => {             
        this.barChartLabels1 = charts.ChartLabel;        
        this.barChartData1 = charts.ChartData;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;     
        this.monthlyTotalCalorie = this.barChartData1.reduce(reducer);
    })
    this._workoutService.getYearlyChartSummary()
    .subscribe(charts => {             
        this.barChartLabels2 = charts.ChartLabel;        
        this.barChartData2 = charts.ChartData;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;     
        this.yearlyTotalCalorie = this.barChartData2.reduce(reducer);
    })

  }

}
