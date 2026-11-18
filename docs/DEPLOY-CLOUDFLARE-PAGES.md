# Деплой на Cloudflare Pages (*.pages.dev)

## Что уже в репозитории

- `public/_redirects` — SPA fallback для React Router (`/* → index.html`)
- Сборка: `npm run build` → папка `dist`

## Первый деплой (GitHub)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Авторизация GitHub → репозиторий `sergeyWasiliev/project_module3_react`.
3. **Build settings:**

   | Поле | Значение |
   |------|----------|
   | Production branch | `main` (или твоя ветка) |
   | Framework preset | Vite |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

4. **Environment variables** (Settings → Environment variables, Production):

   | Name | Value |
   |------|--------|
   | `NODE_VERSION` | `20` |

5. **Save and Deploy**.

После билда сайт будет на `https://<project-name>.pages.dev`.

## Обновления

Каждый `git push` в production-ветку запускает новый деплой автоматически.

## Проверка локально

```bash
npm run build
npm run preview
```

Открой `http://localhost:4173/search-results` — страница должна открываться без 404.

## Кастомный поддомен (опционально)

Pages → твой проект → **Custom domains** → добавь свой домен или смени имя проекта в настройках.