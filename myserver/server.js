import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Each entry: keywords to look for, and the reply to give
const responses = [
  {
    keywords: ["hello", "hi", "hey"],
    reply: "Hello. What would you like to ask me?",
  },
  {
    keywords: ["born", "birth"],
    reply: "I was born on 21 April 1926 in Mayfair, London.",
  },
  {
    keywords: ["crowned", "coronation"],
    reply: "I was crowned on 2 June 1953 at Westminster Abbey.",
  },
  {
    keywords: ["died", "death", "passed"],
    reply: "Unfortunately, I died on 8 September 2022 at Balmoral Castle, aged 96.",
  },
  {
    keywords: ["reign", "how long"],
    reply: "I reigned for 70 years, from 1952 to 2022, the longest of any British monarch.",
  },
    {
    keywords: ["bye"],
    reply: "Cheerio",
  },
    {
    keywords: ["funk"],
    reply: "Oh my, thats rude.",
  },
];

const fallback = "Sorry, I don't know about that yet. Try asking when she was born, crowned, or how long she reigned.";

function getReply(text) {
  const lower = text.toLowerCase();
  for (const item of responses) {
    if (item.keywords.some((word) => lower.includes(word))) {
      return item.reply;
    }
  }
  return fallback;
}

app.post("/api/message", (req, res) => {
  const { text } = req.body;
  console.log("Received:", text);
  res.json({ reply: getReply(text) });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});