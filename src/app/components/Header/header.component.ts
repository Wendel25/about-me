import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../i18n/i18n.service';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ImageModule,
    ButtonModule,
    CommonModule,
    TooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string | undefined;
  text_one: string | undefined;
  text_two: string | undefined;
  faculty: string | undefined;

  constructor(private i18nService: I18nService) {
    this.updateTranslations();
  }

  switchLanguage(language: string) {
    this.i18nService.switchLanguage(language);
    this.updateTranslations();
  }

  updateTranslations() {
    const translations = this.i18nService.getTranslations();
    this.title = translations.TITLE_HEADER;
    this.text_one = translations.TITLE_ONE;
    this.text_two = translations.TITLE_TWO;
    this.faculty = translations.FACULTY;
  }

  btns = [
    { name: 'Github', link: 'https://github.com/Wendel25' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/wendel-l-1353b3205' },
    { name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=5518981091295' },
    { name: 'Currículo', link: '../../../../assets/Wendel Lucca.pdf' },
  ];

  navigateToLink(link?: string): void {
    if (link) {
      window.location.href = link;
    }
  }

  downloadResume(): void {
    const resumeLink = this.btns.find(btn => btn.name === 'Currículo')?.link;

    if (resumeLink) {
      window.open(resumeLink, '_blank');
    }
  }
}
