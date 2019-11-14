import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryServiceService {
  inMemoryObject: {}
  constructor() { }

  setItem(key :string, value :any) {
    this.inMemoryObject[key] = value
  }

  getItem(key :string) :any{
    return this.inMemoryObject[key]
  }

  clearItem(key :string) {
    delete this.inMemoryObject[key]
  }
}
