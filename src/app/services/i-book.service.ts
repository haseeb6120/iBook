import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IBookService {
  constructor(private http: HttpClient) {}

  getWordData(word: string) {
    return this.http.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  }
}
