
// importeer express om het te kunnen gebruiken
import express from 'express'

// importeer de express-xss-sanitizer
import bodyParser from 'body-parser';
import { xss } from 'express-xss-sanitizer';

// Maak een nieuwe express app
const app = express()

// deze code is om xss te voorkomen
app.use(bodyParser.json({ limit: '1kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1kb' }));
app.use(xss());

// Middleware om HTML-tags te verwijderen
app.use((req, res, next) => {
  for (const key in req.body) {
    if (typeof req.body[key] === 'string') {
      req.body[key] = req.body[key].replace(/<\/?[^>]+(>|$)/g, '');
    }
  }
  next();
});

// om fetch te gebruiken voor online zetten
import fetch from 'node-fetch';


// importeer moment om data makkelijk om te kunnen zetten
// import moment from 'moment';

// importeer dotenv
import 'dotenv/config'

// Maak routes met express naar de views & public 
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Stel afhandeling van formulieren in
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// Maak een route voor de index
app.get('/', (request, response) => {
    // haal aangegeven dag op
    
    // const messagesUrl = `https://retoolapi.dev/OH51H5/data` oude api
    // const messagesUrl = `https://retoolapi.dev/kaI0zp/data` oude api
    const messagesUrl = `https://retoolapi.dev/6VuvDE/data`
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD}`

    
    Promise.all([fetchJson(messagesUrl), fetchJson(apodUrl)])
    .then(([messages, apodData]) => {
      response.render('index', {messages: messages, apodData: apodData})
    })
  })

  
// Maak een route voor de index
app.get('/day.ejs', (request, response) => {
  // haal aangegeven dag op
  const chosenDay = request.query.day

  const messagesUrl = `https://retoolapi.dev/6VuvDE/data`
  const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD}&date=${chosenDay}`

// met promise.all kan je meerdere api's fetchen.
  Promise.all([fetchJson(messagesUrl), fetchJson(apodUrl)])
  .then(([messages, apodData]) => {
    response.render('day', {messages: messages, apodData: apodData, chosenDay: chosenDay})
  })
 
})



// om te posten

app.post('/day.ejs', (req, res) => {

  const urlRetoolApi = "https://retoolapi.dev/6VuvDE/data"

  // om de juiste datum van de post aan reactie te koppelen
  const chosenDay = req.query.day 
  req.body.Date = chosenDay;

  // Om de huidige datum van vandaag aan de reactie te koppelen
  const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  req.body.Today = new Date().toLocaleString('en-US', options);

  postJson(urlRetoolApi, req.body, req.body.Date, req.body.Today).then((data) => {


    console.log(data.id)
    if (data.id) {
      
      res.redirect(`/day.ejs?day=${chosenDay}`) 
      console.log('succes')
    } else {
      console.log('geen succes')
      res.render('new')
    }
  })
})


app.post('/', (req, res) => {

  const urlRetoolApi = "https://retoolapi.dev/6VuvDE/data"

  // om de juiste datum aan reactie te koppelen
  const chosenDay = req.query.day 
  req.body.Date = chosenDay;

 // Om de huidige datum van vandaag aan de reactie te koppelen
 const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
 req.body.Today = new Date().toLocaleString('en-US', options);

  postJson(urlRetoolApi, req.body, req.body.Date, req.body.Today).then((data) => {


    // console.log(data.id)
    if (data.id) {
      
      res.redirect(`/day.ejs?day=${chosenDay}`) 
      // console.log('succes')
    } else {
      // console.log('geen succes')
      res.render('new')
    }
  })
})

// Stel het poortnummer in en start express
// app.set('port', process.env.PORT || 8000)
const PORT = process.env.PORT || 8000;
// app.listen(app.get('port'), function () {
//   console.log(`Application started on http://localhost:${app.get('port')}`)
// })
app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});


// definieer de fetchJson functie
async function fetchJson(url) {
return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

// om te kunnen posten heb je de postjson functie nodig

export async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}