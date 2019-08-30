import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { PosterMovieComponent } from './poster-movie/poster-movie.component';
import { TvshowPosterComponent } from './tvshow-poster/tvshow-poster.component';

import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";


const appRoutes: Routes = [
  { path: '', component: PosterMovieComponent },
  { path: 'shows', component: TvshowPosterComponent },
  { path: 'movies', component: PosterMovieComponent },
  { path: 'movie-detail', component: MovieDetailComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    TvshowDetailComponent,
    PosterMovieComponent,
    TvshowPosterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
