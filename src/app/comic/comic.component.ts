import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.comic);
  }

  @Input() comic: Object;

  comicImage(): string {
    let image = this.comic.images[0];

    if (image) {
      let path = image['path'];
      let extension = image['extension'];
      let size = 'standard_large';

      return `${path}/${size}.${extension}`;
    }
  }
}