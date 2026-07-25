import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Experience {
  period: string;
  role: string;
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly identity = {
    name: 'Sofiane Delaude',
    role: 'Développeur Back-end & Front-end',
    location: 'Annecy',
    nationality: 'Belge',
    phone: '06 24 06 85 12',
    email: 'delaude.so@gmail.com',
    bio: [
      "Je suis un développeur passionné qui pense que la clé d'un logiciel efficace et durable réside dans une compréhension approfondie du domaine métier, ainsi que dans l'alignement du code avec cette compréhension.",
      "J'aime donc travailler en collaboration étroite avec les experts métier pour élaborer des solutions logicielles qui répondent vraiment à leurs besoins.",
    ],
  };

  protected readonly experiences: Experience[] = [
    {
      period: 'Nov. 2023 — en cours',
      role: 'Développeur Front-end',
      missions: [
        "Maintenance, évolution et intégration d'un parcours web de gestion des prélèvements dans l'application mobile",
        "Développement et déploiement d'un parcours web de gestion des bénéficiaires unitaires",
        "Conception et développement d'une partie du dashboard de visualisation des environnements de développement",
        "Conception, développement et déploiement d'un parcours web de suivi et gestion des virements",
        "Conception, développement et déploiement d'un nouveau parcours web de gestion des prélèvements",
      ],
    },
    {
      period: 'Juin 2020 — Nov. 2023',
      role: 'Développeur Back-end',
      missions: [
        'Maintenance et évolutions des APIs liées à la réglementation DSP2',
        "Développement et déploiement d'une API sur les référentiels bancaires",
        "Développement et déploiement d'une API sur la gestion du risque",
        "Conception, développement et déploiement d'une fonctionnalité de mise en crédits différés de chèques (BDD + DAO + API)",
        "Conception, développement et déploiement de deux fonctionnalités de saisie et de suivi des contestations de paiement par carte (BDD + DAO + API + BPMN)",
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
    'Java · TypeScript',
    'Test Driven Development',
    'Architecture hexagonale',
    'SOLID · KISS · YAGNI · DRY',
    'Curiosité · Adaptation · Rigueur',
  ];

  protected readonly activities: Activity[] = [
    { icon: 'sports_volleyball', label: 'Sports', detail: 'Volley-ball, ski' },
    { icon: 'science', label: 'Sciences', detail: 'Cosmologie, mathématiques…' },
    { icon: 'menu_book', label: 'Lecture', detail: 'Polars, informatique, philosophie…' },
    { icon: 'flight_takeoff', label: 'Voyages', detail: 'Japon, Grèce, Portugal, Italie…' },
    { icon: 'movie', label: 'Cinéma', detail: 'Films, séries, animés' },
    { icon: 'restaurant', label: 'Manger et boire', detail: 'Surtout quand c’est bon' },
  ];
}
