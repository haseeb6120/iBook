import { Component } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.scss'],
})
export class WordDetailsComponent {
  wordDetails$ = this.store.select((state) => state.wordData);

  constructor(private store: Store<AppState>) {}
}
