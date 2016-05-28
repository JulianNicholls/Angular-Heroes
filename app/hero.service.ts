import { Injectable }           from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

import { Hero }       from './hero';
import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService {
  constructor(public http: Http) {}

  getHeroes() {
    return this.http.get('http://localhost:3001/heros.json');
  }

  getHero(id: number) {
    return this.http.get('http://localhost:3001/heros/' + id + '.json');
  }
}
