const quote = document.querySelector("#quote span:first-child")
const author =document.querySelector("#quote span:last-child") 
const quotes = [
    {quote: "The way you do Anything is the way you do everything",
     author: "Tom Waits",
    },
    {quote: "Our outer world will always be a reflection of our inner world",
     author: "Hal Elrod",
    },
    {quote: "You must allow yourself to start thinking BIGGER and acting BOLDER with regards to what’s possible of you",
     author: "Hal Elrod",
    },
    {quote: "You\'re not supposed to figure out what your purpose is. You get to make it up, create it, decide what you want it to be",
     author: "Hal Elrod",
    },
    {quote: "Everyone was once a beginner",
     author: "Sameer Abdulla",
    },
    {quote: "Don\'t wait. Start now",
     author: "Hal Elrod",
    },
    {quote: "live as if you were to die tomorrow. learn as if you were to live forever",
    author: "Mahatma Gandhi",
    },
    {quote: "Don\'t let yesterday take up too much of today ",
        author: "Will Rogers",
    },
    {quote: "Be yourself. Everyone else is already taken",
        author: "Oscar Wilde",
    },
    {quote: "You will face many defeats in life but never let yourself be defeated",
        author: "Maya Angelou",
    }
    ]
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText=todaysQuote.quote;
author.innerText=`- ${todaysQuote.author}`;
