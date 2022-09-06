import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {HomeComponent} from "./home/home.component";
import {RouteDataResolver} from "./services/space.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: ':id',
    component: DetailsComponent,
    resolve: {response: RouteDataResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
