import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  arrayOfMovies:any=[];
  ngOnInit() {
  }
  getMovie(value){
    this.movie.searchMovies(value).subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(p =>  { 
         p.poster_path ="https://image.tmdb.org/t/p/w500" + p.poster_path
          return p 
        })
        this.arrayOfMovies = data.results
    })
  }
  addToFavs(m){
    this.movie.putMovie(m);
  }
  gotDetails(name){
    this.router.navigateByUrl(`details/${name}`)
}

}
