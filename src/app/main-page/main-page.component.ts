import { Component, OnInit, HostListener } from '@angular/core';

import toggleElem from "./animation.js";
import mp from "./magnified-pictures.js";
// import carousel from "./carousel";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }

  width;

  cards = [
    {
      title: 'ул. Народного Ополчения',
      description: '10 этажей, 2 секции',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-001.jpg'
    },
    {
      title: 'ул. Народного Ополчения',
      description: '10 этажей',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-002.jpg',
      class: 'minimized'
    },
    {
      title: 'ул. Народного Ополчения',
      description: '77 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-003.jpg'
    },
    {
      title: 'ул. Сурганова',
      description: '5 этажей',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-004.png'
    },
    {
      title: 'ул. Ефремова',
      description: '14 этажей',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-005.jpg'
    },
    {
      title: 'ул. Ефремова',
      description: '14 этажей',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-006.jpg'
    },
    {
      title: 'ул. Ефремова, 30',
      description: '72 квартиры',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-007.jpg'
    },
    {
      title: 'ул. Героев Подпольщиков',
      description: '12 этажей, 2 дома по 60 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-008.jpg'
    },
    {
      title: 'ул. Рогачёвская-Кирова',
      description: '40 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-009.jpg'
    },
    {
      title: 'ул. Пеньзякова',
      description: '80 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-010.jpg'
    },
    {
      title: 'п. Юбилейный',
      description: '36 квартир',
      buttonText: 'Увеличить',
      img: '../../../assets/img/houses/house-011.JPG'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  defineCards() {
    this.width = window.innerWidth;
    this.slides = this.chunk(this.cards, 3);
    if (this.width <= 768) {
      this.slides = this.chunk(this.cards, 2);
    }
  }

  ngOnInit() {
    this.defineCards();

    toggleElem();
    mp();
    // carousel();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.defineCards();
  }
}
