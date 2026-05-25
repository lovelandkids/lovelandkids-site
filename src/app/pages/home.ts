import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="page page-home">
      <div class="hero-container">
        <h1 class="hero-title">{{ locale.translate('homeHeroTitle') }}</h1>
        <p class="hero-tagline">{{ locale.translate('homeHeroTagline') }}</p>
        <img
          src="/assets/lovelandkids.png"
          alt="{{ locale.translate('homeImageAlt') }}"
          class="hero-image"
        />
        <p class="hero-subtitle">{{ locale.translate('homeHeroSubtitle') }}</p>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class HomePage {
  protected readonly locale = inject(TranslationService);
}
