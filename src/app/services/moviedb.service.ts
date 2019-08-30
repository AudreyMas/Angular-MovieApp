import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import map reactive extensions
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviedbService {
  private apikey: string = "81ba9a0452b9c411467a2326caef1ee1";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "")
  }
  
  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, "")
  }
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    )
  }
  getSearchMovie(term: string) {
    return this.getQuery(`/search/movie?query=${term}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }
  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    )
  }
}