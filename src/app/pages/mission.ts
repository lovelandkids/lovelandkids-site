import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-mission-page',
  template: `
    <section class="page page-with-image">
      <header class="page-header">
        <h1>{{ locale.translate('missionTitle') }}</h1>
      </header>
      <img
        src="/assets/mission.png"
        alt="{{ locale.translate('missionImageAlt') }}"
        class="page-image"
      />
      <div class="page-content">
        <p>{{ locale.translate('missionPara1') }}</p>
        <p>{{ locale.translate('missionPara2') }}</p>
        <p>{{ locale.translate('missionPara3') }}</p>
        <p>{{ locale.translate('missionPara4') }}</p>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class MissionPage {
  protected readonly locale = inject(TranslationService);
}
