import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-recipe',
  template: `
  <div #addModal class="modal show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Add Recipe</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="goHome()">Close</button>
          <button type="submit" class="btn btn-primary">Add Recipe</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AddRecipeComponent{
  
  constructor(private router:Router){}
  
  goHome()
  {
    this.router.navigate(['foodsack']);
  }

}