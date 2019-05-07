import { Component, OnInit } from '@angular/core';
import { constructor } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mon blog angular';
  Posts = [
    {
      Title: 'Débuter sur Angular',
      Content: 'Angular c\'est pas facile !',
    },
    {
      Title: 'Prendre ses marques',
      Content: 'C\'est en codant qu\'on devient codeur.',
    },
    {
      Title: 'Créer',
      Content: 'Il ne manque plus qu\'à se lancer maintenant.',
    }
    ];
  count = 0;

  ngOnInit() {
  }

  constructor() {

  }
}
