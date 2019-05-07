import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-post',
  templateUrl: './premier-post.component.html',
  styleUrls: ['./premier-post.component.scss']
})
export class PremierPostComponent implements OnInit {
  day = new Date();
  @Input() postTitle: string;
  @Input() postContent: string;
  count = 0;
  Like() {
    this.count++;
  }
  Dislike() {
    this.count--;
  }

  constructor() { }

  ngOnInit() {
  }
}
