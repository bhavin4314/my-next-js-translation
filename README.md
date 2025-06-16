
# My Next.js Translation App

This is a demo project showcasing internationalization (i18n) using `next-intl` in a Next.js application. It demonstrates how to change languages dynamically **without** localized routing.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-intl](https://next-intl-docs.vercel.app/) for i18n
- [shadcn/ui](https://ui.shadcn.com/) components
- [Tailwind CSS](https://tailwindcss.com/)

## 📂 Folder Structure

```
.
├── app/
│   ├── layout.tsx         # Root layout with next-intl provider
│   └── page.tsx           # Home page with translation
├── components/
│   └── language-changer.tsx  # Dropdown to change language
├── i18n/
│   ├── config.ts          # Locale config
│   └── request.ts         # next-intl provider setup
├── messages/
│   ├── en.json
│   └── fr.json
```

## 🌐 Supported Languages

- English (`en`)
- French (`fr`)

## ✨ Features

- Language switcher with dropdown
- Language switching **without route-based localization**
- Translation strings managed with JSON files

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/bhavin4314/my-next-js-translation.git
cd my-next-js-translation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3003](http://localhost:3003) to see the app in action.

## 🔄 Change Language

Use the language dropdown in the header to switch between English and Hindi. The app updates the translations in-place without requiring a route change.

## 📦 Build

```bash
npm build
npm start
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).