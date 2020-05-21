import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero []> {
    return of(HEROS); // of(HEROS)会返回一个Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id))
  }
}
