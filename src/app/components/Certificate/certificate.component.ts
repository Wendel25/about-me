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
    { imagem: '../../../assets/certificado04.png' },
    { imagem: '../../../assets/certificado01.png' },
    { imagem: '../../../assets/progress.jpg' },
  ];

  certificateBack = [
    { imagem: '../../../assets/certificado2.jpeg' },
    { imagem: '../../../assets/certificado03.png' },
    { imagem: '../../../assets/certificado05.jpeg' },
  ];
}
