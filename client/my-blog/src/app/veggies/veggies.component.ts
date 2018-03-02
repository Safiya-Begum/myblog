import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';
import {CustomCallbacksService} from '../custom-callbacks.service';

@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrls: ['./veggies.component.scss']
})
export class VeggiesComponent implements OnInit {
  CATEGORY:string="veggies";
  emptyResponseData:any="Loading...";
  isViewRequest:boolean=false;
  showAddPostLink:boolean=false;
  postContent:any;
  responseData:any;
  constructor(private _router:Router, private _blogService:BlogService, private _callbackService:CustomCallbacksService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let postId=this._activatedRoute.snapshot.params['id'];
    if(postId){
     this.isViewRequest=true;
      this._blogService.getPost(this.CATEGORY,postId).subscribe((response)=>{
        this.postContent=response;
      }, (error)=>{
        console.log('An error has occurred',error);
      });
    }
    else{
      this.isViewRequest=false;
      this._blogService.getPosts(this.CATEGORY).subscribe((response)=>{
        this.responseData=response;
        if(this.responseData && this.responseData.length==0){
          this.emptyResponseData="No Posts Yet. Would like to add one? ";
          this.showAddPostLink=true;
        }
        else{
          this.emptyResponseData="";
          this.showAddPostLink=false;
        }
      }, (error)=>{
        console.log('An error has occurred',error);
      });
    }
  }

  getCurrentPostId(value:string){
    return value.split('_')[1];
  }

  updatePost(eventObj:any){
    let postTobeUpdated=this.getCurrentPostId(eventObj.target.name);
    this._router.navigate(['/updatePost/'+this.CATEGORY+'/'+postTobeUpdated]);
  }

  deletePost(eventObj:any){
    let postTobeDeleted=this.getCurrentPostId(eventObj.target.name);
    this._blogService.deleteCurrentPost(this.CATEGORY,postTobeDeleted).subscribe((response)=>{
      if(response && response.status === 'OK'){
        this._callbackService.successCallback(this.CATEGORY,this);
        }
    },(error)=>{
      console.log('An error has occurred',error);
    });
  }

}
