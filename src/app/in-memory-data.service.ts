import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', key: 1 },
      { id: 12, name: 'Narco', key: 2  },
      { id: 13, name: 'Bombasto', key: 3 },
      { id: 14, name: 'Celeritas', key: 4 },
      { id: 15, name: 'Magneta', key: 5 },
      { id: 16, name: 'RubberMan', key: 6 },
      { id: 17, name: 'Dynama', key: 7 },
      { id: 18, name: 'Dr IQ', key: 8 },
      { id: 19, name: 'Magma', key: 9 },
      { id: 20, name: 'Tornado', key: 10 }
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
