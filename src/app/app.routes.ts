import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {ScenarioComponent} from './scenario/scenario.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    data:{page: 'Home page'}
  },
  {
    path: 'search',
    component: SearchComponent,
    data:{page: 'Search page'}
  },
  {
    path: 'scenario',
    component: ScenarioComponent,
    data:{page: 'Scenario page'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
/*    RouterModule.forRoot([
      {
        path: 'search',
        component: ArtifactList,
        resolve: {
          books: ArtifactResolver
        }
      }
    ]) */
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
