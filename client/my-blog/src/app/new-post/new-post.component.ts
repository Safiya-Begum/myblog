import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  currentTimeStamp=new Date();
  isSelected=true;
  reponseObject:any;
  constructor(private _blogService:BlogService,private _router:Router) { }

  ngOnInit() {
    
  }

  onSubmit(eventObj:any, formData:any){
    let inputData=formData.value;
   this._blogService.savePost({category:inputData.postCategory, post: {itemName:inputData.itemName , data:inputData.postedData,postedTime:inputData.postedDate}}).subscribe((response)=>{
      this.reponseObject=response;
      if(this.reponseObject && this.reponseObject.status){
        this._router.navigate(['/'+inputData.postCategory]);
      }
    }, (error)=>{
      console.log(error);
    });
  }

}
