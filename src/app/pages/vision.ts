import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-vision-page',
  template: `
    <section class="page page-with-image">
      <header class="page-header">
        <h1>{{ locale.translate('visionTitle') }}</h1>
      </header>
      <img
        src="/assets/vision.png"
        alt="{{ locale.translate('visionImageAlt') }}"
        class="page-image"
      />
      <div class="page-content">
        <p>{{ locale.translate('visionPara1') }}</p>
        <p>{{ locale.translate('visionPara2') }}</p>
        <p>{{ locale.translate('visionPara3') }}</p>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class VisionPage {
  protected readonly locale = inject(TranslationService);
}
