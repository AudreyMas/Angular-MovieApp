import { Component, OnInit } from '@angular/core';
import { MoviedbService } from "../services/moviedb.service";

@Component({
  selector: 'app-tvshow-poster',
  templateUrl: './tvshow-poster.component.html',
  styleUrls: ['./tvshow-poster.component.scss']
})
export class TvshowPosterComponent implements OnInit {

  posterMovie: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getDiscoverTV()
      .subscribe((data: any) => {
        console.log(data);
        this.posterMovie = data;
        this.loading = false;
      })
   }
  ngOnInit() {
  }

}
