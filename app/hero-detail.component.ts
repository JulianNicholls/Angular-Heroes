import {Component, OnInit}  from 'angular2/core';
import {RouteParams}        from 'angular2/router';

import {Hero}               from './hero';
import {HeroService}        from './hero.service';

@Component({
  selector:     'my-hero-detail',
  templateUrl:  'app/hero-detail.component.html',
  styleUrls:    ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');  // The '+' converts to a number

    this._heroService.getHero(id)
      .subscribe(response => this.hero = response.json().hero);
  }

  goBack() {
    window.history.back();
  }
}
