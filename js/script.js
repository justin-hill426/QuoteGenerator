/******************************************
Random Quote Generator
******************************************/

//Generate Quotes Array
const quotes = [
  {
    quote : "Simplicity is the Ultimate Sophistication",
    source : "Leonardo Da Vinci",
    tag : "Simplicity"
  },
  {
    quote : "The cure for boredom is curiosity. There is no cure for curiosity.",
    source : "Ellen Parr",
    tag : "Passion"
  },
  {
    quote : "Try Not to become a man of success but rather try to become a man of value.",
    source : "Albert Einstein",
    tag : "Authenticity"
  },
  {
    quote : "Anything Negative-pressure, challenges--is all an opportunity for me to rise",
    source : "Kobe Bryant",
    tag : "Confidence"
  },
  {
    quote : "If you want to find the secrets of the universe think in terms of energy, frequency, and vibration.",
    source : "Nikola  Tesla",
    tag : "Passion"
  },
  {
    quote : "Love all God’s creation, the whole and every grain of sand in it. Love every leaf, every ray of God’s light. Love the animals, love the plants, love everything. If you love everything, you will perceive the divine mystery in things. Once you perceive it, you will begin to comprehend it better every day. And you will come at last to love the whole world with an all-embracing love.",
    source : "Fyodor Dostoevsky",
    citation: "The Brothers Karamazov",
    year: 1880,
    tag: "Love"
  },
  {
    quote : "This is the real secret to life—to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
    source : "Alan Watts",
    tag : "Focus"
  },
  {
    quote : "If you go out looking for friends, you’re going to find they are very scarce. If you go out to be a friend, you’ll find them everywhere.",
    source : "Zig Ziglar",
    tag : "Social"
  },
  {
    quote : "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    source : "Marcus Aurelius",
    citation: "Meditations",
    tag: "Passion"
  },
  {
    quote : "Some People want it to happen, some wish it would happen, others make it happen.",
    source : "Michael Jordan",
    tag : "Confidence"
  },
  {
    quote : "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
    source : "Warren Buffett",
    tag : "Investing"
  },
  {
    quote : "The way to happiness: keep your heart free from hate, your mind from worry. Live simply, expect little, give much. Fill your life with love. Scatter sunshine. Forget self, think of others. Do as you would be done by.",
    source : "Norman Vincent Peale",
    citation: "The Power of Positive Thinking",
    tag : "Optimism"
  },
  {
    quote : "For me, great algorithms are the poetry of computation. Just like verse, they can be terse, allusive, dense, and even mysterious. But once unlocked, they cast a brilliant new light on some aspect of computing.",
    source : "Francis Sullivan",
    tag : "Computer Science"
  },
  {
    quote : "You can make more friends in two months by becoming interested in other people than you can in two years be trying to get other people interested in you.",
    source : "Dale Carnegie",
    citation: "How to Win Friends and Influence People",
    tag : "Social"
  },
  {
    quote : "One day I will find the right words, and they will be simple.",
    source : "Jack Kerouac",
    tag : "Simplicity"
  },
  {
    quote : "A great man shows his greatness, by the way he treats little men.",
    source : "Thomas Carlyle",
    tag : "Simplicity"
  },
  {
    quote : "If you can’t explain it simply you don’t understand it well enough.",
    source : "Albert Einstein",
    tag : "Simplicity"
  },
]

/**
 * Returns a random quote from the quotes array
 *
 */
const getRandomQuote = quotes => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


/**
 * Print the randomly generated quote
 */
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
  if(quote.hasOwnProperty('tag')) {
    html += `<span class="tag">${quote.tag}</span>`;
  }
  html += "</p>"
  document.getElementById('quote-box').innerHTML = html;
  random_bg_color();
};

/**
 * Changes the background color to a randomly generated RGB value
 *
 */
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}

/**
 * Starts an interval of 10 seconds to automatically print a new quote
 *
 */
function timing() {
  setInterval(printQuote, 10000);
}

/***
 * click event listener for the print quote button
***/
timing();
document.getElementById('load-quote').addEventListener("click", printQuote, false);
