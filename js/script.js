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
  html += `<p class = "source">${quote.source}</p>`;
  document.getElementById('quote-box').innerHTML = html;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
