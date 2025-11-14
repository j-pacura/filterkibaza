# Baza Danych Firm - Filtracja i Systemy Przemysłowe

## Opis
Kompleksowa baza danych **225 firm** i potencjalnych klientów dla firmy produkującej i sprzedającej szeroko pojętą filtrację.

## 🎯 Najnowsza aktualizacja - rozszerzenie województwa małopolskiego!

### ✨ Ostatnie aktualizacje:
1. **ŚWIĘTOKRZYSKIE** 🆕 - 20 firm (cementownie, górnictwo, metalurgia)
2. **MAŁOPOLSKIE** ⬆️ - +15 firm (wodociągi, mleczarnie, galwanizery, partnerzy)

**Małopolskie teraz: 45 firm** (było 30, dodano 15)

### 📍 Nowe firmy w małopolskim:
- 💧 **Wodociągi**: PWiK Tarnów, MPWiK Nowy Sącz
- 🥛 **Mleczarnie**: OSM Kraków, Mlekpol Nowy Sącz
- 🍺 **Browar**: Browar Zamkowy Cieszyn
- 🥩 **Mięso**: Tarczyński Kraków
- ⚙️ **Galwanizery**: Galwanika Kraków, Chromowanie Tarnów
- 🧱 **Ceramika**: Keramika Dobczyce
- 🎨 **Chemia**: LERG - lakiery
- 🤝 **Partnerzy**: Filtry-Serwis, Technika Odpylania, WENTPOL

## Struktura danych

### Pliki
- `filterkibaza_database.json` - Pełna baza z grupowaniem i statystykami
- `companies_simple.json` - Uproszczona wersja (tylko lista firm)

### Pola w bazie danych
- **id**: Unikalny identyfikator firmy
- **name**: Nazwa firmy
- **region**: Województwo
- **city**: Miasto
- **industry**: Branża (motoryzacja, chemia, energetyka, cementownie, filtry przemysłowe)
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
- **małopolskie** ⬆️: 45 firm
- **mazowieckie** : 41 firm
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
- **klient**: 147 firm (65.3%)
- **partner**: 44 firm (19.6%)
- **potencjalny klient**: 34 firm (15.1%)

### Top 20 branż:
1. **motoryzacja**: 16 firm
2. **energetyka**: 14 firm
3. **chemia**: 13 firm
4. **farmacja**: 10 firm
5. **spożywczy**: 9 firm
6. **woda i ścieki**: 8 firm
7. **hvac**: 7 firm
8. **filtry przemysłowe**: 7 firm
9. **spożywczy - mleczarstwo**: 6 firm
10. **woda**: 5 firm
11. **spożywcza**: 4 firm
12. **metalurgia**: 4 firm
13. **elektrotechnika**: 4 firm
14. **it**: 4 firm
15. **HVAC**: 4 firm
16. **górnictwo**: 3 firm
17. **przemysł drzewny**: 3 firm
18. **hutnictwo**: 3 firm
19. **cementownie**: 3 firm
20. **tekstylia**: 3 firm


## Kategorie firm

### 1. Klienci (147 firm) - 65.3%
Firmy, które mogą być bezpośrednimi odbiorcami produktów filtracyjnych:

**Przemysł ciężki z wysokim zapotrzebowaniem na filtrację:**
- **Hutnictwo i metalurgia**: Huty stali, odlewnie, konstrukcje stalowe, galwanizery
- **Górnictwo**: Kopalnie węgla, miedzi, wapienia, kamienia - systemy odpylania
- **Energetyka**: Elektrownie, elektrociepłownie - filtracja spalin
- **Cementownie**: CEMEX, Lafarge, Górażdże - największe źródła pyłów

**Przemysł motoryzacyjny:**
- **Fabryki samochodów**: VW, Toyota, Mercedes, Stellantis
- **Baterie do EV**: LG Energy Solution (10,000 pracowników)
- **Komponenty**: Lakiernie, odlewnie, części

**Chemia i petrochemia:**
- **Rafinerie**: PKN Orlen Płock
- **Zakłady chemiczne**: Grupa Azoty, Synthos, Ciech
- **Lakiery i farby**: LERG, producenci chemii specjalistycznej

**Farmacja i biotechnologia:**
- Producenci leków wymagający czystych pomieszczeń klasy GMP
- Czyste pomieszczenia HEPA, filtry absolutne
- Genexo, Selvita, Biomed, Adamed

**Przemysł spożywczy:**
- **Mleczarnie**: Mlekovita, Mlekpol, Piątnica, OSM (Kraków, Starachowice)
- **Browary**: Heineken, Kompania Piwowarska, Browar Zamkowy
- **Woda mineralna**: Żywiec Zdrój, Cisowianka
- **Przetwórstwo mięsne**: Sokołów, Tarczyński

**Przemysł papierniczy i drzewny:**
- **Papiernie**: Mondi Świecie, International Paper
- **Płyty drewnopochodne**: Kronospan, Swiss Krono - odpylanie trocin

**Wodociągi i oczyszczalnie (13 firm):**
- MPWiK (Warszawa, Kraków, Wrocław, Łódź, Kielce, Tarnów, Nowy Sącz)
- Aquanet, Veolia - filtracja wody i oczyszczanie ścieków

### 2. Potencjalni klienci (34 firm) - 15.1%
Firmy z wysokim potencjałem do nawiązania współpracy:
- Zakłady produkcyjne z potrzebą filtracji
- **Galwanizery i cynkownie**: Chromowanie, niklowanie - filtracja oparów
- Lakiernie przemysłowe
- Zakłady obróbki powierzchniowej

### 3. Partnerzy (44 firm) - 19.6%
Dystrybutorzy, producenci i specjaliści w zakresie filtracji:

**Producenci filtrów - światowi liderzy:**
- MANN+HUMMEL, Mahle, Donaldson, Pall
- Camfil, AAF International, HYDAC
- Filtry Polska, SFM Filtry, Filtrotechnika

**Systemy HVAC i wentylacja:**
- Airkom, Invent, Klimazbyt, Pro-Vent, WENTPOL
- Carline, Systemcold, KLIMEX Kielce
- Serwis Klimatyzacji Przemysłowej

**Dystrybutorzy i serwisy:**
- Rubix Poland (MRO), Filtry-Serwis Kraków
- Tech-Fil, Ekol-Serwis, Technika Odpylania
- VENTUS - wentylacja przemysłowa

**Technologie lakiernicze:**
- Durr, Eisenmann
- CSV, Colorex

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

3. **Cementownie** (3 firm) ⭐
   - Największe źródła pyłów przemysłowych
   - Filtry workowe, elektrofiltry
   - CEMEX, Lafarge, Górażdże

4. **Chemia** (14 firm)
   - Procesy technologiczne wymagające czystości
   - Filtracja gazów procesowych, rozpuszczalników
   - Czyste pomieszczenia

5. **Farmacja i biotechnologia** (11 firm)
   - Czyszczenie HEPA, filtry absolutne
   - Pomieszczenia klasy GMP
   - Najwyższe wymagania czystości

6. **Spożywcza** (15+ firm)
   - Mleczarnie - filtracja powietrza w produkcji
   - Browary - filtracja technologiczna
   - Piekarnie - odpylanie mąki

7. **Górnictwo** (11 firm)
   - Kopalnie węgla, miedzi, wapienia
   - Kamieniołomy - intensywne odpylanie
   - Kopalnie odkrywkowe

8. **Woda i ścieki** (13 firm)
   - Oczyszczalnie ścieków
   - Stacje uzdatniania wody
   - Systemy filtracji membranowej

9. **Galwanizacja** (3 firm)
   - Chromowanie, niklowanie, cynkowanie
   - Filtracja oparów kąpieli galwanicznych
   - Oczyszczanie powietrza

## Wykorzystanie

### Python
```python
import json

with open('filterkibaza_database.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Pobierz wszystkie firmy
companies = data['companies']

# Firmy z województwa małopolskiego
malopolskie = data['by_region']['małopolskie']
print(f"Małopolskie: {len(malopolskie)} firm")

# Cementownie (wysokie zapotrzebowanie na filtry)
cementownie = [c for c in companies if 'cement' in c.get('industry', '').lower()]

# Wodociągi - filtracja wody
wodociagi = [c for c in companies if 'woda' in c.get('industry', '').lower()]

# Partnerzy (dystrybutorzy/producenci filtrów)
partners = [c for c in companies if c['type'] == 'partner']

# Galwanizery - filtracja oparów
galwanizery = [c for c in companies if 'galwaniz' in c.get('industry', '').lower()]
```

### JavaScript
```javascript
fetch('filterkibaza_database.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Total companies: ${data.metadata.total_companies}`);
    
    // Firmy z małopolskiego
    const malopolskie = data.by_region['małopolskie'];
    
    // Filtruj partnerów
    const partners = data.companies.filter(c => c.type === 'partner');
    
    // Cementownie
    const cement = data.companies.filter(c => 
      c.industry && c.industry.includes('cement')
    );
    
    // Wodociągi
    const water = data.companies.filter(c =>
      c.industry && c.industry.includes('woda')
    );
  });
```

## 📊 Podsumowanie wartości dla biznesu

### Potencjał rynkowy:
- **181 klientów** wymagających filtracji
- **44 partnerów** do współpracy i dystrybucji
- Pokrycie **14 województw** w Polsce
- **96 branż** przemysłowych

### Najważniejsze segmenty:

| Segment | Liczba firm | Potencjał | Charakterystyka |
|---------|-------------|-----------|-----------------|
| 🚗 Motoryzacja | 16 | Wysoki | Lakiernie, spawalnie, obróbka |
| ⚡ Energetyka | 14 | Wysoki | Filtry spalin, elektrofiltry |
| 🏭 Cementownie | 3 | Bardzo wysoki | Największe źródła pyłów |
| 🧪 Chemia | 13 | Wysoki | Procesy technologiczne |
| 💊 Farmacja | 10 | Bardzo wysoki | Czyszczenie HEPA |
| 🍶 Spożywcza | 15+ | Średni/Wysoki | Higiena produkcji |
| ⛏️ Górnictwo | 11 | Wysoki | Odpylanie |
| 💧 Woda/ścieki | 13 | Średni | Oczyszczalnie |
| ⚙️ Galwanizacja | 3 | Wysoki | Filtracja oparów |

### Geografia - pokrycie rynku:

**Top 5 regionów:**
1. 🏆 Mazowieckie (41 firm) - Warszawa, PKN Orlen
2. 🥈 Małopolskie (45 firm) ⬆️ - Kraków, Azoty, Synthos, mleczarnie
3. 🥉 Łódzkie (22 firm) - Łódź, PGE Bełchatów
4. Świętokrzyskie (20 firm) 🆕 - Cementownie, górnictwo
5. Wielkopolskie (20 firm) - Poznań, VW

## 🎯 Specjalne segmenty dla filtracji

### Cementownie i wapienniki (najwyższe zapotrzebowanie):
- CEMEX Ożarów, Lafarge Małogoszcz
- Górażdże Cement, Ożarów S.A.
- Wymagania: Filtry workowe dużej wydajności, elektrofiltry

### Kopalnie i kamieniołomy:
- KGHM, JSW, PGG
- Kopalnie wapienia (Morawica, Bukowa, Górno)
- Wymagania: Odpylanie, filtry robocze

### Mleczarnie (higieniczne środowisko):
- Mlekovita, Mlekpol, Piątnica, OSM (Kraków, Starachowice)
- Wymagania: Filtry absolutne, HEPA dla pomieszczeń produkcyjnych

### Galwanizery (ochrona środowiska):
- Galwanika Kraków, Chromowanie Tarnów
- Cynkowania ogniowe, galwanizacja
- Wymagania: Filtracja oparów kąpieli, oczyszczanie powietrza

## Aktualizacja
- **Data utworzenia**: 2025-11-14
- **Wersja**: 1.0
- **Historia aktualizacji**:
  - 2025-11-14: Dodano 35 firm (producenci filtrów, mleczarnie, wodociągi)
  - 2025-11-14: Dodano 20 firm z województwa świętokrzyskiego 🆕
  - 2025-11-14: Dodano 15 firm do małopolskiego ⬆️ (wodociągi, mleczarnie, galwanizery)

**Łącznie: 225 firm w 14 województwach**

## Licencja
Dane przeznaczone do użytku wewnętrznego firmy.
