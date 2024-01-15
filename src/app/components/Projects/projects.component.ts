import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portugues } from '../../i18n/language-pt';

import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';
import { GalleriaComponent } from './Galleria/galleria.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ImageModule,
    TooltipModule,
    CommonModule,
    GalleriaComponent,
    DividerModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent{
  title: string = Portugues.TITLE_PROJECTS;

  private tooltips = {
    tooltipOne: Portugues.TEXT_HERO_APP,
    tooltipTwo: Portugues.TEXT_HERO_REPO
  };

  projectsInfo = [
    {
      title: Portugues.PROJECT_HERO,
      img: '../../../assets/project02.png',
      textFirst: Portugues.TEXT_HERO_ONE,
      textSecond: Portugues.TEXT_HERO_TWO,
      school: 'Superhero.',
      linkSchool: 'https://www.superheroapi.com/',
      language: Portugues.TEXT_HERO_LANGUAGE,
      tooltipTextOne: this.tooltips.tooltipOne,
      tooltipTextTwo: this.tooltips.tooltipTwo,
      linkApp: 'https://wendel25.github.io/App-Characters/',
      linkRepo: 'https://github.com/Wendel25/App-Characters'
    },
    {
      title: Portugues.PROJECT_STOCK,
      img: '../../../assets/project04.png',
      textFirst: Portugues.TEXT_STOCK_ONE,
      textSecond: Portugues.TEXT_STOCK_TWO,
      school: '',
      linkSchool: '',
      language: Portugues.TEXT_STOCK_LANGUAGE,
      tooltipTextOne: this.tooltips.tooltipOne,
      tooltipTextTwo: this.tooltips.tooltipTwo,
      linkApp: 'https://wendel25.github.io/Controle-de-estoque/',
      linkRepo: 'https://github.com/Wendel25/Controle-de-estoque'
    },
    {
      title: Portugues.PROJECT_MARIO,
      img: '../../../assets/project01.png',
      textFirst: Portugues.TEXT_MARIO_ONE,
      textSecond: Portugues.TEXT_MARIO_TWO,
      school: 'Manual do Dev.',
      linkSchool: 'https://www.youtube.com/watch?v=r9buAwVBDhA',
      language: Portugues.TEXT_HERO_LANGUAGE,
      tooltipTextOne: this.tooltips.tooltipOne,
      tooltipTextTwo: this.tooltips.tooltipTwo,
      linkApp: 'https://wendel25.github.io/MarioJogo/',
      linkRepo: 'https://github.com/Wendel25/MarioJogo'
    }
  ];
}
