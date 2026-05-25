import { Injectable, signal, WritableSignal } from '@angular/core';

type LanguageCode = 'en' | 'es' | 'fr' | 'pt';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
}

const translations: Record<string, Record<LanguageCode, string>> = {
  navHome: {
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil',
    pt: 'Início',
  },
  navMission: {
    en: 'Mission',
    es: 'Misión',
    fr: 'Mission',
    pt: 'Missão',
  },
  navVision: {
    en: 'Vision',
    es: 'Visión',
    fr: 'Vision',
    pt: 'Visão',
  },
  navEducationalPhilosophy: {
    en: 'Educational Philosophy',
    es: 'Filosofía Educativa',
    fr: 'Philosophie Éducative',
    pt: 'Filosofia Educacional',
  },
  navEmotionalRegulation: {
    en: 'Emotional Regulation',
    es: 'Regulación Emocional',
    fr: 'Régulation Émotionnelle',
    pt: 'Regulação Emocional',
  },
  languageSelectorLabel: {
    en: 'Language',
    es: 'Idioma',
    fr: 'Langue',
    pt: 'Idioma',
  },
  homeHeroTitle: {
    en: 'Welcome to Love Land Kids',
    es: 'Bienvenidos a Love Land Kids',
    fr: 'Bienvenue à Love Land Kids',
    pt: 'Bem-vindo à Love Land Kids',
  },
  homeHeroTagline: {
    en: 'The safe place for everyone',
    es: 'El lugar seguro para todos',
    fr: 'L’endroit sûr pour tous',
    pt: 'O lugar seguro para todos',
  },
  homeHeroSubtitle: {
    en: 'Where every child feels loved, safe, and inspired to grow',
    es: 'Donde cada niño se siente amado, seguro e inspirado a crecer',
    fr: 'Où chaque enfant se sent aimé, en sécurité et inspiré à grandir',
    pt: 'Onde cada criança se sente amada, segura e inspirada a crescer',
  },
  homeImageAlt: {
    en: 'Official Love Land Kids website logo',
    es: 'Logotipo oficial del sitio web Love Land Kids',
    fr: 'Logo officiel du site Love Land Kids',
    pt: 'Logotipo oficial do site Love Land Kids',
  },
  missionTitle: {
    en: 'Mission',
    es: 'Misión',
    fr: 'Mission',
    pt: 'Missão',
  },
  missionPara1: {
    en: 'At Love Land Kids, our mission is to provide a safe, loving, and stimulating environment where every child feels inspired to learn, grow, and develop as a whole while strengthening their social, emotional, physical, cognitive, and language skills through meaningful relationships, play-based learning, and intentional guidance.',
    es: 'En Love Land Kids, nuestra misión es ofrecer un entorno seguro, amoroso y estimulante donde cada niño se sienta inspirado a aprender, crecer y desarrollarse en su totalidad, fortaleciendo al mismo tiempo sus habilidades sociales, emocionales, físicas, cognitivas y lingüísticas mediante relaciones significativas, aprendizaje basado en el juego y una guía intencional.',
    fr: 'Chez Love Land Kids, notre mission est de fournir un environnement sûr, aimant et stimulant où chaque enfant se sent inspiré à apprendre, grandir et se développer dans sa globalité tout en renforçant ses compétences sociales, émotionnelles, physiques, cognitives et linguistiques grâce à des relations significatives, un apprentissage par le jeu et un accompagnement intentionnel.',
    pt: 'No Love Land Kids, nossa missão é proporcionar um ambiente seguro, amoroso e estimulante onde cada criança se sinta inspirada a aprender, crescer e se desenvolver como um todo, fortalecendo suas habilidades sociais, emocionais, físicas, cognitivas e linguísticas por meio de relacionamentos significativos, aprendizagem baseada em brincadeiras e orientação intencional.',
  },
  missionPara2: {
    en: 'We are committed to guiding children to identify, express, and manage their emotions in a positive way by promoting empathy, self-regulation, and peaceful conflict resolution from early childhood.',
    es: 'Estamos comprometidos a guiar a los niños para identificar, expresar y gestionar sus emociones de forma positiva promoviendo la empatía, la autorregulación y la resolución pacífica de conflictos desde la primera infancia.',
    fr: 'Nous nous engageons à aider les enfants à identifier, exprimer et gérer leurs émotions de manière positive en promouvant l’empathie, l’autorégulation et la résolution pacifique des conflits dès la petite enfance.',
    pt: 'Estamos comprometidos em orientar as crianças a identificar, expressar e gerir suas emoções de maneira positiva, promovendo empatia, autorregulação e resolução pacífica de conflitos desde a primeira infância.',
  },
  missionPara3: {
    en: 'At the same time, we naturally integrate Spanish language learning through play, songs, stories, and daily activities, supporting bilingual language development and communication skills.',
    es: 'Al mismo tiempo, integramos de forma natural el aprendizaje del español a través del juego, canciones, historias y actividades diarias, apoyando el desarrollo bilingüe y las habilidades de comunicación.',
    fr: 'En même temps, nous intégrons naturellement l’apprentissage de l’espagnol par le jeu, les chansons, les histoires et les activités quotidiennes, soutenant le développement bilingue et les compétences en communication.',
    pt: 'Ao mesmo tempo, integramos naturalmente o aprendizado do espanhol por meio de brincadeiras, músicas, histórias e atividades diárias, apoiando o desenvolvimento bilíngue e as habilidades de comunicação.',
  },
  missionPara4: {
    en: 'As a Spanish immersion program, we believe that language opens doors to connection, culture, and lifelong learning. We work closely with families to help raise confident, respectful, communicative, and emotionally healthy children with a strong foundation for future success.',
    es: 'Como programa de inmersión en español, creemos que el lenguaje abre puertas a la conexión, la cultura y el aprendizaje permanente. Trabajamos en estrecha colaboración con las familias para ayudar a criar niños seguros, respetuosos, comunicativos y emocionalmente saludables con una base sólida para el éxito futuro.',
    fr: 'En tant que programme d’immersion en espagnol, nous croyons que la langue ouvre des portes à la connexion, à la culture et à l’apprentissage tout au long de la vie. Nous travaillons en étroite collaboration avec les familles pour aider à élever des enfants confiants, respectueux, communicatifs et émotionnellement sains avec une base solide pour la réussite future.',
    pt: 'Como programa de imersão em espanhol, acreditamos que a língua abre portas para conexão, cultura e aprendizado ao longo da vida. Trabalhamos em estreita colaboração com as famílias para ajudar a criar crianças confiantes, respeitosas, comunicativas e emocionalmente saudáveis com uma base forte para o sucesso futuro.',
  },
  missionImageAlt: {
    en: 'Children learning and playing together in a safe environment',
    es: 'Niños aprendiendo y jugando juntos en un entorno seguro',
    fr: 'Enfants apprenant et jouant ensemble dans un environnement sûr',
    pt: 'Crianças aprendendo e brincando juntas em um ambiente seguro',
  },
  visionTitle: {
    en: 'Vision',
    es: 'Visión',
    fr: 'Vision',
    pt: 'Visão',
  },
  visionPara1: {
    en: 'At Love Land Kids, we strive to be a child care center recognized for educational excellence by nurturing children who are able to identify, express, and manage their emotions in healthy ways while strengthening their confidence, resilience, and emotional well-being.',
    es: 'En Love Land Kids, nos esforzamos por ser un centro de cuidado infantil reconocido por la excelencia educativa al nutrir a niños capaces de identificar, expresar y gestionar sus emociones de manera saludable mientras fortalecen su confianza, resiliencia y bienestar emocional.',
    fr: 'Chez Love Land Kids, nous nous efforçons d’être un centre de garde d’enfants reconnu pour son excellence éducative en nourrissant des enfants capables d’identifier, d’exprimer et de gérer leurs émotions de manière saine tout en renforçant leur confiance, leur résilience et leur bien-être émotionnel.',
    pt: 'No Love Land Kids, nos esforçamos para ser um centro de cuidados infantis reconhecido pela excelência educacional, nutrindo crianças capazes de identificar, expressar e gerir suas emoções de maneira saudável enquanto fortalecem sua confiança, resiliência e bem-estar emocional.',
  },
  visionPara2: {
    en: 'Our goal is to build strong foundations that support healthy relationships and future success.',
    es: 'Nuestro objetivo es construir bases sólidas que apoyen relaciones saludables y el éxito futuro.',
    fr: 'Notre objectif est de bâtir des bases solides qui soutiennent des relations saines et une réussite future.',
    pt: 'Nosso objetivo é construir bases fortes que apoiem relacionamentos saudáveis e sucesso futuro.',
  },
  visionPara3: {
    en: 'At the same time, we pursue to strengthen Spanish language learning through natural experiences, play, songs, stories, and daily routines, promoting bilingual communication as a tool to expand children’s cognitive and cultural development.',
    es: 'Al mismo tiempo, buscamos fortalecer el aprendizaje del idioma español mediante experiencias naturales, juego, canciones, historias y rutinas diarias, promoviendo la comunicación bilingüe como herramienta para expandir el desarrollo cognitivo y cultural de los niños.',
    fr: 'En même temps, nous cherchons à renforcer l’apprentissage de l’espagnol grâce à des expériences naturelles, des jeux, des chansons, des histoires et des routines quotidiennes, en promouvant la communication bilingue comme un outil pour élargir le développement cognitif et culturel des enfants.',
    pt: 'Ao mesmo tempo, buscamos fortalecer o aprendizado do espanhol por meio de experiências naturais, brincadeiras, músicas, histórias e rotinas diárias, promovendo a comunicação bilíngue como uma ferramenta para expandir o desenvolvimento cognitivo e cultural das crianças.',
  },
  visionImageAlt: {
    en: 'Happy children showing confidence and growth',
    es: 'Niños felices mostrando confianza y crecimiento',
    fr: 'Enfants heureux montrant confiance et croissance',
    pt: 'Crianças felizes mostrando confiança e crescimento',
  },
  philosophyTitle: {
    en: 'Educational Philosophy',
    es: 'Filosofía Educativa',
    fr: 'Philosophie Éducative',
    pt: 'Filosofia Educacional',
  },
  philosophyPara1: {
    en: 'Our educational philosophy is built on the belief that each child learns best when they feel safe, supported, and engaged. We focus on play-based learning, strong relationships, and a caring environment that nurtures curiosity and confidence.',
    es: 'Nuestra filosofía educativa se basa en la creencia de que cada niño aprende mejor cuando se siente seguro, apoyado y comprometido. Nos enfocamos en el aprendizaje basado en el juego, las relaciones sólidas y un ambiente afectuoso que nutre la curiosidad y la confianza.',
    fr: 'Notre philosophie éducative repose sur la conviction que chaque enfant apprend mieux lorsqu’il se sent en sécurité, soutenu et engagé. Nous mettons l’accent sur l’apprentissage par le jeu, des relations solides et un environnement bienveillant qui nourrit la curiosité et la confiance.',
    pt: 'Nossa filosofia educacional é construída na crença de que cada criança aprende melhor quando se sente segura, apoiada e envolvida. Focamos na aprendizagem baseada em brincadeiras, em relacionamentos fortes e em um ambiente acolhedor que nutre a curiosidade e a confiança.',
  },
  philosophyPara2: {
    en: 'At Love Land Kids, we weave Spanish immersion naturally into daily routines and activities, creating joyful opportunities for children to discover language through play, stories, songs, and social interaction.',
    es: 'En Love Land Kids, tejemos la inmersión en español de forma natural en las rutinas y actividades diarias, creando oportunidades alegres para que los niños descubran el idioma a través del juego, historias, canciones e interacción social.',
    fr: 'Chez Love Land Kids, nous intégrons naturellement l’immersion en espagnol dans les routines et activités quotidiennes, créant des occasions joyeuses pour que les enfants découvrent la langue par le jeu, les histoires, les chansons et l’interaction sociale.',
    pt: 'No Love Land Kids, incorporamos a imersão em espanhol de forma natural nas rotinas e atividades diárias, criando oportunidades alegres para que as crianças descubram o idioma por meio de brincadeiras, histórias, músicas e interação social.',
  },
  philosophyPara3: {
    en: 'We are committed to guiding children with gentle encouragement, consistent routines, and meaningful experiences that foster well-rounded development and a lifelong love of learning.',
    es: 'Estamos comprometidos a guiar a los niños con estímulo suave, rutinas consistentes y experiencias significativas que fomenten un desarrollo integral y un amor por el aprendizaje de por vida.',
    fr: 'Nous sommes déterminés à guider les enfants avec un encouragement doux, des routines cohérentes et des expériences significatives qui favorisent un développement harmonieux et un amour de l’apprentissage pour la vie.',
    pt: 'Estamos comprometidos em orientar as crianças com estímulo gentil, rotinas consistentes e experiências significativas que promovem um desenvolvimento equilibrado e um amor pelo aprendizado ao longo da vida.',
  },
  philosophyImageAlt: {
    en: 'Children engaged in play-based learning and creative activities',
    es: 'Niños participando en aprendizaje basado en el juego y actividades creativas',
    fr: 'Enfants engagés dans l’apprentissage par le jeu et des activités créatives',
    pt: 'Crianças envolvidas em aprendizado baseado em brincadeiras e atividades criativas',
  },
  emotionalTitle: {
    en: 'Emotional Regulation',
    es: 'Regulación Emocional',
    fr: 'Régulation Émotionnelle',
    pt: 'Regulação Emocional',
  },
  emotionalPara1: {
    en: 'At Love Land Kids, we believe that emotional development is the foundation of learning and overall well-being for every child.',
    es: 'En Love Land Kids, creemos que el desarrollo emocional es la base del aprendizaje y del bienestar general de cada niño.',
    fr: 'Chez Love Land Kids, nous croyons que le développement émotionnel est la base de l’apprentissage et du bien-être général de chaque enfant.',
    pt: 'No Love Land Kids, acreditamos que o desenvolvimento emocional é a base do aprendizado e do bem-estar geral de cada criança.',
  },
  emotionalPara2: {
    en: 'Our philosophy focuses on teaching children to recognize, understand, and regulate their emotions in healthy ways while respecting their developmental stage and individual needs.',
    es: 'Nuestra filosofía se centra en enseñar a los niños a reconocer, comprender y regular sus emociones de manera saludable respetando su etapa de desarrollo y sus necesidades individuales.',
    fr: 'Notre philosophie se concentre sur l’enseignement aux enfants de reconnaître, comprendre et réguler leurs émotions de manière saine tout en respectant leur stade de développement et leurs besoins individuels.',
    pt: 'Nossa filosofia se concentra em ensinar as crianças a reconhecer, compreender e regular suas emoções de maneira saudável, respeitando seu estágio de desenvolvimento e suas necessidades individuais.',
  },
  emotionalPara3: {
    en: 'We believe emotions should not be suppressed, but guided with support, patience, and appropriate tools. We promote a safe, loving, and structured environment where children feel comfortable expressing their feelings, learning to calm themselves, and developing self-regulation skills.',
    es: 'Creemos que las emociones no deben suprimirse, sino guiarse con apoyo, paciencia y herramientas adecuadas. Promovemos un entorno seguro, amoroso y estructurado donde los niños se sientan cómodos expresando sus sentimientos, aprendiendo a calmarse y desarrollando habilidades de autorregulación.',
    fr: 'Nous pensons que les émotions ne doivent pas être réprimées, mais guidées avec soutien, patience et outils appropriés. Nous favorisons un environnement sûr, aimant et structuré où les enfants se sentent à l’aise pour exprimer leurs sentiments, apprendre à se calmer et développer des compétences d’autorégulation.',
    pt: 'Acreditamos que as emoções não devem ser suprimidas, mas orientadas com apoio, paciência e ferramentas adequadas. Promovemos um ambiente seguro, amoroso e estruturado onde as crianças se sintam confortáveis para expressar seus sentimentos, aprender a se acalmar e desenvolver habilidades de autorregulação.',
  },
  emotionalPara4: {
    en: 'Through adult modeling, positive language, and conflict resolution, we teach strategies such as deep breathing, asking for help, using words to communicate feelings, and taking breaks when needed.',
    es: 'A través del modelado adulto, el lenguaje positivo y la resolución de conflictos, enseñamos estrategias como la respiración profunda, pedir ayuda, usar palabras para comunicar sentimientos y tomar descansos cuando sea necesario.',
    fr: 'Grâce au modèle adulte, au langage positif et à la résolution des conflits, nous enseignons des stratégies telles que la respiration profonde, la demande d’aide, l’utilisation de mots pour communiquer les sentiments et la prise de pauses lorsque cela est nécessaire.',
    pt: 'Por meio do exemplo dos adultos, da linguagem positiva e da resolução de conflitos, ensinamos estratégias como respiração profunda, pedir ajuda, usar palavras para comunicar sentimentos e fazer pausas quando necessário.',
  },
  emotionalPara5: {
    en: 'We believe that children who learn to manage their emotions appropriately develop greater confidence, empathy, respect for others, and stronger life skills. Our commitment is to support each child throughout this process while building a strong foundation for emotional, social, and academic growth.',
    es: 'Creemos que los niños que aprenden a manejar sus emociones de manera adecuada desarrollan mayor confianza, empatía, respeto por los demás y habilidades de vida más sólidas. Nuestro compromiso es apoyar a cada niño durante este proceso mientras construimos una base sólida para el crecimiento emocional, social y académico.',
    fr: 'Nous croyons que les enfants qui apprennent à gérer leurs émotions de manière appropriée développent une plus grande confiance, empathie, respect des autres et des compétences de vie plus solides. Notre engagement est de soutenir chaque enfant tout au long de ce processus tout en bâtissant une base solide pour la croissance émotionnelle, sociale et académique.',
    pt: 'Acreditamos que as crianças que aprendem a gerir suas emoções adequadamente desenvolvem maior confiança, empatia, respeito pelos outros e habilidades de vida mais fortes. Nosso compromisso é apoiar cada criança ao longo deste processo enquanto construímos uma base forte para o crescimento emocional, social e acadêmico.',
  },
  emotionalImageAlt: {
    en: 'Children expressing emotions and developing emotional awareness',
    es: 'Niños expresando emociones y desarrollando conciencia emocional',
    fr: 'Enfants exprimant des émotions et développant une conscience émotionnelle',
    pt: 'Crianças expressando emoções e desenvolvendo consciência emocional',
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly currentLanguage: WritableSignal<LanguageCode> = signal('en');

  readonly languages: LanguageOption[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Português' },
  ];

  setLanguage(language: string): void {
    if (this.languages.some((option) => option.code === language)) {
      this.currentLanguage.set(language as LanguageCode);
    }
  }

  translate(key: string): string {
    return translations[key]?.[this.currentLanguage()] ?? key;
  }
}
