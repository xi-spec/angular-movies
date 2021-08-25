import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import routeName from './constant/routeName';
import { HomeComponent } from './pages/home/home.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
import { MovieVideoComponent } from './pages/movie-video/movie-video.component';
import { SearchListComponent } from './pages/search-list/search-list.component';
import { MovieCategoryComponent } from './pages/movie-category/movie-category.component';

const routes: Routes = [
  { path: '', redirectTo: routeName.HOME, pathMatch: 'full' },
  { path: routeName.HOME, component: HomeComponent },
  { path: routeName.MOVIES_CATEGORY, component: MovieCategoryComponent },
  { path: routeName.MOVIE_DETAIL, component: MoviesDetailComponent },
  { path: routeName.MOVIE_VIDEO, component: MovieVideoComponent },
  { path: routeName.SEARCH, component: SearchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
