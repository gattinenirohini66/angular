import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient, private router: Router) { }
  mv :any=[];
  ngOnInit() {
    this.displayimg();
  }
  displayimg() {
    this.movie.getData().subscribe((x) => {
      this.mv = x
      console.log(this.mv)  
    });
  }
  remove(movie){
    console.log(movie)
    this.http.delete("http://localhost:3000/favourite/"+movie).subscribe(console.log)
    this.mv=this.mv.filter(data=>movie!=data.id)
  }
  gotDetails(name){
    this.router.navigateByUrl(`details/${name}`)
}
}
