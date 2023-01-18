/* Imports */

/* Get DOM Elements */
const defeatedGoblin = document.getElementById('defeated-goblin');
const goblinInput = document.getElementById('goblin-input');
const goblinButton = document.getElementById('goblin-button');
const addedGoblin = document.getElementById('added-goblin');
const gandalfHPel = document.getElementById('gandalf-hp-span');
const gandalfimg = document.getElementById('gandalf-img');

/* State */
let gandalfsHP = 20;
let defeatCount = 0;
const goblins = [
    {
        name: 'Azog',
        hp: 11,
    },
    {
        name: 'Bolg',
        hp: 13,
    },
    {
        name: 'Golfimbul',
        hp: 10,
    },
];

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
