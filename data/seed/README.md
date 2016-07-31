# Seed script

for Homeless Hipster Lumberjack

## Configure

```
cp .env-sample .env
```

## Run script

_install deps first_

```
npm run seed
```

## Example cse response

```
{
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com..."
 },
 "queries": {
  "request": [
   {
     ...
   }
  ],
  "nextPage": [
   {
     ...
   }
  ]
 },
 "context": {
  "title": "HHL"
 },
 "searchInformation": {
   ...
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Style lumberjack. Woodcutter with a beard and mustache, wearing a ...",
   "htmlTitle": "Style \u003cb\u003elumberjack\u003c/b\u003e. Woodcutter with a beard and \u003cb\u003emustache\u003c/b\u003e, wearing a ...",
   "link": "https://t3.ftcdn.net/jpg/01/06/99/70/160_F_106997015_gXW2FiHvYJotBkbziNEkPIovBVd1yRXU.jpg",
   "displayLink": "www.fotolia.com",
   "snippet": "Style lumberjack.",
   "htmlSnippet": "Style \u003cb\u003elumberjack\u003c/b\u003e.",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.fotolia.com/id/106997032",
    "height": 107,
    "width": 160,
    "byteSize": 7887,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0daiJI53I8guNxG8dHxpZ83V0LQucQlaseRP6f85BF4Pp7MzcI7sg9A",
    "thumbnailHeight": 66,
    "thumbnailWidth": 98
   }
  },
  ...
  ]
}
```
