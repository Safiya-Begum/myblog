import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FruitsComponent} from './fruits/fruits.component';
import {VeggiesComponent} from './veggies/veggies.component';
import {DryfruitsComponent} from './dryfruits/dryfruits.component';
import { NewPostComponent } from './new-post/new-post.component';
import {UpdatePostComponent} from './update-post/update-post.component';

const appRoutes:Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'fruits',
        component:FruitsComponent
    },
    {
        path:'fruits/:id',
        component:FruitsComponent
    },
    {
        path:'veggies',
        component:VeggiesComponent
    },
    {
        path:'veggies/:id',
        component:VeggiesComponent
    },
    {
        path:'dryFruits',
        component:DryfruitsComponent
    },
    {
        path:'dryFruits/:id',
        component:DryfruitsComponent
    },
    {
        path:'newpost',
        component:NewPostComponent
    },
    {
        path:'updatePost/:category/:id',
        component:UpdatePostComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule{

}