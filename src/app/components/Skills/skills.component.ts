import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portugues } from '../../i18n/language-pt';

import { TooltipModule } from 'primeng/tooltip';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    TooltipModule,
    ImageModule,
    DividerModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})

export class SkillsComponent {

  skills: string = Portugues.TITLE_SKILLS;
  front: string = Portugues.FRONT;
  back: string = Portugues.BACK;
  database: string = Portugues.DATABASE;

  name_one: string = Portugues.NAME_FRONT_ONE
  name_two: string = Portugues.NAME_FRONT_TWO
  name_third: string = Portugues.NAME_FRONT_THIRD

  name_one_back: string = Portugues.NAME_BACK_ONE
  name_two_back: string = Portugues.NAME_BACK_TWO

  name_one_database: string = Portugues.NAME_DATABASE_ONE
  name_two_database: string = Portugues.NAME_DATABASE_TWO

  value90: string = Portugues.VALUE90
  value70: string = Portugues.VALUE70
  value60: string = Portugues.VALUE60
  value40: string = Portugues.VALUE40
  value20: string = Portugues.VALUE20

  skillsFront = [
    {name: this.name_one, value: this.value90, progress: this.value90, image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'},
    {name: this.name_two, value: this.value70, progress: 'Em andamento...', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg'},
    {name: this.name_third, value: this.value40, progress: this.value40, image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'},
  ]

  skillsBack = [
    {name: this.name_one_back, value: this.value60, progress: 'Em andamento...', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'},
    {name: this.name_two_back, value: this.value40, progress: this.value40, image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'},
  ]

  skillsDatabases = [
    {name: this.name_one_database, value: this.value70, image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'},
    {name: this.name_two_database, value: this.value20,  image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'},
  ]
}
