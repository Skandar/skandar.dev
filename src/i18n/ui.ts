export type Language = keyof typeof languagesWithLabels;

export const locales = ["en_US", "ru_RU", "uk_UA", "ro_MD"];

export const languagesWithLabels = {
  en: "English",
  ru: "Русский",
  uk: "Українська",
  ro: "Română",
} as const;

/** List of languages available in project */
export const languages = Object.keys(languagesWithLabels) as Array<Language>;

export const DEFAULT_LANG = "en";

const common = {
  "subscribe.rss": "RSS",
  "subscribe.github": "GitHub",
  "subscribe.linkedin": "LinkedIn",
  "subscribe.bluesky": "Bluesky",
  "subscribe.telegram.title": "Telegram",
  "subscribe.telegram.url": "https://t.me/skandar_dev",
  "meta.site": "skandar.dev",
  "meta.description": "Welcome to my website!",
  "meta.author": "Aleksandr Slugin",
};

export const ui = {
  en: {
    ...common,

    "meta.description":
      "Articles about front-end, web development, CSS, JS, React, and more",

    "nav.home": "Home",
    "nav.articles": "Articles",

    "home.last-articles.title": "Last articles",

    "articles.title": "Articles",
    "tags.title": "Tags",
    "tagPage.title": "Articles with tag",

    "footer.language": "Language",

    "more-links.title": "More links",
    "more-links.about": "About me",
    "more-links.about-description": "Information about me",

    "share.title": "Share this article with friends",

    "theme.title": "Color theme",
    "theme.label": "Color theme switcher",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    "subscribe.title": "Subscribe",

    "article.tags": "Tags",
    "article.publishedTime": "Published",
    "article.modifiedTime": "Updated",
    "article.footer.title": "Found a mistake or inaccuracy?",
    "article.footer.edit": "Edit article",
    "article.footer.issue": "Create Issue",
    "article.footer.discussions": "Discuss in Discussions",

    "404.page-not-found": "Page not found",
    "404.title": "404 - Page not found",
    "404.description":
      "Page not found. Maybe there is a mistake in the link or the page was deleted.",
  },

  ru: {
    ...common,

    "meta.description":
      "Статьи про фронтенд, веб-разработку, CSS, JS, React и многое другое",

    "nav.home": "Главная",
    "nav.articles": "Статьи",

    "home.last-articles.title": "Последние статьи",

    "articles.title": "Статьи",
    "tags.title": "Теги",
    "tagPage.title": "Статьи по тегу",

    "footer.language": "Язык",

    "more-links.title": "Больше ссылок",
    "more-links.about": "Обо мне",
    "more-links.about-description": "Информация обо мне",

    "share.title": "Поделись статьёй с друзьями",

    "theme.title": "Цветовая тема",
    "theme.label": "Переключатель цветовой темы",
    "theme.light": "Светлая",
    "theme.dark": "Тёмная",
    "theme.system": "Системная",

    "subscribe.title": "Подпишись",

    "article.tags": "Теги",
    "article.publishedTime": "Опубликовано",
    "article.modifiedTime": "Обновлено",
    "article.footer.title": "Нашёл ошибку или неточность?",
    "article.footer.edit": "Поправь статью",
    "article.footer.issue": "Создай Issue",
    "article.footer.discussions": "Обсуди в Discussions",

    "404.page-not-found": "Страница не найдена",
    "404.title": "404 - Страница не найдена",
    "404.description":
      "Страница не найдена. Возможно в ссылке ошибка или страница была удалена.",
  },

  uk: {
    ...common,

    "meta.description":
      "Статті про фронтенд, веб-розробку, CSS, JS, React та багато іншого",

    "nav.home": "Головна",
    "nav.articles": "Статті",

    "home.last-articles.title": "Останні статті",

    "articles.title": "Статті",
    "tags.title": "Теги",
    "tagPage.title": "Статті за тегом",

    "footer.language": "Мова",

    "more-links.title": "Більше посилань",
    "more-links.about": "Про мене",
    "more-links.about-description": "Інформація про мене",

    "share.title": "Поділись статтею з друзями",

    "theme.title": "Кольорова тема",
    "theme.label": "Перемикач кольорової теми",
    "theme.light": "Світла",
    "theme.dark": "Темна",
    "theme.system": "Системна",

    "subscribe.title": "Підпишись",

    "article.tags": "Теги",
    "article.publishedTime": "Опубліковано",
    "article.modifiedTime": "Оновлено",
    "article.footer.title": "Знайшов помилку або неточність?",
    "article.footer.edit": "Виправ статтю",
    "article.footer.issue": "Створи Issue",
    "article.footer.discussions": "Обговори в Discussions",

    "404.page-not-found": "Сторінка не знайдена",
    "404.title": "404 - Сторінка не знайдена",
    "404.description":
      "Сторінка не знайдена. Можливо в посиланні помилка або сторінка була видалена.",
  },

  ro: {
    ...common,

    "meta.description":
      "Articole despre front-end, dezvoltare web, CSS, JS, React și multe altele",

    "nav.home": "Acasă",
    "nav.articles": "Articole",

    "home.last-articles.title": "Ultimele articole",

    "articles.title": "Articole",
    "tags.title": "Tags",
    "tagPage.title": "Articole cu tag-ul",

    "footer.language": "Limbă",

    "more-links.title": "Mai multe link-uri",
    "more-links.about": "Despre mine",
    "more-links.about-description": "Informația despre mine",

    "share.title": "Împărtășește articolul cu prietenii",

    "theme.title": "Culoarea temei",
    "theme.label": "Comutator de temă de culoare",
    "theme.light": "Deschisă",
    "theme.dark": "Întunecată",
    "theme.system": "Sistemului",

    "subscribe.title": "Abonează-te",

    "article.tags": "Tags",
    "article.publishedTime": "Publicat",
    "article.modifiedTime": "Actualizat",
    "article.footer.title": "Ai găsit o greșeală sau o inexactitate?",
    "article.footer.edit": "Editează articolul",
    "article.footer.issue": "Creează Issue",
    "article.footer.discussions": "Discută în Discussions",

    "404.page-not-found": "Pagina nu a fost găsită",
    "404.title": "404 - Pagina nu a fost găsită",
    "404.description":
      "Pagina nu a fost găsită. Poate că există o greșeală în link sau pagina a fost ștearsă.",
  },
} as const;
