import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BlogService{

  constructor(private _http:Http) { }
  savePost(dataTobePosted){
    return this._http.post('http://localhost:3000/api/savePost', dataTobePosted)
            .map((response:Response)=>response.json())
            .catch(this.handleError);
  }

  private handleError(error:any,caught:any):any{
    console.log('An error has occurred');
    return {error:'An error has occurred', trace:error};
  }

  getPost(category,id){
    return this._http.get('http://localhost:3000/api/getMyPost/'+ category+'/'+id)
    .map((response:Response)=>{return response.json()})
    .catch(this.handleError);
  }

  getPosts(category){
    return this._http.get('http://localhost:3000/api/getMyPosts/'+ category)
    .map((response:Response)=>{return response.json()})
    .catch(this.handleError);
  }

  updatePost(category,id,dataTobeUpdated){
    console.log(dataTobeUpdated);
    return this._http.put('http://localhost:3000/api/updatePost/'+category+'/'+id,dataTobeUpdated)
    .map((response:Response)=>{return response.json()})
    .catch(this.handleError);
  }

  deleteCurrentPost(category,id){
    return this._http.delete('http://localhost:3000/api/deletePost/'+category+'/'+id)
    .map((response:Response)=>{
        return response.json();
    })
    .catch(this.handleError);
  }

}
