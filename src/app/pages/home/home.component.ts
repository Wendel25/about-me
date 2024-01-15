import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/Header/header.component';
import { FooterComponent } from '../../components/Footer/footer.component';
import { SkillsComponent } from '../../components/Skills/skills.component';
import { ProjectsComponent } from '../../components/Projects/projects.component';
import { CertificateComponent } from '../../components/Certificate/certificate.component';

import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificateComponent,
    DividerModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  hideInfoSkills: boolean = false;
  hideInfoProjects: boolean = false;
  hideInfoCertificate: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    if(scrollPosition >= 140){
      this.hideInfoSkills = true
    }

    if(scrollPosition >= 500){
      this.hideInfoProjects = true
    }

    if(scrollPosition >= 1000){
      this.hideInfoCertificate = true
    }
  }
}
