import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient, private router: Router) { }

  arrayOfMovies = [];
  arrayOfUmovies = [];
  ngOnInit() {
    this.movie.getPmovies().subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(p =>  { 
         p.poster_path ="https://image.tmdb.org/t/p/w500" + p.poster_path
          return p 
        })
        this.arrayOfMovies = data.results
    })
    this.movie.getUmovies().subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(u =>  { 
         u.poster_path ="https://image.tmdb.org/t/p/w500" + u.poster_path
          return u
        })
        this.arrayOfUmovies = data.results
    })
  }
  addToFavs(m){
    this.movie.putMovie(m);
  }
  gotDetails(name){
    this.router.navigateByUrl(`details/${name}`)
}
}
