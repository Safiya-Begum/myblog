import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  currentTimeStamp=new Date();
  category:string;
  postId:string;
  responseObj:any;
  currentPostExistingContent;
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _blogService:BlogService) { }

  ngOnInit() {
    this.postId=this._activatedRoute.snapshot.params['id'];
    this.category=this._activatedRoute.snapshot.params['category'];
    this._blogService.getPost(this.category,this.postId).subscribe((response)=>{
      this.responseObj=response;
     if(this.responseObj && this.responseObj.data){
      this.currentPostExistingContent=this.responseObj.data;
     }
     else{
      this.currentPostExistingContent="";
     }
    },(error)=>{
      console.log('An error Occurred',error);
    });
  }

  onUpdate(event:any, formData:any){
    let payload={data:formData.value.postedData,postedTime:formData.value.postedDate};
    this._blogService.updatePost(this.category,this.postId,payload).subscribe((response)=>{
      if(response && response.status){
        this._router.navigate(['/'+this.category]);
      }
    },(error)=>{
      console.log('An error has occurred',error);
    })
  }

}
