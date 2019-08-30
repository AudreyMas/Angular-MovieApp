import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'posterElem'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(poster: any): any {

    let url = "http://image.tmdb.org/t/p/w400";

    if (poster.poster_path) {
      return url + poster.poster_path;
    } else {
      if (poster.backdrop_path) {
        return url + poster.backdrop_path;
      } else {
        return "assets/img/noimage.png";
      }
    }
  }

}
