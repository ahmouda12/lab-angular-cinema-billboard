import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: number;
  movie: Object = {};

  constructor(private route: Router, private router: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.router.params
      .subscribe((params) => this.movieId = Number (params['id']));
    this.movie = this.moviesService.getMovie(this.movieId)
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

}
