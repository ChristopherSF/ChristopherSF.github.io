const images_pieces_names = [
    'pawn_b',
    'pawn_w',
    'knight_b',
    'knight_w',
    'bishop_b',
    'bishop_w',
    'rook_b',
    'rook_w',
    'king_b',
    'king_w',
    'queen_b',
    'queen_w'
];
const fallingPieces = [];

var load_images = [];

export const init = (canvas) => {
    for (let i = 0; i < 10; i++) {
        fallingPieces.push(createPiece(canvas));
    }
}

export const preloadAllImages = async () => {
    try {
        const images = await Promise.all(images_pieces_names.map(name => loadImage(`src/assets/chess-background-pieces/${name}.png`)));
        load_images = images
    } catch (err) {
        console.error("One or more images failed to load:", err)
    }
};

export const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = "Anonymous"
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error(`Failed to load: ${src}`))
        img.src = src
    });
}

export const createPiece = (canvas) => {

    const image_index = Math.floor(Math.random() * load_images.length)
    const image = load_images[image_index]

    return {
        x: Math.random() * canvas.width,
        y: -50,
        speed: 0.5 + Math.random() * 0.5,
        size: 30 + Math.random() * 30,
        image: image,
        opacity: 0.5 + Math.random() * 0.5,
    };
}

export const draw = async (canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of fallingPieces) {

    ctx.globalAlpha = p.opacity
    ctx.drawImage(p.image, p.x, p.y, p.size, p.size)
    ctx.globalAlpha = 1.0

    p.y += p.speed;

    if (p.y > canvas.height) {
      Object.assign(p, await createPiece(canvas));
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
