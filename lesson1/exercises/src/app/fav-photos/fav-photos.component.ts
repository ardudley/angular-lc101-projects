import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Time';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media4.s-nbcnews.com/i/newscms/2020_09/3246761/plain_pizza_f431dcc55520ce41f835a97a5383f171.jpg';
  image3 = 'https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/epic-deadpool-t-shirt-teeturtle-marvel-1000x1000.jpg';

  constructor() { }

  ngOnInit() {
  }

}