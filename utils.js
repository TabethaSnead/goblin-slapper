export function renderGoblin(goblin) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    div.classList.add('goblin-div');
    nameEl.classList.add('goblin-name');
    emojiEl.classList.add('goblin-emoji');
    hpEl.classList.add('hpEl');

    nameEl.textContent = goblin.name;
    hpEl.textContent = 'hp: ' + goblin.hp;

    if (goblin.hp === 0) {
        emojiEl.textContent = '🔥';
    } else {
        emojiEl.textContent = '👹';
    }

    div.append(nameEl, emojiEl, hpEl);
    return div;
}
