import "./index.css";
import React, { useState } from "react";

const quoteData = [
  { text: `“The purpose of our lives is to be happy.”`, author: "Dalai Lama" },
  {
    text: `“Life is what happens when you’re busy making other plans.”`,
    author: "John Lennon",
  },
  { text: `“Get busy living or get busy dying.”`, author: "Stephen King" },
  {
    text: `“You only live once, but if you do it right, once is enough.”`,
    author: "Mae West",
  },
  {
    text: ` “Many of life’s failures are people who did not realize how close they were to success when they gave up.”`,
    author: "Thomas A. Edison",
  },

  {
    text: `"When you have a dream, you've got to grab it and never let go."`,
    author: "— Carol Burnett",
  },

  {
    text: `"Nothing is impossible. The word itself says 'I'm possible!'"`,
    author: "— Audrey Hepburn",
  },

  {
    text: `"There is nothing impossible to they who will try."`,
    author: "— Alexander the Great",
  },

  {
    text: `"The bad news is time flies. The good news is you're the pilot."`,
    author: "— Michael Altshuler",
  },

  {
    text: `"Life has got all those twists and turns. You've got to hold on tight and off you go."`,
    author: "— Nicole Kidman",
  },

  {
    text: `"Keep your face always toward the sunshine, and shadows will fall behind you."`,
    author: "— Walt Whitman",
  },

  {
    text: `"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."`,
    author: "— Amal Clooney",
  },

  {
    text: `"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."`,
    author: "— Duchess Meghan ",
  },

  {
    text: `"I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."`,
    author: "— Taylor Swift",
  },

  {
    text: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    author: "- Winston Churchill",
  },

  {
    text: `"You define your own life. Don't let other people write your script."`,
    author: " — Oprah Winfrey",
  },

  {
    text: `"You are never too old to set another goal or to dream a new dream."`,
    author: "— Malala Yousafzai",
  },

  {
    text: `"At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it."`,
    author: "— Dr. Phil",
  },

  {
    text: `"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life."`,
    author: "— Carrie Ann Moss",
  },

  {
    text: `"For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end."`,
    author: "— Michelle Obama",
  },

  { text: `"Spread love everywhere you go."`, author: "— Mother Teresa" },

  {
    text: `"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."`,
    author: "— Lady Gaga",
  },

  {
    text: `"If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is."`,
    author: "— Gabrielle Bernstein",
  },

  {
    text: `"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."`,
    author: "— Mandy Hale",
  },

  {
    text: ` "You can be everything. You can be the infinite amount of things that people are."`,
    author: "— Kesha ",
  },
];

const Quotebox = () => {
  const getRandomIndex = (max) =>
    Math.round(Math.random() * (quoteData.length - 1) + 0);

  const [quote, setQuote] = useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id="author">{quote.author}</h2>

      <div className="action">
        <button id="new-quote" className="button" onClick={handleNewQuote}>
          New Quote
        </button>

        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

export default Quotebox;
