import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { categoryService } from '../service/categoryService';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-workout-category',
  templateUrl: './workout-category.component.html',
  styleUrls: ['./workout-category.component.css'],
  providers: [categoryService]
})
export class WorkoutCategoryComponent implements OnInit {

  categories : Category[];
  ddlCategories : Category[];

  category = new Category();
  editRowId: any;
  edited = false;
  rowCount : number = 0;
  constructor(private _categoryservice : categoryService) { 
    this.getAllCategories();  
  }

  toggle(id){
    this.editRowId = id;
  }

  ngOnInit() {
    this.getAllCategories();    
  }
  getAllCategories (){
    this._categoryservice.getAll()
    .subscribe(categories => {this.categories = categories; this.ddlCategories = categories;});
  }
  editCategory(id)
  {    
    this.edited = true;
  }
  addCategory()
  {    
    this.category.CategoryId = 0;    
     this._categoryservice.addCategory(this.category).subscribe(data => {      
      this.getAllCategories();
      this.category = new Category();
      return true;
    },
    error => {
      console.error("Error saving Category!");
      return Observable.throw(error);
    })
  }
  deleteCategory(id)
  {   
    
    this._categoryservice.deleteCategory(id).subscribe(data => {      
      this.getAllCategories();
      return true;
    },
    error => {
      console.error("Error saving Category!");
      return Observable.throw(error);
    })
    
  }
  updateCategory(Id,name)
  {
    this.category.CategoryId = Id;
    this.category.CategoryName = name;
    this._categoryservice.addCategory(this.category).subscribe(data=>{
      this.getAllCategories();
      this.editRowId = 0;
      this.category.CategoryName="";
    })
    
  }
  searchCategory(sname)
  {
      if(sname!= "")
      {
          this._categoryservice.search(sname).subscribe((resp)=>{
            this.categories = resp;
          })
      }
      else 
       this.getAllCategories();
  }

}
