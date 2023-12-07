console.log("Day 7");

import path from "path";
import { fileURLToPath } from "url";
import * as tools from "../../tools/tools.js";
import Set from "set";
import { count } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const winning = [
  "High Card",
  "One Pair",
  "Two Pair",
  "Three of a Kind",
  "Full House",
  "Four of a Kind",
  "Five of a Kind",
];

function cardValue(card) {
  switch (card) {
    case "T":
      return 10;
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    case "A":
      return 14;
  }
  return parseInt(card);
}

function countCards(card, hand) {
  let count = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == card) count++;
  }
  return count;
}

function rankHand(hand) {
  let rank = -1;
  const handArray = hand.split("").sort();
  const mySet = new Set(handArray);
  let set = mySet.get();
  const size = mySet.size();
  // Five of a Kind
  if (size == 1) {
    rank = 6;
  } else if (size == 2) {
    // Four of a Kind
    // Full house
    for (let card of mySet.get()) {
      let count = countCards(card, handArray);
      if (count == 1 || count == 4) {
        rank = 5;
      } else {
        rank = 4;
      }
    }
  } else if (size == 3) {
    // Three of a Kind
    // Two Pair
    let result = [];
    for (let card of mySet.get()) {
      let count = countCards(card, handArray);
      result.push(count);
    }
    if (result.indexOf(3) >= 0) {
      rank = 3;
    } else {
      rank = 2;
    }
  } else if (
    // One Pair
    size == 4
  ) {
    rank = 1;
  }
  // High Card 1
  else {
    rank = 0;
  }
  return rank;
}

function process(array) {
  let hands = [];
  console.log("Instruction length =", array.length);
  for (const line of array) {
    const hand = line.split(" ")[0];
    const bid = line.split(" ")[1];
    const rank = rankHand(hand);
    hands.push({ hand: hand, bid: bid, rank: rank, name: winning[rank] });
  }
  let ranked = hands.sort(function (a, b) {
    if (a.rank > b.rank) {
      return -1;
    } else if (a.rank < b.rank) {
      return 1;
    } else {
      for (let i = 0; i < a.hand.length; i++) {
        const aV = cardValue(a.hand[i]);
        const bV = cardValue(b.hand[i]);
        if (aV > bV) {
          return -1;
        } else if (aV < bV) {
          return 1;
        }
      }
      return 0;
    }
  });
  console.log(ranked.length);
  let total = 0;
  const totalLen = ranked.length;
  for (let i = 0; i < totalLen; i++) {
    total += (totalLen - i) * parseInt(ranked[i].bid);
    console.log(total);
  }
  console.log("Total ", total);
}

// const filename = ["test.txt"];
const filename = ["input.txt"];

for (const current of filename) {
  const array = tools.readData(path.join(__dirname, current));
  process(array);
}
