/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quotes = [
  {
    quote : "Simplicity is the Ultimate Sophistication",
    source : "Leonardo Da Vinci",
  },
  {
    quote : "The cure for boredom is curiosity. There is no cure for curiosity.",
    source : "Ellen Parr",
  },
  {
    quote : "Try Not to become a man of success but rather try to become a man of value.",
    source : "Albert Einstein",
  },
  {
    quote : "Anything Negative-pressure, challenges--is all an opportunity for me to rise",
    source : "Kobe Bryant",
  },
  {
    quote : "If you want to find the secrets of the universe think in terms of energy, frequency, and vibration.",
    source : "Nikola  Tesla",
  },
  {
    quote : "Love all God’s creation, the whole and every grain of sand in it. Love every leaf, every ray of God’s light. Love the animals, love the plants, love everything. If you love everything, you will perceive the divine mystery in things. Once you perceive it, you will begin to comprehend it better every day. And you will come at last to love the whole world with an all-embracing love.",
    source : "Fyodor Dostoevsky",
    citation: "The Brothers Karamazov",
    year: 1880
  },
  {
    quote : "This is the real secret to life—to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
    source : "Alan Watts",
  },
  {
    quote : "If you go out looking for friends, you’re going to find they are very scarce. If you go out to be a friend, you’ll find them everywhere.",
    source : "Zig Ziglar",
  },
  {
    quote : "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    source : "Marcus Aurelius",
    citation: "Meditations"
  },
  {
    quote : "Some People want it to happen, some wish it would happen, others make it happen.",
    source : "Michael Jordan",
  },




]



/***
 * `getRandomQuote` function
***/

const getRandomQuote = quotes => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


/***
 * `printQuote` function
***/

const printQuote = () => {
  let html = "";
  const quote = getRandomQuote(quotes);
  html += `<p class = "quote">${quote.quote}</p>`;
  html += `<p class = "source">${quote.source}`;
  if(quote.hasOwnProperty('citation')) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if(quote.hasOwnProperty('year')) {
    html += `<span class="year">${quote.year}</span>`;
  }
  html += "</p>"
  document.getElementById('quote-box').innerHTML = html;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
