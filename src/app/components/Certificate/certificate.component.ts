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
    { imagem: 'certificado04.png' },
    { imagem: 'certificado01.png' },
    { imagem: 'progress.jpg' },
  ];

  certificateBack = [
    { imagem: 'certificado2.jpeg' },
    { imagem: 'certificado03.png' },
    { imagem: 'certificado05.jpeg' },
  ];
}
