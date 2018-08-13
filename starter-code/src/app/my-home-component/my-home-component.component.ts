import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  movies: Array<Object> = [];

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies()
  }

  viewDetails(id) {
    this.router.navigate(['movie', id]);
  }
}
