import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Album } from 'src/app/albums/album.model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input()
    album: Album;

    showAlbum() {
      this.albumClicked.emit(this.album);
  }

  @Output()
    albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
  }

}
