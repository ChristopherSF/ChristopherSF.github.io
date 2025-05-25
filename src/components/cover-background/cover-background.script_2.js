export const characters = [
    '0',
    '1'
];
export const fallingCharacters = [];

export const init = (canvas) => {
    for (let i = 0; i < 50; i++) {
        fallingCharacters.push(createCharacter(canvas));
    }
}

export const createCharacter = (canvas) => {
    return {
        x: Math.random() * canvas.width,
        y: -30,
        speed: 0 + Math.random() * 1,
        size: 24 + Math.random() * 16,
        character: characters[Math.floor(Math.random() * characters.length)],
        opacity: 0 + Math.random() * 0.5,
      };
}

export const draw = (canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of fallingCharacters) {

    ctx.font = `${p.size}px Poppins`;
    ctx.fillStyle = `rgba(0, 181, 0, ${p.opacity})`;
    ctx.fillText(p.character, p.x, p.y);

    p.y += p.speed;

    if (p.y > canvas.height) {
      Object.assign(p, createCharacter(canvas));
      p.y = -30;
    }
  }

  requestAnimationFrame(() => draw(canvas, ctx));
}

export const addResizeListener = (canvas) => {
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
