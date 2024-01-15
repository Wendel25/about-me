import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    TooltipModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  btnMenu = [
    { icon: 'pi-github', name: 'Github', link: 'https://github.com/Wendel25'},
    { icon: 'pi-linkedin', name: 'Linkedin', link: 'https://www.linkedin.com/in/wendel-l-1353b3205'},
    { icon: 'pi-phone', name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=5518981091295'},
    { icon: 'pi-file-pdf', name: 'Baixar currículo', link: '../../../../assets/Wendel Lucca.pdf'},
  ]

  navigateToLink(link?: string): void {
    if (link) {
      window.location.href = link;
    }
  }


  downloadResume(): void {
    const resumeLink = this.btnMenu.find(btnMenu => btnMenu.name === 'Currículo')?.link;

    if (resumeLink) {
      window.open(resumeLink, '_blank');
    }
  }

}
