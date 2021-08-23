import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesSectionComponent } from './components/movies-section/movies-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesDetailComponent } from './pages/movies-detail/movies-detail.component';
import { TitleComponent } from './components/title/title.component';
import { DesktopNavComponent } from './components/header/desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './components/header/mobile-nav/mobile-nav.component';
import { SearchComponent } from './components/header/search/search.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MovieHeroComponent } from './components/movie-hero/movie-hero.component';
import { MovieComponent } from './components/movies-section/movie/movie.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RateStarsComponent } from './components/rate-stars/rate-stars.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MovieVideoComponent } from './pages/movie-video/movie-video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesSectionComponent,
    FooterComponent,
    HomeComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    TitleComponent,
    DesktopNavComponent,
    MobileNavComponent,
    SearchComponent,
    ClickOutsideDirective,
    MovieHeroComponent,
    MovieComponent,
    CarouselComponent,
    RateStarsComponent,
    PaginationComponent,
    MovieVideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule,YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
