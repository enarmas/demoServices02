import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  title = 'samrane';
  constructor() { }

  getTitle(): string {
    return this.title;
  }
}
