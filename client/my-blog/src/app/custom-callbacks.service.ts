import { Injectable } from '@angular/core';
import {BlogService} from './blog.service';

@Injectable()
export class CustomCallbacksService {
  errorString:String="";
  constructor(private _blogService:BlogService) { }

  successCallback(category,context){
    let emptyResponseData, showAddPostLink, responseData;
    this._blogService.getPosts(category).subscribe(response=>{
      context.responseData=response;
      if(context.responseData && context.responseData.length==0){
        context.emptyResponseData="You've removed all posts. Would like to add one? ";
        context.showAddPostLink=true;
      }
      else {
        context.emptyResponseData="";
        context.showAddPostLink=false;
      }
      this.errorString="";
    },(error)=>{
        console.log('An error has Occurred',error);
        this.errorString="There is a temporary Glitch. Please try later.";
    });
  }
}
