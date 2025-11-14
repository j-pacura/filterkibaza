# Baza Danych Firm - Filtracja i Systemy Przemysłowe

## Opis
Kompleksowa baza danych **190 firm** i potencjalnych klientów dla firmy produkującej i sprzedającej szeroko pojętą filtrację.

## 🎯 Zaktualizowana baza - teraz z dodatkowymi firmami!

### ✨ Nowe kategorie:
- **Producenci filtrów** - MAHLE, Donaldson, Pall, HYDAC, Camfil
- **Dystrybutorzy HVAC** - Airkom, Invent, Klimazbyt
- **Przemysł spożywczy** - mleczarnie (Mlekovita, Mlekpol, Piątnica), browary
- **Wodociągi i oczyszczalnie** - MPWiK, Aquanet, Veolia
- **Przemysł papierniczy** - Mondi, International Paper
- **Lakiernie przemysłowe** - Durr, Eisenmann
- **Przemysł drzewny** - Kronospan, Swiss Krono
- **Serwisy i inżynieria** - specjaliści od systemów filtracji

## Struktura danych

### Pliki
- `filterkibaza_database.json` - Pełna baza z grupowaniem i statystykami
- `companies_simple.json` - Uproszczona wersja (tylko lista firm)

### Pola w bazie danych
- **id**: Unikalny identyfikator firmy
- **name**: Nazwa firmy
- **region**: Województwo (np. dolnośląskie, śląskie, mazowieckie)
- **city**: Miasto
- **industry**: Branża (np. motoryzacja, chemia, energetyka, filtry przemysłowe)
- **employees**: Liczba pracowników
- **revenue**: Przychody (jeśli dostępne)
- **potential**: Potencjał współpracy (wysoki/średni)
- **type**: Typ relacji (klient/potencjalny klient/partner)
- **lat**: Szerokość geograficzna
- **lng**: Długość geograficzna
- **address**: Adres
- **phone**: Telefon
- **website**: Strona internetowa
- **email**: Email
- **description**: Opis działalności

## Statystyki

### Podział według województw:
- **mazowieckie**: 41 firm
- **małopolskie**: 30 firm
- **łódzkie**: 22 firm
- **wielkopolskie**: 20 firm
- **dolnośląskie**: 19 firm
- **podkarpackie**: 18 firm
- **śląskie**: 17 firm
- **opolskie**: 17 firm
- **lubuskie**: 2 firm
- **podlaskie**: 1 firm
- **warmińsko-mazurskie**: 1 firm
- **kujawsko-pomorskie**: 1 firm
- **pomorskie**: 1 firm

### Podział według typu:
- **klient**: 119 firm (62.6%)
- **partner**: 39 firm (20.5%)
- **potencjalny klient**: 32 firm (16.8%)

### Top 15 branż:
- **motoryzacja**: 16 firm
- **energetyka**: 13 firm
- **chemia**: 12 firm
- **farmacja**: 10 firm
- **spożywczy**: 9 firm
- **hvac**: 7 firm
- **filtry przemysłowe**: 6 firm
- **woda**: 5 firm
- **spożywcza**: 4 firm
- **elektrotechnika**: 4 firm
- **it**: 4 firm
- **woda i ścieki**: 4 firm
- **górnictwo**: 3 firm
- **przemysł drzewny**: 3 firm
- **hutnictwo**: 3 firm


## Kategorie firm

### 1. Klienci (119 firm) - 62.6%
Firmy, które mogą być bezpośrednimi odbiorcami produktów filtracyjnych:
- **Przemysł ciężki**: Hutnictwo, górnictwo, energetyka
- **Motoryzacja**: Fabryki samochodów, części, baterie do EV
- **Chemia i petrochemia**: Rafinerie, zakłady chemiczne
- **Farmacja**: Producenci leków wymagający czystych pomieszczeń
- **Spożywcza**: Mleczarnie, browary, producenci wody
- **Papiernictwo**: Producenci papieru i tektury
- **Przemysł drzewny**: Producenci płyt, wymagający odpylania

### 2. Potencjalni klienci (32 firm) - 16.8%
Firmy z wysokim potencjałem do nawiązania współpracy:
- Zakłady produkcyjne z potrzebą filtracji
- Galwanizery i cynkownie
- Lakiernie przemysłowe

### 3. Partnerzy (39 firm) - 20.5%
Dystrybutorzy, producenci i specjaliści w zakresie filtracji:
- **Producenci filtrów**: MANN+HUMMEL, Mahle, Donaldson, Pall, Camfil, AAF
- **Systemy HVAC**: Airkom, Invent, Klimazbyt, Pro-Vent, Carline
- **Dystrybutorzy**: Filtry Polska, SFM Filtry, Rubix Poland
- **Serwisy**: Ekol-Serwis, Tech-Fil, Filtrotechnika
- **Technologie lakiernicze**: Durr, Eisenmann, CSV, Colorex
- **Filtracja wody**: Biower, Eko-Bio

## Kluczowe branże wymagające filtracji

### 🏭 Przemysł wymagający intensywnej filtracji:
1. **Motoryzacja** (16 firm) - lakiernie, spawalnie, czyszczenie powietrza
2. **Energetyka** (13 firm) - elektrownie, filtry spalin, turbiny
3. **Chemia** (12 firm) - procesy technologiczne, bezpieczeństwo
4. **Farmacja** (10 firm) - czyszczenie HEPA, czystość produkcji
5. **Spożywcza** (13 firm) - mleczarnie, browary, napoje - filtracja technologiczna
6. **Papiernictwo** (2 firmy) - odpylanie, filtracja wody
7. **Przemysł drzewny** (4 firmy) - odpylanie trocin i pyłów
8. **Woda i ścieki** (9 firm) - oczyszczalnie, wodociągi

## Wykorzystanie

### Python
```python
import json

with open('filterkibaza_database.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Pobierz wszystkie firmy
companies = data['companies']

# Filtruj partnerów (dystrybutorzy/producenci filtrów)
partners = [c for c in companies if c['type'] == 'partner']

# Znajdź klientów z branży spożywczej
food_industry = [c for c in companies if 'spożyw' in c.get('industry', '').lower()]

# Firmy z województwa śląskiego
slaskie = data['by_region']['śląskie']

# Top firmy z wysokim potencjałem
high_potential = [c for c in companies if c.get('potential') == 'wysoki']
```

### JavaScript
```javascript
fetch('filterkibaza_database.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Total companies: ${data.metadata.total_companies}`);
    
    // Filtruj partnerów
    const partners = data.companies.filter(c => c.type === 'partner');
    
    // Grupuj według branży
    const byIndustry = {};
    data.companies.forEach(c => {
      const ind = c.industry || 'unknown';
      byIndustry[ind] = (byIndustry[ind] || 0) + 1;
    });
  });
```

## 📊 Podsumowanie wartości dla biznesu

### Potencjał rynkowy:
- **119 klientów i potencjalnych klientów** wymagających filtracji
- **39 partnerów** do współpracy i dystrybucji
- Pokrycie **wszystkich województw** w Polsce
- **15+ branż** przemysłowych

### Najważniejsze segmenty:
1. 🚗 **Motoryzacja** - największy segment (16 firm)
2. ⚡ **Energetyka** - elektrownie, ciepłownie (13 firm)
3. 🧪 **Chemia** - procesy technologiczne (12 firm)
4. 🍶 **Spożywcza** - mleczarnie, browary, napoje (13 firm)
5. 💊 **Farmacja** - czyste pomieszczenia (8 firm)

## Aktualizacja
- **Data utworzenia**: 2025-11-14
- **Wersja**: 1.0
- **Ostatnia aktualizacja**: 2025-11-14 (dodano 35 firm)

## Licencja
Dane przeznaczone do użytku wewnętrznego firmy.
