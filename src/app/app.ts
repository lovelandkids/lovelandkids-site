import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected navItems!: Signal<{ label: string; path: string }[]>;
  protected languageOptions!: { code: string; label: string }[];

  constructor(public readonly locale: TranslationService) {
    this.languageOptions = this.locale.languages;
    this.navItems = computed(() => [
      { label: this.locale.translate('navHome'), path: '/' },
      { label: this.locale.translate('navMission'), path: '/mission' },
      { label: this.locale.translate('navVision'), path: '/vision' },
      { label: this.locale.translate('navEducationalPhilosophy'), path: '/educational-philosophy' },
      { label: this.locale.translate('navEmotionalRegulation'), path: '/emotional-regulation' },
    ]);
  }
}
