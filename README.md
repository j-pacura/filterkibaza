# Baza Danych Firm - Filtracja i Systemy Przemysłowe

## Opis
Kompleksowa baza danych 155 firm i potencjalnych klientów dla firmy produkującej i sprzedającej szeroko pojętą filtrację.

## Struktura danych

### Pliki
- `filterkibaza_database.json` - Pełna baza z grupowaniem i statystykami
- `companies_simple.json` - Uproszczona wersja (tylko lista firm)

### Pola w bazie danych
- **id**: Unikalny identyfikator firmy
- **name**: Nazwa firmy
- **region**: Województwo (np. dolnośląskie, śląskie, mazowieckie)
- **city**: Miasto
- **industry**: Branża (np. motoryzacja, chemia, energetyka)
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
- **mazowieckie**: 30 firm
- **małopolskie**: 28 firm
- **łódzkie**: 20 firm
- **podkarpackie**: 18 firm
- **opolskie**: 17 firm
- **wielkopolskie**: 16 firm
- **dolnośląskie**: 14 firm
- **śląskie**: 11 firm
- **lubuskie**: 1 firm

### Podział według typu:
- **klient**: 103 firm
- **potencjalny klient**: 30 firm
- **partner**: 22 firm

### Top 10 branż:
- **motoryzacja**: 16 firm
- **energetyka**: 13 firm
- **chemia**: 12 firm
- **spożywczy**: 9 firm
- **farmacja**: 8 firm
- **hvac**: 7 firm
- **woda**: 5 firm
- **spożywcza**: 4 firm
- **elektrotechnika**: 4 firm
- **it**: 4 firm


## Kategorie firm

### 1. Klienci (103 firm)
Firmy, które mogą być bezpośrednimi odbiorcami produktów filtracyjnych:
- Przemysł ciężki (hutnictwo, górnictwo, energetyka)
- Motoryzacja (fabryki samochodów, części)
- Chemia i petrochemia
- Farmacja
- Spożywcza

### 2. Potencjalni klienci (30 firm)
Firmy z potencjałem do nawiązania współpracy

### 3. Partnerzy (22 firm)
Dystrybutorzy i specjaliści w zakresie HVAC, filtracji:
- Systemy wentylacji i klimatyzacji
- Filtry przemysłowe
- Oczyszczanie wody
- Technologie lakiernicze

## Wykorzystanie

### Python
```python
import json

with open('filterkibaza_database.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Pobierz wszystkie firmy
companies = data['companies']

# Filtruj firmy z województwa śląskiego
slaskie = data['by_region']['śląskie']

# Znajdź firmy z branży motoryzacyjnej
automotive = [c for c in companies if 'motoryzacja' in c.get('industry', '').lower()]
```

### JavaScript
```javascript
fetch('filterkibaza_database.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Total companies: ${data.metadata.total_companies}`);
    // Użyj danych...
  });
```

## Aktualizacja
Data utworzenia: 2025-11-14
Wersja: 1.0

## Licencja
Dane przeznaczone do użytku wewnętrznego firmy.
