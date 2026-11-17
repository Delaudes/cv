import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Experience {
  period: string;
  role: string;
  company: string;
  missions: string[];
}

interface EducationEntry {
  period: string;
  title: string;
  details: string[];
}

interface Activity {
  icon: string;
  label: string;
  detail: string;
}

interface Certification {
  title: string;
  issuer: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly identity = {
    name: 'Sofiane Delaude',
    role: 'Développeur Fullstack',
    location: 'Annecy',
    nationality: 'Belge',
    email: 'delaude.so@gmail.com',
    githubHandle: 'Delaudes',
    githubUrl: 'https://github.com/Delaudes',
    bio: [
      "Je suis un développeur passionné avec une forte appétence craft qui pense que la clé d'un logiciel efficace et durable réside dans une compréhension approfondie du domaine métier.",
      "J'aime donc travailler en collaboration étroite avec les experts métier pour élaborer des solutions logicielles qui répondent vraiment à leurs besoins.",
    ],
  };

  protected readonly experiences: Experience[] = [
    {
      period: 'Août 2026 — en cours',
      role: 'Développeur Mobile',
      company: 'Crédit Agricole Technologies & Services',
      missions: [
        "Parcours selfcare d'exécution de virements",
      ],
    },
    {
      period: 'Nov. 2023 — Juillet 2026',
      role: 'Développeur Front-end',
      company: 'Crédit Agricole Technologies & Services',
      missions: [
        "Gestion des mandats et des prélèvements",
        "Gestion des bénéficiaires unitaires",
        "Parcours d'exécution de virements pour les clients",
        "Suivi et gestion des virements des clients",
        "Visualisation de l'état des environnements de développement",
      ],
    },
    {
      period: 'Juin 2020 — Nov. 2023',
      role: 'Développeur Back-end',
      company: 'Crédit Agricole Technologies & Services',
      missions: [
        "Réglementation DSP2 (agrégation de comptes, initiation de paiements)",
        "Référentiels bancaires (IBAN, BIC, etc.)",
        "Détection des risques clients",
        "Mise en crédits différés de chèques",
        "Saisie et suivi des contestations de paiement par carte",
      ],
    },
  ];

  protected readonly education: EducationEntry[] = [
    {
      period: '2020',
      title: "Master Management, Technologies de l'Information et Innovation",
      details: [
        'Conception et programmation logicielles',
        'Bases de données et technologies Web',
        'Management de projets agiles',
        'Technologies et environnements mobiles',
        'Architectures des SI distribués et orientés services',
        'Data sciences',
      ],
    },
  ];

  protected readonly skills: string[] = [
    'Spring Boot · Angular · KMP',
    'POO · Tell Don\'t Ask · Loi de Déméter',
    'Clean/Hexagonal Architecture',
    'SOLID · KISS · YAGNI · DRY',
    'Curiosité · Adaptation · Rigueur',
  ];

  protected readonly readings: string[] = [
    'Software Craft',
    'Clean Code',
    'Clean Architecture',
    'Head First Design Patterns',
  ];

  protected readonly certifications: Certification[] = [
    { title: 'TDD & Clean Architecture dans le monde Web avec Angular', issuer: 'Michaël Azerhad, WealCome' },
  ];

  protected readonly activities: Activity[] = [
    { icon: 'sports_volleyball', label: 'Sports', detail: 'Volley-ball, ski' },
    { icon: 'science', label: 'Sciences', detail: 'Cosmologie, mathématiques…' },
    { icon: 'menu_book', label: 'Lecture', detail: 'Thriller, SF, philosophie…' },
    { icon: 'flight_takeoff', label: 'Voyages', detail: 'Japon, Grèce, Portugal, Autriche…' },
    { icon: 'restaurant', label: 'Gastronomie', detail: 'Cuisiner, bonnes tables' },
  ];
}
