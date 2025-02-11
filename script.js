const snowContainer = document.querySelector('.snow');
const numberOfFlakes = 40;

const snowflakeCharacters = ['❄', '❅', '❆'];

for (let i = 0; i < numberOfFlakes; i++) {
    const flake = document.createElement('span');
    flake.classList.add('flake');
    flake.textContent = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Slower fall
    flake.style.animationDelay = `${Math.random() * 5}s`;
    flake.style.opacity = Math.random();
    flake.style.fontSize = `${Math.random() * 5 + 10}px`; // Varying sizes
    snowContainer.appendChild(flake);
}

function createHeartFragment() {
    const fragment = document.createElement('div');
    fragment.className = 'heart-fragment';

    const startX = Math.random() * window.innerWidth;
    const endX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
    const endY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 360;
    const duration = 2 + Math.random() * 2;

    fragment.style.setProperty('--start-x', `${startX}px`);
    fragment.style.setProperty('--end-x', `${endX}px`);
    fragment.style.setProperty('--end-y', `${endY}px`);
    fragment.style.setProperty('--rotation', `${rotation}deg`);
    fragment.style.setProperty('--float-duration', `${duration}s`);
    const colors = [
        'rgba(255, 105, 180, 0.8)', 
        'rgba(255, 20, 147, 0.8)',  
        'rgba(255, 0, 0, 0.8)',    
        'rgba(255, 182, 193, 0.8)',  
        'rgba(255, 69, 0, 0.8)'  
    ];
    fragment.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(fragment);

    setTimeout(() => {
        fragment.remove();
    }, duration * 1000);
}

function startHeartAnimation() {
    for(let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeartFragment();
        }, i * 100);
    }

    setInterval(() => {
        createHeartFragment();
    }, 300);
}

window.addEventListener('load', startHeartAnimation);
const ry = document.getElementById("myry");
const img = document.getElementById("profile-picture");
const ryImg = document.getElementById("ryImage");
const span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    ry.style.display = 'flex';
    ryImg.src = this.src;
}

span.onclick = function() {
    ry.style.display = 'none';
}

ry.onclick = function(event) {
    if (event.target === ry) {
        ry.style.display = 'none';
    }
}
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.key === 'c' || event.key === 'C')) {
        event.preventDefault();
    }
});