import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillEditorComponent,
} from 'ngx-quill';
import { IBookService } from '../services/i-book.service';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss'],
})
export class BookEditorComponent {
  @ViewChild('quillEditor')
  quill!: QuillEditorComponent;

  @ViewChild('drawer')
  drawer!: MatDrawer;

  wordData: any;

  constructor(
    private iBook: IBookService,
    private store: Store<AppState>,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  saveDraft() {
    const draft = this.quill.quillEditor.getText();

    this.store.dispatch({
      type: 'ADD_DRAFT',
      payload: {
        draft: draft,
      },
    });
    this.router.navigate(['/sent-page']);
  }

  getWordData(word: string) {
    this.iBook.getWordData(word).subscribe(
      (response: any) => {
        if (response && response.length) {
          this.wordData = response[0];
          this.drawer.open();

          this.store.dispatch({
            type: 'ADD_WORD_DATA',
            payload: {
              wordData: [response[0]],
            },
          });
        }
      },
      (error) => {
        this.openSnackBar(error?.error?.title, 'Close');
      }
    );
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    const range = this.quill.quillEditor.getSelection();
    if (range) {
      if (range.length == 0) {
        // console.log('User cursor is at index', range.index);
        this.drawer.close();
      } else {
        const text = this.quill.quillEditor.getText(range.index, range.length);
        // console.log('User has highlighted: ', text);
        if (text) {
          this.getWordData(text.trim());
        }
      }
    } else {
      console.log('User cursor is not in editor');
    }
  }
}
