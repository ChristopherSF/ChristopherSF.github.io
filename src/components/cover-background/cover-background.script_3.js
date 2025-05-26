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
    for (let i = 0; i < 7; i++) {
        fallingPieces.push(createPiece(canvas));
    }
}

export const preloadAllImages = async () => {
    try {
        const images = await Promise.all(images_pieces_names.map(name => loadImage(`src/assets/chess-pieces-background/${name}.png`)));
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
        x: 70 + Math.random() * (canvas.width - 140),
        y: 70 + Math.random() * (canvas.height - 140),
        image: image,
        opacity: 0,
        size: canvas.width > 1000 ? 50 : 0,
        speed: 0.001 + Math.random() * 0.001,
        direction: Math.random() * 1
    };
}

export const draw = (canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of fallingPieces) {

    ctx.globalAlpha = p.opacity
    ctx.drawImage(p.image, p.x, p.y, p.size, p.size)
    ctx.globalAlpha = 1.0

    if (p.opacity < 1) {
        p.opacity += p.speed
        p.size += 0.1
        p.x -= 0.05
        p.y -= 0.05
    }
    if (p.opacity >= 1) {
        if(p.direction > 0.5) p.x -= 10
        else p.x += 10
        p.size -= 1
        if(p.x < 0 || p.x > canvas.width) Object.assign(p, createPiece(canvas));
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
