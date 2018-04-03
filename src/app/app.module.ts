import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-route-module'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WorkoutCategoryComponent } from './workout-category/workout-category.component';
import { WorkoutTrackComponent } from './workout-track/workout-track.component';
import { AllworkoutsComponent } from './workout-tracker/allworkouts/allworkouts.component';
import { CreateComponent } from './workout-tracker/create/create.component';
import { EditComponent } from './workout-tracker/edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { EndWorkoutComponent } from './workout-tracker/end-workout/end-workout.component';
import { StartWorkoutComponent } from './workout-tracker/start-workout/start-workout.component';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,        
    WorkoutCategoryComponent,
    WorkoutTrackComponent,
    AllworkoutsComponent,
    CreateComponent,
    EditComponent,
    ErrorComponent,    
    EndWorkoutComponent, StartWorkoutComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule , ReactiveFormsModule,AppRoutingModule,ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
