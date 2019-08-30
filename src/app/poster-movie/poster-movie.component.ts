import { Component, OnInit } from '@angular/core';
import { MoviedbService } from "../services/moviedb.service";


@Component({
  selector: 'app-poster-movie',
  templateUrl: './poster-movie.component.html',
  styleUrls: ['./poster-movie.component.scss']
})
export class PosterMovieComponent implements OnInit {


  posterMovie: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.posterMovie = data;
        this.loading = false;
      })
   }

  ngOnInit() {
    this.posterMovie
  }

}
