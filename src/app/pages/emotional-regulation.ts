import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-emotional-regulation-page',
  template: `
    <section class="page page-with-image">
      <header class="page-header">
        <h1>{{ locale.translate('emotionalTitle') }}</h1>
      </header>
      <img
        src="/assets/emotional.png"
        alt="{{ locale.translate('emotionalImageAlt') }}"
        class="page-image"
      />
      <div class="page-content">
        <p>{{ locale.translate('emotionalPara1') }}</p>
        <p>{{ locale.translate('emotionalPara2') }}</p>
        <p>{{ locale.translate('emotionalPara3') }}</p>
        <p>{{ locale.translate('emotionalPara4') }}</p>
        <p>{{ locale.translate('emotionalPara5') }}</p>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class EmotionalRegulationPage {
  protected readonly locale = inject(TranslationService);
}
