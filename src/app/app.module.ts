import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { WordDetailsComponent } from './word-details/word-details.component';
import { SentPageComponent } from './sent-page/sent-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { draftReducer, wordDataReducer } from './store/ibook.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookEditorComponent,
    WordDetailsComponent,
    SentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({
      draft: draftReducer,
      wordData: wordDataReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
