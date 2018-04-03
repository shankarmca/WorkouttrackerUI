import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkoutTrackComponent} from './workout-track/workout-track.component'
import {AllworkoutsComponent} from './workout-tracker/allworkouts/allworkouts.component'
import {WorkoutCategoryComponent} from './workout-category/workout-category.component'
import {CreateComponent} from './workout-tracker/create/create.component'
import {EditComponent} from './workout-tracker/edit/edit.component'
import {EndWorkoutComponent} from './workout-tracker/end-workout/end-workout.component'
import {StartWorkoutComponent} from './workout-tracker/start-workout/start-workout.component'
import {ErrorComponent} from './error/error.component'
import { Router } from '@angular/router/src/router';
// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'workouts', component: WorkoutTrackerComponent }     
//     ]
//   }
// ];

const routes : Routes = [
    {
        path: '',component:AllworkoutsComponent
    },
    {
        path: 'workouts',component:AllworkoutsComponent
    },
    {
        path: 'Category',component:WorkoutCategoryComponent
    },
    {
        path: 'Track',component:WorkoutTrackComponent
    },
    {
        path: 'Create',component:CreateComponent
    },
    {
        path: 'Edit/:Id',component:EditComponent
    },
    {
        path: 'End/:Id/:WorkOutId',component:EndWorkoutComponent
    },
    {
        path: 'Start/:Id',component:StartWorkoutComponent
    },
    {
        path: '**',component:ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
