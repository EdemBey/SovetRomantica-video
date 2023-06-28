# SovetRomantica-video
Получение информации и ссылки на видео с сайта SovetRomantica

Парсинг сайтов с плеером SovetRomantica для получения ссылок на эпизоды и прямые ссылки на видеофайл `m3u8` 
## Установка
```bash
git clone https://github.com/EdemBey/SovetRomantica-video
cd SovetRomantica-video
npm install
```
## Запуск

### Через nodemon
```bash
npx run dev
```

### Через scripts
```bash
npm run start
```


## Методы

## • get-anime
Парсинг ссылки
```js
GET /get-anime
```
### Примеры запросов
```
/get-anime?link=https://sovetromantica.com/anime/1407
```
```
/get-anime?link=https://yummyani.me/catalog/item/doktor-stoun-noviy-mir
```
### Примеры ответов
```json
[
  {
    "embed": "https://sovetromantica.com/embed/episode_1407_1-dubbed",
    "episode_anime": 1407,
    "episode_count": 1,
    "episode_id": 27214,
    "episode_type": 1,
    "episode_view": 237
  },
  {
    "embed": "https://sovetromantica.com/embed/episode_1407_2-dubbed",
    "episode_anime": 1407,
    "episode_count": 2,
    "episode_id": 27264,
    "episode_type": 1,
    "episode_view": 69
  }
]
```

## • get-video
Получение ссылок на видео
```js
GET /get-video
```
### Примеры запросов
```
/get-video?link=https://sovetromantica.com/embed/episode_1407_1-dubbe
```

### Примеры ответов
```json
{
  "url": "https://scp2.sovetromantica.com/anime/1407_dr-stone-new-world/episodes/dubbed/episode_1/episode_1.m3u8"
}
```

