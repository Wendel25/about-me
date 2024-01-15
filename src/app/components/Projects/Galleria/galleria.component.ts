import { Component, OnInit } from '@angular/core';
import { Portugues } from '../../../i18n/language-pt';

import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [
    GalleriaModule,
    RadioButtonModule,
    CheckboxModule,
    TooltipModule
  ],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.scss'
})

export class GalleriaComponent implements OnInit {

  title: string = Portugues.PROJECT_SALE;
  text_one: string = Portugues.TEXT_SALE_ONE;
  text_two: string = Portugues.TEXT_SALE_TWO;
  language: string = Portugues.TEXT_SALE_LANGUAGE;
  repo_one: string = Portugues.TEXT_SALE_REPO_FRONT;
  repo_two: string = Portugues.TEXT_SALE_REPO_BACK;

  btnRepo = [
    {toltip: this.repo_one, link: 'https://github.com/Wendel25/Stock-Control-Front'},
    {toltip: this.repo_two , link: 'https://github.com/Wendel25/Stock-Control-Back'}
  ]

  images: any[] | undefined;

  ngOnInit() {
    this.images = [
      { itemImageSrc: 'assets/img/login.png', thumbnailImageSrc: 'assets/img/login.png' },
      { itemImageSrc: 'assets/img/register.png', thumbnailImageSrc: 'assets/img/register.png' },
      { itemImageSrc: 'assets/img/products.png', thumbnailImageSrc: 'assets/img/products.png' },
      { itemImageSrc: 'assets/img/categories.png', thumbnailImageSrc: 'assets/img/categories.png' },
      { itemImageSrc: 'assets/img/sales.png', thumbnailImageSrc: 'assets/img/sales.png' },
    ];
  }
}
