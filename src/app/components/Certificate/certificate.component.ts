import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Portugues } from '../../i18n/language-pt';

import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [
    ImageModule,
    CommonModule
  ],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})

export class CertificateComponent {
  title: string = Portugues.TITLE_CERTIFICATE

  certificateFront = [
    { imagem: '../../../assets/img/certificado04.png' },
    { imagem: '../../../assets/img/certificado01.png' },
    { imagem: '../../../assets/img/progress.jpg' },
  ];

  certificateBack = [
    { imagem: '../../../assets/img/certificado2.jpeg' },
    { imagem: '../../../assets/img/certificado03.png' },
    { imagem: '../../../assets/img/certificado05.jpeg' },
  ];
}
