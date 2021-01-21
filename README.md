# Weather-API
A simple weather app that displays current and future weather conditions.

## Features
* A UV index rating where severity is based on colour.
* Current forecast, and 4 days post forecast.
* Displays up to 3 recent searches in the cards, cycling back through the first one if you exceed 3.

## Reasoning
Utilising multiple API requests to consolidate weather information into one webpage.

## Challenges & Process
1. The layout was just a very basic bootstrap humbotron with three cards underneath, given more time it could be much prettier.
2. I found it difficult to determine whether or not to nest ajax calls within one another, but this ended up working well for me so I left it as is. I suspect it is not good practice to do so in the real world.
3. I struggled a bit with consolidating the local storage within the existing design I had come up with, I think in future I may do that before I create the structure of the calls.

## Link to deployed application
https://bendemic90.github.io/Weather-API/

## Screengrab of deployed application
![Screenshot](https://github.com/bendemic90/Weather-API/blob/main/assets/grab.png)
