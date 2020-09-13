import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle = 'These are the links.'
  favLinks = ['https://www.snopes.com', 'https://www.factcheck.org'];
  img = 'https://media0.giphy.com/media/USV0ym3bVWQJJmNu3N/200w.webp?cid=ecf05e47k1cb5n797ugjbvoqpdqsdfwqvp9t55gsgq4bca03&rid=200w.webp'
  constructor() { }

  ngOnInit() {
  }

}
