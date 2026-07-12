import { Injectable, signal } from '@angular/core';

export type Language = 'DE' | 'EN';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translations: Record<Language, Record<string, string>> = {
    DE: {},
    EN: {}
  };

  currentLanguage = signal<Language>('DE');

  constructor() {
    this.loadTranslations();
    this.loadSavedLanguage();
  }

  private loadTranslations() {
    this.translations.DE = {
      'hero.greeting': 'Hi! Ich bin Konstantin.',
      'hero.title': 'Fullstack<br>DEVELOPER',
      'hero.cta': 'Lass uns sprechen',

      'nav.about': 'Über mich',
      'nav.skills': 'Fähigkeiten',
      'nav.work': 'Meine Arbeiten',

      'about.title': 'Lass uns zusammenarbeiten',
      'about.description1': 'Meine Leidenschaft für IT, Computer und Programmierung basiert auf einer tiefen Faszination für die Funktionsweise digitaler Systeme und deren nahezu unbegrenzte Gestaltungsmöglichkeiten. Mich motiviert es, technologische Zusammenhänge zu verstehen, Prozesse zu optimieren und durch Code reale Probleme effizient zu lösen. Programmierung ist für mich dabei nicht nur Technik, sondern ein kreativer wie analytischer Prozess, in dem strukturierte Logik, saubere Architekturen und nachhaltige Lösungen im Mittelpunkt stehen.',
      'about.description2': 'Besonders reizt mich die Dynamik der IT-Welt: Neue Technologien, Frameworks und Methoden begreife ich als Chance zur Weiterentwicklung. Mein Anspruch ist es, nicht nur mit bestehenden Systemen zu arbeiten, sondern aktiv innovative Lösungen zu gestalten — zukunftsorientiert, präzise und mit echter Begeisterung für Technologie.',
      'about.cta': 'Nachricht senden',
      'about.iAm': 'Ich bin',

      'skills.title': 'Meine Fähigkeiten',

      'work.title': 'Meine Arbeiten',
      'work.subtitle': 'Hier finden Sie eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',

      'contact.title': 'Kontakt',
      'contact.cta': 'Problemlöser zu Diensten',
      'contact.description': 'Gerne können Sie hier Kontakt mit mir aufnehmen, um über mögliche Projekte zu sprechen oder einfach nur Hallo zu sagen. Ich garantiere Ihnen eine schnelle Antwort, um einen Mehrwert für Ihr Projekt zu schaffen. Zögern Sie nicht, mich zu kontaktieren!',
      'contact.developer': 'Benötigen Sie einen Fullstack-Entwickler? Bitte hier entlang!',
      'contact.submit': 'Nachricht senden',
      'contact.sending': 'Wird gesendet...',
      'contact.success': 'Vielen Dank! Deine Nachricht wurde gesendet. Ich antworte dir bald.',

      'form.name': 'Dein Name',
      'form.email': 'Deine E-Mail-Adresse',
      'form.message': 'Deine Nachricht',
      'form.privacy': 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
      'form.error.name': 'Name ist erforderlich',
      'form.error.nameLength': 'Min. 2 Zeichen',
      'form.error.email': 'Email ist erforderlich',
      'form.error.emailFormat': 'Gültige Email erforderlich',
      'form.error.message': 'Min. 10 Zeichen',
      'form.error.privacy': 'Bitte akzeptieren Sie die Datenschutzerklärung'
    };

    this.translations.EN = {
      'hero.greeting': 'Hi! I\'m Konstantin.',
      'hero.title': 'Fullstack<br>DEVELOPER',
      'hero.cta': 'Let\'s talk',

      'nav.about': 'About me',
      'nav.skills': 'Skill set',
      'nav.work': 'My work',

      'about.title': 'Let\'s work together',
      'about.description1': 'My passion for IT, computers and programming is based on a deep fascination with how digital systems work and their virtually unlimited design possibilities. I am motivated to understand technological relationships, optimize processes, and solve real problems efficiently through code. Programming for me is not just technology, but a creative and analytical process in which structured logic, clean architectures and sustainable solutions are at the center.',
      'about.description2': 'I am particularly drawn to the dynamics of the IT world: I see new technologies, frameworks and methods as opportunities for further development. My ambition is not just to work with existing systems, but to actively shape innovative solutions — forward-thinking, precise and with genuine enthusiasm for technology.',
      'about.cta': 'Send a message',
      'about.iAm': 'I am',

      'skills.title': 'My Skills',

      'work.title': 'My work',
      'work.subtitle': 'Explore a selection of my work here – interact with the projects to see my skills in action.',

      'contact.title': 'Contact',
      'contact.cta': 'Problem solver at your service',
      'contact.description': 'Feel free to get in touch with me to discuss possible projects or just to say hello. I guarantee you a quick response to create added value for your project. Don\'t hesitate to contact me!',
      'contact.developer': 'Need a fullstack developer? This way please!',
      'contact.submit': 'Send message',
      'contact.sending': 'Sending...',
      'contact.success': 'Thank you! Your message has been sent. I will get back to you soon.',

      'form.name': 'Your name',
      'form.email': 'Your email address',
      'form.message': 'Your message',
      'form.privacy': 'I have read the privacy policy and agree to the processing of my data.',
      'form.error.name': 'Name is required',
      'form.error.nameLength': 'Min. 2 characters',
      'form.error.email': 'Email is required',
      'form.error.emailFormat': 'Valid email required',
      'form.error.message': 'Min. 10 characters',
      'form.error.privacy': 'Please accept the privacy policy'
    };
  }

  translate(key: string): string {
    const lang = this.currentLanguage();
    return this.translations[lang][key] || key;
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  private loadSavedLanguage() {
    const saved = localStorage.getItem('preferredLanguage') as Language | null;
    if (saved && (saved === 'DE' || saved === 'EN')) {
      this.currentLanguage.set(saved);
    }
  }
}
