import { Injectable } from '@angular/core';
import { Portugues } from './language-pt';
import { English } from './language-en';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private currentLanguage: string = 'pt';

  switchLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getTranslations(): any {
    return this.currentLanguage === 'pt' ? Portugues : English;
  }
}
