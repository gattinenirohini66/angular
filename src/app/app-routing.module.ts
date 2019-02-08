import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FavouriteComponent} from './favourite/favourite.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [ 
  {
  path: "home", component: HomeComponent
},
{
  path: "favourite", component: FavouriteComponent
},
{
  path:"search", component: SearchComponent
},
{
  path:"details/:id", component: DetailsComponent
},
{
  path: "**", component: HomeComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
