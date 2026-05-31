# AMANAY Parfums — Site Vitrine

Site vitrine moderne et luxueux pour **AMANAY**, marque marocaine de parfumerie haut de gamme. Le site présente l'univers de la marque à travers une expérience visuelle immersive, mêlant artisanat marocain et design contemporain.

## ✨ Aperçu

| Section | Description |
|---------|-------------|
| **Hero** | Parallax sur l'image de fond, texte animé lettre par lettre (Typewriter), particules dorées flottantes, icônes de valeurs |
| **Collections** | Double signature « Pour Lui » (argent) et « Pour Elle » (or), séparateur central animé, overlays interactifs |
| **Best-Sellers** | Carousel de produits avec effet 3D tilt, lightbox détaillée, filtres (Tous / EDP / Huile), auto-slide au survol |
| **Testimonials** | 10 avis clients en arabe et français, carousel multi-items (3/2/1), étoiles animées, auto-rotation |
| **Trust** | 5 piliers de confiance avec icônes tournantes, compteurs animés au scroll (50K+ clients, 4.9/5, livraison 24h) |
| **Our Story** | « L'Élégance Signature » — présentation de la marque avec double visuel |
| **Brand Story** | Histoire d'AMANAY (split-screen, parallax, clip-path reveal, citation typewriter) + Vision (zellige animé, gemme rotative, 3 piliers) |
| **Footer** | Newsletter, navigation, contact, réseaux sociaux |

## 🛠 Stack Technique

- **React 19** — Bibliothèque UI
- **Vite 8** (rolldown) — Bundler
- **Tailwind CSS 4** — Styling utilitaire
- **Iconify** (CDN) — Icônes vectorielles
- **Google Fonts** — Playfair Display, Cinzel, Amiri, Noto Sans Arabic, etc.

## 🎨 Design System

- **Palette** : Noir profond (`#050505`, `#0A0A0A`, `#111111`) + Or (`#D4AF37`) + Argent (`#C0C0C0`)
- **Typographie** : Playfair Display / Cinzel (titres), Poppins (corps), Amiri / Scheherazade New (arabe)
- **Animations** : Scroll reveal, typewriter, parallax, particules, 3D tilt, compteurs, pulse-glow, clip-path

## 🧩 Composants

| Composant | Rôle |
|-----------|------|
| `ScrollAnimation` | Wrapper IntersectionObserver (fade-up/down/left/right/scale/zoom-in) |
| `TypewriterText` | Texte lettre par lettre avec curseur clignotant |
| `GoldParticles` | 18 particules flottantes (3 types : float, drift, sparkle) |
| `AnimatedCounter` | Compteur animé au scroll avec easing cubic |
| `CustomCursor` | Curseur doré personnalisé (mix-blend-difference) |
| `Loader` | Écran de chargement initial (1.8s) |
| `BackToTop` | Bouton de retour en haut (après 600px de scroll) |

## 🚀 Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement

### Vers Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

Ou importer le dépôt GitHub depuis [vercel.com/new](https://vercel.com/new).

### Via GitHub Pages

```bash
npm run build
# Déployer le dossier dist/
```

---

## 📁 Structure du Projet

```
amanay-parfums/
├── public/               # Images et assets statiques
├── src/
│   ├── components/       # 16 composants React
│   ├── App.jsx           # Point d'entrée, section order, dividers
│   ├── index.css         # Styles globaux, keyframes, thème
│   └── main.jsx          # Mount React
├── index.html            # Entry HTML (fonts, Iconify CDN)
├── vite.config.js        # Configuration Vite
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
├── vercel.json           # Configuration Vercel
└── package.json          # Dépendances et scripts
```

---

© 2026 AMANAY PARFUMS — Tous droits réservés.  
صنع بشغف في المغرب
