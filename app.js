/* Imports */
import { renderGoblin } from './utils.js';
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
        hp: 7,
    },
];

console.log(goblins);
/* Events */
goblinButton.addEventListener('click', () => {
    const input = goblinInput.value;
    const randomGoblin = `goblin  ${Math.floor(Math.random() * 150)}`;
    const randomNumber = Math.ceil(Math.random() * 12);
    const newGoblin = {
        name: input || randomGoblin,
        hp: randomNumber,
    };
    goblins.push(newGoblin);
    displayGoblins();
});

/* Display Functions */
function displayGoblins() {
    addedGoblin.textContent = '';

    for (let goblin of goblins) {
        const newGoblin = renderGoblin(goblin);
        console.log(newGoblin);
        newGoblin.addEventListener('click', () => {
            if (goblin.hp > 0) {
                if (Math.random() > 0.6) {
                    alert('Gandalf Missed the Goblin');
                } else {
                    goblin.hp--;
                    alert('Gandalf hit the Goblin');
                }

                if (Math.random() > 0.5) {
                    alert('The Goblin missed Gandalf');
                } else {
                    gandalfsHP--;
                    alert('Gandalf got hit by one of the Goblins');
                }
            }
            if (goblin.hp === 0) {
                defeatCount++;
            }

            displayGoblins();
            console.log('clicked', goblin.hp);
        });

        gandalfHPel.textContent = gandalfsHP;
        defeatedGoblin.textContent = defeatCount;

        addedGoblin.append(newGoblin);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayGoblins();
