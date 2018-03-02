import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {FruitsComponent} from './fruits/fruits.component';
import {VeggiesComponent} from './veggies/veggies.component';
import {DryfruitsComponent} from './dryfruits/dryfruits.component';
import { NewPostComponent } from './new-post/new-post.component';
import {BlogService} from './blog.service';
import {CustomCallbacksService} from './custom-callbacks.service'
import { UpdatePostComponent } from './update-post/update-post.component';
import { LimitVisibleContentPipe } from './limit-visible-content.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitsComponent,
    VeggiesComponent,
    DryfruitsComponent,
    NewPostComponent,
    UpdatePostComponent,
    LimitVisibleContentPipe
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BlogService,CustomCallbacksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
