# Google Analytics Setup Guide

## Настройка Google Analytics

### 1. Получите Tracking ID

1. Перейдите на https://analytics.google.com/
2. Создайте аккаунт или войдите в существующий
3. Создайте новое свойство (Property) для вашего сайта
4. Скопируйте Measurement ID (формат: `G-XXXXXXXXXX`)

### 2. Настройте переменные окружения

Создайте файл `.env.local` в корне проекта `interior-design/`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Замените `G-XXXXXXXXXX` на ваш реальный Measurement ID.

### 3. Проверка работы

1. Запустите проект: `npm run dev`
2. Откройте сайт в браузере
3. При первом посещении появится Cookie Banner
4. Нажмите "Accept" для согласия на использование cookies
5. Google Analytics начнет отслеживать посещения

### 4. GDPR Compliance

- Cookie Banner появляется автоматически при первом посещении
- Google Analytics загружается только после согласия пользователя
- Согласие сохраняется в cookies на 365 дней
- Пользователь может отозвать согласие, очистив cookies

### 5. Отслеживание событий

Для отслеживания кастомных событий используйте функцию `event` из `lib/gtag.js`:

```javascript
import { event } from '../lib/gtag';

// Пример отслеживания клика на кнопку
event({
  action: 'click',
  category: 'Button',
  label: 'Contact Form Submit',
  value: 1
});
```

## Структура файлов

- `lib/gtag.js` - утилиты для работы с Google Analytics
- `lib/cookies.js` - утилиты для работы с cookies
- `components/ui/GoogleAnalytics/GoogleAnalytics.jsx` - компонент загрузки GA
- `components/ui/CookieBanner/CookieBanner.jsx` - баннер согласия на cookies

