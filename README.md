# MGN Tackers - Tracker d'habitudes

Application web statique (HTML/CSS/JavaScript vanilla) pour suivre des habitudes quotidiennes, hebdomadaires et mensuelles, avec sauvegarde locale, import/export JSON et support PWA.

## Apercu

MGN Tackers permet de:

- Creer, modifier et supprimer des habitudes.
- Cocher les habitudes par date.
- Visualiser les progres sur 3 portees: jour, semaine et mois.
- Filtrer les habitudes en retard aujourd'hui.
- Exporter/importer les donnees au format JSON.
- Changer le theme (systeme, clair, sombre) et la langue (FR/EN).
- Installer l'application comme PWA (selon navigateur/appareil).

## Stack technique

- HTML5
- CSS3
- JavaScript vanilla (sans framework, sans build)
- localStorage pour la persistance
- Service Worker + Web App Manifest pour le mode PWA/offline

## Demarrage rapide

Le projet ne necessite aucune installation de dependances.

1. Ouvrir le dossier dans VS Code.
2. Lancer un serveur local (recommande pour le Service Worker).
3. Ouvrir l'application dans le navigateur.

Exemple avec l'extension VS Code Live Server:

- Clic droit sur `index.html`
- Choisir "Open with Live Server"

Exemple via Python:

```bash
python -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Fonctionnalites detaillees

### Gestion des habitudes

- Creation d'une habitude avec nom, frequence et icone.
- Edition des habitudes existantes.
- Suppression des habitudes.
- Compatibilite de normalisation pour d'anciens formats de frequence.

### Suivi et statistiques

- Suivi sur date selectionnee.
- Vues `jour`, `semaine` (7 jours glissants) et `mois` (30 jours glissants).
- Resume du jour (`x/y` habitudes faites).
- Statistiques de reussite sur la portee courante.
- Graphique hebdomadaire (canvas) avec taux par jour.

### Outils de donnees

- Filtre "habitudes en retard aujourd'hui".
- Export JSON incluant:
  - les habitudes
  - les preferences (theme, langue)
  - version + date d'export
- Import JSON depuis:
  - un tableau d'habitudes
  - ou un objet `{ habits, preferences }`

### Experience utilisateur

- Interface bilingue FR/EN avec traduction dynamique.
- Theme systeme/clair/sombre avec persistence locale.
- Meta description et attributs d'accessibilite actualises selon la langue.

### PWA et offline

- Manifest: `assets/site.webmanifest`
- Service Worker: `js/sw.js`
- Cache des assets essentiels pour fonctionnement hors-ligne.
- Bandeau d'installation avec gestion du prompt `beforeinstallprompt`.

## Structure du projet

```text
.
|- index.html
|- README.md
|- assets/
|  |- site.webmanifest
|  \- favicons/
|- config/
|  \- app.js
|- css/
|  \- styles.css
\- js/
	 |- app.js
	 \- sw.js
```

## Persistance locale

Les donnees sont stockees dans le navigateur via `localStorage`.

Cles utilisees:

- `mgn-tackers.habits`
- `mgn-tackers.theme`
- `mgn-tackers.language`
- `mgn-tackers.install-dismissed`

## Format des donnees

Exemple de payload d'export:

```json
{
  "version": 1,
  "exportedAt": "2026-04-23T10:00:00.000Z",
  "habits": [
    {
      "id": "habit-123",
      "name": "Boire de l'eau",
      "frequency": "daily",
      "icon": "💧",
      "completions": {
        "2026-04-23": true
      },
      "createdAt": "2026-04-20T08:00:00.000Z"
    }
  ],
  "preferences": {
    "theme": "system",
    "language": "fr"
  }
}
```

## Personnalisation rapide

- Modifier les cles d'application dans `config/app.js`.
- Adapter les couleurs/styles dans `css/styles.css`.
- Ajouter/modifier les textes traduits dans l'objet `translations` de `js/app.js`.

## Limitations connues

- Les donnees sont locales au navigateur et a l'appareil utilises.
- En navigation privee ou selon les reglages du navigateur, la persistance peut etre limitee.
- L'installation PWA depend des capacites du navigateur.

## Licence

Projet personnel. Ajouter une licence explicite si vous souhaitez une reutilisation publique (ex: MIT).
