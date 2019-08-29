import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListePostersComponent } from './liste-posters/liste-posters.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { PosterMovieComponent } from './poster-movie/poster-movie.component';
import { TvshowPosterComponent } from './tvshow-poster/tvshow-poster.component';


const appRoutes: Routes = [
  { path: '', component: PosterMovieComponent },
  { path: 'shows', component: TvshowPosterComponent },
  { path: 'movies', component: PosterMovieComponent },
  { path: 'movie-detail', component: MovieDetailComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    ListePostersComponent,
    HomeComponent,
    MovieDetailComponent,
    TvshowDetailComponent,
    PosterMovieComponent,
    TvshowPosterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
