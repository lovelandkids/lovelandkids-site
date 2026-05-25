import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-educational-philosophy-page',
  template: `
    <section class="page page-with-image">
      <header class="page-header">
        <h1>{{ locale.translate('philosophyTitle') }}</h1>
      </header>
      <img
        src="/assets/philosophy.png"
        alt="{{ locale.translate('philosophyImageAlt') }}"
        class="page-image"
      />
      <div class="page-content">
        <p>{{ locale.translate('philosophyPara1') }}</p>
        <p>{{ locale.translate('philosophyPara2') }}</p>
        <p>{{ locale.translate('philosophyPara3') }}</p>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class EducationalPhilosophyPage {
  protected readonly locale = inject(TranslationService);
}
