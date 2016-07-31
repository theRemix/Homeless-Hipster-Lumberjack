const CSE_CX = process.env.CSE_CX || '014606110014447546046:ujfrbkgqpui';
const CSE_API_KEY = process.env.CSE_API_KEY || 'YOUR GOOGLE PLATFORM API KEY';
const FB_OPTIONS = {
  apiKey: process.env.FB_API_KEY || 'YOUR FIREBASE API KEY',
  authDomain: 'homeless-hipster-lumberjack.firebaseapp.com',
  databaseURL: 'https://homeless-hipster-lumberjack.firebaseio.com',
  storageBucket: 'homeless-hipster-lumberjack.appspot.com',
};
const firebase = require('firebase');
const fbApp = firebase.initializeApp(FB_OPTIONS);
const db = fbApp.database();
const rp = require('request-promise');
const EXACT_TERMS = '{{EXACT_TERMS}}';

const CSE_QUERY_URL = `https://www.googleapis.com/customsearch/v1?q=beard&cx=${encodeURIComponent(CSE_CX)}&exactTerms=${EXACT_TERMS}&imgSize=medium&imgType=face&searchType=image&key=${CSE_API_KEY}`;

/*
 * Helpers
 */
const imageFormat = i => ({
  src : i.link,
  width : i.image.width,
  height : i.image.height,
  thumbnail : i.image.thumbnailLink,
  byteSize : i.image.byteSize,
  thumbnailHeight : i.image.thumbnailHeight,
  thumbnailWidth : i.image.thumbnailWidth,
  scores : [{
    createdAt : Date.now(),
    score : 0, // -1 wrong, 0 not scored, 1 correct
    chose : null // lumberjack, hipster, homeless
  }]
});
const getImageResults = data => data.items.map(imageFormat);
const saveToFirebase = type => images => db.ref(type).set(images);

/*
 * Work
 */
const LUMBERJACK = 'lumberjack';
const HIPSTER = 'hipster';
const HOMELESS = 'homeless';

// get lumberjacks
rp(CSE_QUERY_URL.replace(EXACT_TERMS, LUMBERJACK))
  .then(JSON.parse)
  .then(getImageResults)
  .then(saveToFirebase(LUMBERJACK))
  .then( _ =>
    // get hipsters
    rp(CSE_QUERY_URL.replace(EXACT_TERMS, HIPSTER))
  )
  .then(JSON.parse)
  .then(getImageResults)
  .then(saveToFirebase(HIPSTER))
  .then( _ =>
    // get homeless
    rp(CSE_QUERY_URL.replace(EXACT_TERMS, HOMELESS))
  )
  .then(JSON.parse)
  .then(getImageResults)
  .then(saveToFirebase(HOMELESS))
  .then( _ => db.goOffline() )
  .then( _ => console.log('seeding completed') )
  .then( _ => process.exit(0) )
  .catch(console.error);
