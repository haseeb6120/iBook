import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { SentPageComponent } from './sent-page/sent-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookEditorComponent,
  },
  {
    path: 'sent-page',
    component: SentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
