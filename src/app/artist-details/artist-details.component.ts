import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
  inputs: ['artist']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist;

  constructor() { }

  ngOnInit(): void {
  }

}
