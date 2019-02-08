import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private movie: MoviesService, private http: HttpClient, private route: ActivatedRoute, private router: Router ) { }
  md: any;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   console.log(this.route.snapshot.paramMap);
   this.movie.getDetails(id).subscribe((data: any) => {
     console.log(data)
     this.md = data
})
}
addToFavs(m){
  this.movie.putMovie(m);
}
}
