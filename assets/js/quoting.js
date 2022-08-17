const onde = document.querySelector('#quotePlace');

const someRandomQuote = async () => {
  const quotesObj = await fetch('https://programming-quotes-api.herokuapp.com/quotes').then((response) => response.json());
  const r = Math.floor(Math.random() * 500);
  const quoteDaVez = quotesObj[r];
  const p = document.createElement('p');
  p.classList.add('quote');
  p.innerHTML = quoteDaVez.en;
  const pa = document.createElement('p');
  pa.classList.add('author');
  pa.innerHTML = quoteDaVez.author;
  onde.append(p);
  onde.append(pa);
}

someRandomQuote();