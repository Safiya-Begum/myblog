import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Router,ActivatedRoute} from '@angular/router';
import {CustomCallbacksService} from '../custom-callbacks.service';

@Component({
  selector: 'app-dryfruits',
  templateUrl: './dryfruits.component.html',
  styleUrls: ['./dryfruits.component.scss']
})
export class DryfruitsComponent implements OnInit {
  CATEGORY:string="dryFruits";
  postContent:any;
  isViewRequest:boolean=false;
  responseData:any;
  emptyResponseData:any="Loading...";
  showAddPostLink:boolean=false;
  constructor(private _blogService:BlogService, private _router:Router, private _callbackService:CustomCallbacksService,
  private _activatedRoute:ActivatedRoute) { }

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
      this.isViewRequest=false
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

 updatePost(eventObj:any){
  let postTobeUpdated=this.getCurrentPostId(eventObj.target.name);
  this._router.navigate(['/updatePost/'+this.CATEGORY+'/'+postTobeUpdated]);
}

  getCurrentPostId(value:string){
    return value.split('_')[1];
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
