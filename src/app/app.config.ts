import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { HomePage } from './pages/home';
import { MissionPage } from './pages/mission';
import { VisionPage } from './pages/vision';
import { EducationalPhilosophyPage } from './pages/educational-philosophy';
import { EmotionalRegulationPage } from './pages/emotional-regulation';

const routes: Route[] = [
  { path: '', component: HomePage },
  { path: 'mission', component: MissionPage },
  { path: 'vision', component: VisionPage },
  { path: 'educational-philosophy', component: EducationalPhilosophyPage },
  { path: 'emotional-regulation', component: EmotionalRegulationPage },
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
