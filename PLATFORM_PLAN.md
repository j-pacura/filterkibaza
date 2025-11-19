# 🚀 FiltroKibaza - Plan Platformy Webowej

## 📋 Przegląd Projektu

**Nazwa**: FiltroKibaza Web Platform
**Cel**: Nowoczesna platforma do zarządzania bazą firm związanych z filtracją
**Wersja 1.0**: Interaktywna mapa + Dashboard + Wyszukiwanie
**Wersja 2.0**: Mini CRM (kontakty, notatki, pliki)

---

## 🎨 Design Concept - "WOW Effect"

### Paleta Kolorów
```
Primary (Filtracja/Technologia):
- Niebieski: #0066FF (Trust, Technology)
- Ciemny Niebieski: #003D99
- Jasny Niebieski: #4D94FF

Secondary (Energia/Akcent):
- Pomarańczowy: #FF6B35 (Partnerzy)
- Zielony: #00C853 (Klienci)
- Fioletowy: #9C27B0 (Potencjalni)

Neutralne:
- Tło ciemne: #0A0E27 (Dark Navy)
- Tło jasne: #F8F9FA
- Szary: #6B7280
- Biały: #FFFFFF
```

### Efekty Wizualne
- ✨ Glassmorphism dla kart
- 🌊 Smooth animations (Framer Motion)
- 💫 Particle effects na hero section
- 🎭 3D card hover effects
- 🌈 Gradient backgrounds
- 🔮 Blur effects

---

## 🏗️ Stack Technologiczny

### Frontend
```json
{
  "framework": "React 18 + Vite",
  "routing": "React Router v6",
  "styling": "Tailwind CSS 3.x",
  "ui-components": "shadcn/ui",
  "animations": "Framer Motion",
  "maps": "Leaflet + React-Leaflet",
  "charts": "Recharts",
  "state": "Zustand + React Query",
  "forms": "React Hook Form + Zod",
  "icons": "Lucide React",
  "notifications": "React Hot Toast"
}
```

### Development Tools
```json
{
  "bundler": "Vite",
  "language": "TypeScript",
  "linting": "ESLint",
  "formatting": "Prettier",
  "git-hooks": "Husky (optional)"
}
```

---

## 📐 Architektura Aplikacji

```
filterkibaza-web/
├── public/
│   ├── companies_simple.json
│   └── filterkibaza_database.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RegionChart.tsx
│   │   │   ├── IndustryChart.tsx
│   │   │   └── RecentActivity.tsx
│   │   ├── map/
│   │   │   ├── InteractiveMap.tsx
│   │   │   ├── CompanyMarker.tsx
│   │   │   ├── MarkerCluster.tsx
│   │   │   └── MapFilters.tsx
│   │   ├── companies/
│   │   │   ├── CompanyCard.tsx
│   │   │   ├── CompanyList.tsx
│   │   │   ├── CompanyDetail.tsx
│   │   │   └── SearchBar.tsx
│   │   └── common/
│   │       ├── Loading.tsx
│   │       └── ErrorBoundary.tsx
│   ├── hooks/
│   │   ├── useCompanies.ts
│   │   ├── useFilters.ts
│   │   └── useMap.ts
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── MapView.tsx
│   │   ├── Companies.tsx
│   │   └── CompanyDetails.tsx
│   ├── stores/
│   │   └── useStore.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🎯 Funkcjonalności v1.0

### 1. Dashboard (Strona główna)
**Features:**
- 📊 **Statystyki ogólne**
  - Łączna liczba firm (225)
  - Podział: Klienci (147) / Partnerzy (44) / Potencjalni (34)
  - Liczba województw (14)

- 📈 **Wykresy interaktywne**
  - Wykres słupkowy: Firmy według województw
  - Wykres kołowy: Typy firm
  - Top 10 branż (bar chart)

- 🗺️ **Mini mapa overview**
  - Szybki podgląd rozmieszczenia firm
  - Click → przejście do pełnej mapy

- 🔥 **Highlighted segments**
  - Top 5 najważniejszych segmentów
  - Cementownie (4 firmy) - najwyższe zapotrzebowanie
  - Farmacja (10 firm) - czyszczenie HEPA

- ⚡ **Quick actions**
  - Szybki dostęp do wyszukiwania
  - Najnowsze firmy (ostatnio dodane)

### 2. Interaktywna Mapa
**Features:**
- 🗺️ **Mapa Polski z markerami**
  - Leaflet.js z niestandardowymi markerami
  - Clustering dla zagęszczonych obszarów

- 🎨 **Wizualne rozróżnienie**
  - 🟢 Zielone markery: Klienci (147)
  - 🟠 Pomarańczowe: Partnerzy (44)
  - 🟣 Fioletowe: Potencjalni klienci (34)
  - Różne rozmiary według liczby pracowników

- 🔍 **Filtry zaawansowane**
  - Województwo (multi-select)
  - Branża (multi-select)
  - Typ firmy (checkbox)
  - Potencjał (wysoki/średni)
  - Liczba pracowników (slider)

- 💬 **Popup szczegółowy**
  - Nazwa firmy + logo
  - Branża + liczba pracowników
  - Telefon + email + website
  - Przycisk "Zobacz więcej"

- 📍 **Funkcje mapy**
  - Zoom do regionu
  - Geolocation
  - Export do PDF
  - Fullscreen mode

### 3. Lista Firm
**Features:**
- 🔎 **Wyszukiwanie**
  - Full-text search (nazwa, branża, miasto)
  - Autocomplete
  - Search highlighting

- 🎴 **Card view / Table view**
  - Toggle między widokami
  - Sortowanie (nazwa, pracownicy, potencjał)

- 🏷️ **Filtry boczne**
  - Te same co na mapie
  - Live update liczby wyników

- 📄 **Paginacja**
  - 20/50/100 firm na stronę
  - Infinite scroll (optional)

### 4. Szczegóły Firmy
**Features:**
- 📋 **Informacje podstawowe**
  - Pełna wizytówka firmy
  - Kontakty (tel, email, website)
  - Lokalizacja na mini-mapie

- 📊 **Statystyki**
  - Liczba pracowników
  - Przychody (jeśli dostępne)
  - Potencjał biznesowy

- 🏷️ **Tagi i kategorie**
  - Branża, typ, region
  - Custom badges

- 🔗 **Powiązane firmy**
  - Z tej samej branży
  - Z tego samego regionu

---

## 🎨 Projekt UI/UX

### Layout
```
┌─────────────────────────────────────────────┐
│  NAVBAR (Fixed top, glassmorphism)          │
│  Logo | Dashboard | Mapa | Firmy | [Search]│
└─────────────────────────────────────────────┘
│                                             │
│  ┌────────┐  ┌──────────────────────────┐  │
│  │SIDEBAR │  │     MAIN CONTENT         │  │
│  │        │  │                          │  │
│  │Filters │  │  Dynamic content area    │  │
│  │Stats   │  │  (Dashboard/Map/List)    │  │
│  │        │  │                          │  │
│  │        │  │                          │  │
│  └────────┘  └──────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

### Responsywność
- **Desktop**: Full layout z sidebar
- **Tablet**: Collapsible sidebar
- **Mobile**: Bottom navigation, drawer filters

---

## 🚀 Plan Implementacji - Faza 1

### Sprint 1: Setup & Foundation (Dzień 1)
- [x] Inicjalizacja projektu Vite + React + TypeScript
- [x] Konfiguracja Tailwind CSS + shadcn/ui
- [x] Setup Router i podstawowy layout
- [x] Import danych JSON
- [x] TypeScript types dla Company

### Sprint 2: Dashboard (Dzień 2)
- [ ] Komponenty statystyk
- [ ] Wykresy Recharts
- [ ] Animacje Framer Motion
- [ ] Responsive layout

### Sprint 3: Mapa (Dzień 3-4)
- [ ] Integracja Leaflet
- [ ] Custom markery (3 typy)
- [ ] Clustering
- [ ] Filtry mapy
- [ ] Popups

### Sprint 4: Lista i Wyszukiwanie (Dzień 5)
- [ ] Search bar z autocomplete
- [ ] Filtry zaawansowane
- [ ] Card/Table views
- [ ] Paginacja

### Sprint 5: Szczegóły & Polish (Dzień 6-7)
- [ ] Strona szczegółów firmy
- [ ] Dodatkowe animacje
- [ ] Performance optimization
- [ ] Testing

---

## 🔮 Roadmap v2.0 - Mini CRM

### Przyszłe funkcje
- 👤 **Autoryzacja użytkowników**
  - Login/Register
  - Role: Admin / Sales / Viewer

- 📝 **Notatki do firm**
  - Rich text editor
  - Timestamped notes
  - Przypomnienia

- 📞 **Historia kontaktów**
  - Log połączeń telefonicznych
  - Wysłane emaile
  - Spotkania

- 📎 **Załączniki**
  - Upload plików (PDF, DOC, IMG)
  - Galeria zdjęć
  - Cloud storage

- 📊 **Pipeline sprzedażowy**
  - Kanban board
  - Statusy: Lead → Kontakt → Oferta → Negocjacje → Wygrana/Przegrana

- 📧 **Integracje**
  - Email (SMTP)
  - Kalendarz
  - Export do Excel/CSV

---

## 🎯 KPI i Metryki Sukcesu

### Wersja 1.0
- ✅ Ładowanie strony < 2s
- ✅ Smooth 60fps animations
- ✅ Mobile-friendly (100% responsive)
- ✅ Lighthouse score > 90
- ✅ Zero błędów konsoli

### Wersja 2.0 (CRM)
- ✅ User retention > 80%
- ✅ Average session time > 10 min
- ✅ Notes per company > 3
- ✅ Contact conversion rate metrics

---

## 🛠️ Komendy Development

```bash
# Instalacja
npm create vite@latest filterkibaza-web -- --template react-ts
cd filterkibaza-web
npm install

# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📦 Zależności

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "leaflet": "^1.9.4",
    "react-leaflet": "^4.2.1",
    "recharts": "^2.10.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^5.8.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.294.0",
    "react-hot-toast": "^2.4.1",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0"
  }
}
```

---

## 🎨 Design System

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: Inter
- **Mono**: JetBrains Mono

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Border Radius
- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- full: 9999px

---

## 🚨 Uwagi Techniczne

1. **Performance**:
   - Lazy loading dla komponentów
   - Virtual scrolling dla długich list
   - Debounce dla search (300ms)

2. **SEO** (przyszłość):
   - Meta tags
   - Open Graph
   - Sitemap

3. **Accessibility**:
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

4. **Browser Support**:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

---

**Status**: 🚀 Ready to implement!
**Start Date**: 2025-11-14
**Version**: 1.0-planning
