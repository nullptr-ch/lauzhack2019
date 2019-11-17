# Micropinion

Bring microdemocracy to everyone, using the blockchain!

This project tackles the blockchain application challenge from **AdNovum**, for LauzHack 2019.

_By team nullptr_

## Inspiration

This app aims to bridge the current democratic gap at local scale. Because giving your opinion is essential to a working society, we decided to tackle this problem using blockchain, to provide a trustless solution for everyone to use.

## What it does

The web application allows any user to create polls, view which are relevant to them, choose their preferred outcome, and finally view the results. The results are implemented using partial [instant-runoff voting](https://en.wikipedia.org/wiki/Instant-runoff_voting) system.

The implementation of the vote counting algorithm is complete and functional, as can be seen on the provided screenshot.

## How we built it

The app was built using the Quasar framework, an overlay of Vue.js. We decided that it was the best alternative so that the website would be easily portable for mobile phones and also usable on desktop computers.

We used the smart-contract capabilites of the Ethereum network to implement our trustless application. Events are used to record the opening of new polls and the voting of each user.

## Challenges we ran into

Before coming to this event, we were complete novices in everything related to blockchain. We took this opportunity to deepen our understanding of the topic, and to try to implement a real-world application.

We were unable to connect our application to the blockchain for a very long time. The implementation of the smart contract and events was complete quite early, and the application was ready to receive real data and communicate with the network. However, we still missed this all-important link, namely the parsing of the raw data of the events, and their dispatching to the application.

## Accomplishments that we're proud of

We have come quite far regarding where we started, knowing (almost) absolutely nothing, to implementing such an application. We are proud of having taken this opportunity to learn from the grounds up about a current topic in computer science.

By being only 2 in the team, we are also quite proud of having done that all by ourselves.

## What we learned

We learned how to implement smart contracts using solidity, and how to communicate and exchange data with the blockchain from a complex JavaScript framework. Being (also) a total novice in Javascript (at least for half of the group), this was also very challenging to learn.

## What's next for Micropinions

We originally thought of adding a geographical aspect to the polls - this was indeed the starting idea, "geo-polls". However, due to the time constraints, we were not able to even think about implementing it.
