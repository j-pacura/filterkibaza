# Baza Danych Firm - Filtracja i Systemy Przemysłowe

## Opis
Kompleksowa baza danych **210 firm** i potencjalnych klientów dla firmy produkującej i sprzedającej szeroko pojętą filtrację.

## 🎯 Ostatnia aktualizacja - dodano województwo świętokrzyskie!

### ✨ Nowy region w bazie:
**WOJEWÓDZTWO ŚWIĘTOKRZYSKIE** - 20 firm:
- 🏭 **Cementownie**: CEMEX Ożarów, Lafarge Małogoszcz - największe zakłady w regionie
- ⛏️ **Górnictwo**: Kopalnie wapienia (Morawica), wapna (Lhoist Bukowa), kamienia (Górno)
- 🔥 **Materiały ogniotrwałe**: Ożarów S.A. - hutnictwo wysokotemperaturowe
- 🏗️ **Metalurgia i odlewnictwo**: Odlewnie, konstrukcje stalowe
- 🥛 **Przemysł spożywczy**: OSM Starachowice, Sokołów, Pepees
- 💧 **Wodociągi**: PWiK Kielce, PWiK Ostrowiec
- 🧱 **Materiały budowlane**: Prefabet, ceramika budowlana
- ⚡ **Energetyka**: Elektrociepłownia Kielce
- 🤝 **Partnerzy lokalni**: KLIMEX, VENTUS - systemy HVAC

## Struktura danych

### Pliki
- `filterkibaza_database.json` - Pełna baza z grupowaniem i statystykami
- `companies_simple.json` - Uproszczona wersja (tylko lista firm)

### Pola w bazie danych
- **id**: Unikalny identyfikator firmy
- **name**: Nazwa firmy
- **region**: Województwo (np. dolnośląskie, śląskie, świętokrzyskie)
- **city**: Miasto
- **industry**: Branża (np. motoryzacja, chemia, energetyka, cementownie)
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
- **mazowieckie** : 41 firm
- **małopolskie** : 30 firm
- **łódzkie** : 22 firm
- **wielkopolskie** : 20 firm
- **świętokrzyskie** 🆕: 20 firm
- **dolnośląskie** : 19 firm
- **podkarpackie** : 18 firm
- **śląskie** : 17 firm
- **opolskie** : 17 firm
- **lubuskie** : 2 firm
- **podlaskie** : 1 firm
- **warmińsko-mazurskie** : 1 firm
- **kujawsko-pomorskie** : 1 firm
- **pomorskie** : 1 firm

### Podział według typu:
- **klient**: 137 firm (65.2%)
- **partner**: 41 firm (19.5%)
- **potencjalny klient**: 32 firm (15.2%)

### Top 20 branż:
1. **motoryzacja**: 16 firm
2. **energetyka**: 14 firm
3. **chemia**: 13 firm
4. **farmacja**: 10 firm
5. **spożywczy**: 9 firm
6. **hvac**: 7 firm
7. **filtry przemysłowe**: 6 firm
8. **woda i ścieki**: 6 firm
9. **woda**: 5 firm
10. **spożywcza**: 4 firm
11. **metalurgia**: 4 firm
12. **elektrotechnika**: 4 firm
13. **it**: 4 firm
14. **spożywczy - mleczarstwo**: 4 firm
15. **górnictwo**: 3 firm
16. **przemysł drzewny**: 3 firm
17. **hutnictwo**: 3 firm
18. **cementownie**: 3 firm
19. **tekstylia**: 3 firm
20. **elektronika**: 3 firm


## Kategorie firm

### 1. Klienci (137 firm) - 65.2%
Firmy, które mogą być bezpośrednimi odbiorcami produktów filtracyjnych:

**Przemysł ciężki z wysokim zapotrzebowaniem na filtrację:**
- **Hutnictwo i metalurgia**: Huty stali, odlewnie, konstrukcje stalowe
- **Górnictwo**: Kopalnie węgla, miedzi, wapienia, kamienia
- **Energetyka**: Elektrownie, elektrociepłownie - filtracja spalin
- **Cementownie**: CEMEX, Lafarge, Górażdże - intensywne odpylanie

**Przemysł motoryzacyjny:**
- **Fabryki samochodów**: VW, Toyota, Mercedes, Stellantis
- **Baterie do EV**: LG Energy Solution
- **Komponenty**: Lakiernie, odlewnie, części

**Chemia i petrochemia:**
- **Rafinerie**: PKN Orlen, Lotos
- **Zakłady chemiczne**: Grupa Azoty, Synthos, Ciech
- **Materiały specjalistyczne**: Żywice, plastyfikatory

**Farmacja i biotechnologia:**
- Producenci leków wymagający czystych pomieszczeń klasy GMP
- Czyste pomieszczenia HEPA, filtry absolutne

**Przemysł spożywczy:**
- **Mleczarnie**: Mlekovita, Mlekpol, Piątnica, OSM
- **Browary**: Heineken, Kompania Piwowarska
- **Woda mineralna**: Żywiec Zdrój, Cisowianka
- **Przetwórstwo**: Sokołów, Maspex

**Przemysł papierniczy i drzewny:**
- **Papiernie**: Mondi, International Paper
- **Płyty drewnopochodne**: Kronospan, Swiss Krono - odpylanie trocin

**Wodociągi i oczyszczalnie:**
- MPWiK (Warszawa, Kraków, Wrocław, Łódź, Kielce)
- Aquanet, Veolia - filtracja wody i ścieków

### 2. Potencjalni klienci (32 firm) - 15.2%
Firmy z wysokim potencjałem do nawiązania współpracy:
- Zakłady produkcyjne z potrzebą filtracji
- Galwanizery i cynkownie
- Lakiernie przemysłowe
- Zakłady obróbki powierzchniowej

### 3. Partnerzy (41 firm) - 19.5%
Dystrybutorzy, producenci i specjaliści w zakresie filtracji:

**Producenci filtrów - światowi liderzy:**
- MANN+HUMMEL, Mahle, Donaldson, Pall
- Camfil, AAF International, HYDAC
- Filtry Polska, SFM Filtry, Filtrotechnika

**Systemy HVAC i wentylacja:**
- Airkom, Invent, Klimazbyt, Pro-Vent
- Carline, Systemcold, KLIMEX Kielce
- Serwis Klimatyzacji Przemysłowej

**Dystrybutorzy i hurtownie:**
- Rubix Poland (MRO)
- Tech-Fil, Ekol-Serwis
- VENTUS - wentylacja przemysłowa

**Technologie lakiernicze:**
- Durr, Eisenmann
- CSV, Colorex

**Filtracja wody:**
- Biower, Eko-Bio

## Kluczowe branże wymagające filtracji

### 🏭 Przemysł z najwyższym zapotrzebowaniem:

1. **Motoryzacja** (16 firm)
   - Lakiernie (kabiny malarskie, filtry powietrza)
   - Spawalnie (odsysanie dymów spawalniczych)
   - Obróbka mechaniczna (odpylanie, mgła olejowa)

2. **Energetyka** (14 firm)
   - Elektrownie - filtry spalin, filtry workowe
   - Turbiny gazowe - filtry powietrza
   - Kotłownie - odpylanie

3. **Cementownie** (4 firm)
   - Największe źródła pyłów przemysłowych
   - Filtry workowe, elektrofiltry
   - CEMEX, Lafarge, Górażdże, Ożarów

4. **Chemia** (13 firm)
   - Procesy technologiczne wymagające czystości
   - Filtracja gazów procesowych
   - Czyste pomieszczenia

5. **Farmacja** (10 firm)
   - Czyszczenie HEPA, filtry absolutne
   - Pomieszczenia klasy GMP
   - Najwyższe wymagania czystości

6. **Spożywcza** (14 firm)
   - Mleczarnie - filtracja powietrza w produkcji
   - Browary - filtracja technologiczna
   - Piekarnie - odpylanie mąki

7. **Górnictwo** (8 firm)
   - Kopalnie węgla, miedzi, wapienia
   - Kamieniołomy - intensywne odpylanie
   - Kopalnie odkrywkowe

8. **Woda i ścieki** (11 firm)
   - Oczyszczalnie ścieków
   - Stacje uzdatniania wody
   - Systemy filtracji membranowej

## Wykorzystanie

### Python
```python
import json

with open('filterkibaza_database.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Pobierz wszystkie firmy
companies = data['companies']

# Firmy z województwa świętokrzyskiego
swietokrzyskie = data['by_region']['świętokrzyskie']
print(f"Firmy ze świętokrzyskiego: {len(swietokrzyskie)}")

# Cementownie (wysokie zapotrzebowanie na filtry)
cementownie = [c for c in companies if 'cement' in c.get('industry', '').lower()]

# Partnerzy (dystrybutorzy/producenci filtrów)
partners = [c for c in companies if c['type'] == 'partner']

# Klienci z branży spożywczej
food_industry = [c for c in companies if 'spożyw' in c.get('industry', '').lower()]

# Top firmy z wysokim potencjałem
high_potential = [c for c in companies if c.get('potential') == 'wysoki']
```

### JavaScript
```javascript
fetch('filterkibaza_database.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Total companies: ${data.metadata.total_companies}`);
    
    // Firmy ze świętokrzyskiego
    const swietokrzyskie = data.by_region['świętokrzyskie'];
    
    // Filtruj partnerów
    const partners = data.companies.filter(c => c.type === 'partner');
    
    // Cementownie
    const cement = data.companies.filter(c => 
      c.industry && c.industry.includes('cement')
    );
    
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
- **169 klientów** wymagających filtracji
- **41 partnerów** do współpracy i dystrybucji
- Pokrycie **14 województw** w Polsce
- **92 branż** przemysłowych

### Najważniejsze segmenty:

| Segment | Liczba firm | Potencjał |
|---------|-------------|-----------|
| 🚗 Motoryzacja | 16 | Wysoki - lakiernie, spawalnie |
| ⚡ Energetyka | 14 | Wysoki - filtry spalin |
| 🏭 Cementownie | 3 | Bardzo wysoki - odpylanie |
| 🧪 Chemia | 13 | Wysoki - procesy technologiczne |
| 💊 Farmacja | 10 | Bardzo wysoki - czyszczenie HEPA |
| 🍶 Spożywcza | 13+ | Średni/Wysoki - higiena produkcji |
| ⛏️ Górnictwo | 8 | Wysoki - odpylanie |
| 💧 Woda/ścieki | 11 | Średni - oczyszczalnie |

### Geografia - pokrycie rynku:

**Regiony z największą liczbą firm:**
1. 🏆 Mazowieckie (41 firm) - Warszawa, PKN Orlen
2. 🥈 Małopolskie (30 firm) - Kraków, Grupa Azoty, Synthos
3. 🥉 Łódzkie (22 firm) - Łódź, PGE Bełchatów
4. Świętokrzyskie (20 firm) 🆕 - cementownie, górnictwo
5. Wielkopolskie (20 firm) - Poznań, VW

## 🎯 Specjalne segmenty dla filtracji

### Cementownie i wapienniki (największe zapotrzebowanie):
- CEMEX Ożarów, Lafarge Małogoszcz
- Górażdże Cement, Ożarów S.A.
- Wymagania: Filtry workowe dużej wydajności, elektrofiltry

### Kopalnie i kamieniołomy:
- KGHM, JSW, PGG
- Kopalnie wapienia (Morawica, Bukowa, Górno)
- Wymagania: Odpylanie, filtry robocze

### Mleczarnie (higieniczne środowisko):
- Mlekovita, Mlekpol, Piątnica, OSM
- Wymagania: Filtry absolutne, HEPA dla pomieszczeń produkcyjnych

## Aktualizacja
- **Data utworzenia**: 2025-11-14
- **Wersja**: 1.0
- **Ostatnia aktualizacja**: 2025-11-14
  - Dodano 35 firm (producenci filtrów, mleczarnie, wodociągi)
  - Dodano 20 firm z województwa świętokrzyskiego 🆕

## Licencja
Dane przeznaczone do użytku wewnętrznego firmy.
