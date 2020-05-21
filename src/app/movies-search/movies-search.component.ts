import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../share/movies.service';


@Component({
  selector: 'movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  nowPlayingList: Array<object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private moviseService: MoviesService) { 
    this.moviseService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this.moviseService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
    this.moviseService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res.results;
    });
    this.moviseService.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingList = res.results;
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this.moviseService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

  seletedMovies(){
    this.moviseService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
