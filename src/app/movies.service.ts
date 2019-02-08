import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPmovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=886715216ea2d9fae685d80d21751c8f&language=en-US&page=1")
  }
  getUmovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=886715216ea2d9fae685d80d21751c8f&language=en-US&page=1")
  }
  getTmovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=886715216ea2d9fae685d80d21751c8f&language=en-US&page=1")
  }
  getData(){
    return this.http.get("http://localhost:3000/favourite");
  }
  putMovie(m){
    return this.http.post("http://localhost:3000/favourite",m).subscribe(console.log);
  }
  searchMovies(nameOfMovie: any){
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=886715216ea2d9fae685d80d21751c8f&language=en-US&query="+nameOfMovie+"&page=1&include_adult=false");
  }
  getDetails(id){
    console.log(id)
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4bc655e62efae9cbdcf0e8ae0e010f84&language=en-US`)
  }
  }