import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

import routeName from './constant/routeName';
import { MovieVideoComponent } from './pages/movie-video/movie-video.component';

const routes: Routes = [
  { path: '', redirectTo: routeName.HOME, pathMatch: 'full' },
  { path: routeName.HOME, component: HomeComponent },
  { path: routeName.MOVIES_LIST, component: MoviesListComponent },
  { path: routeName.MOVIE_DETAIL, component: MoviesDetailComponent },
  { path: routeName.MOVIE_VIDEO, component: MovieVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
