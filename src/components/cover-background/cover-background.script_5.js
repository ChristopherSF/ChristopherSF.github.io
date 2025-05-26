const images_langs_frameworks_names = [
    'angular',
    'dart',
    'django',
    'flutter',
    'java',
    'js',
    'kotlin',
    'laravel',
    'mysql',
    'nodejs',
    'php',
    'python',
    'react',
    'ruby',
    'springboot',
    'swift',
    'ts',
    'vue'
];
const showedImages = [];

var load_images = [];

export const init = (canvas) => {
    for (let i = 0; i < 5; i++) {
        showedImages.push(createImage(canvas));
    }
}

export const preloadAllImages = async () => {
    try {
        const images = await Promise.all(images_langs_frameworks_names.map(name => loadImage(`/lang-frameworks-background/${name}.png`)));
        load_images = images
    } catch (err) {
        console.error("One or more images failed to load:", err)
    }
};

export const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        //img.crossOrigin = "Anonymous"
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error(`Failed to load: ${src}`))
        img.src = src
    });
}

export const createImage = (canvas) => {

    const image_index = Math.floor(Math.random() * load_images.length)
    const image = load_images[image_index]

    const min_width = canvas.width > 500 ? canvas.width / 5 : canvas.width

    return {
        x: min_width + Math.random() * canvas.width,
        y: (canvas.height - 200) + Math.random() * 500,
        image: image,
        opacity: 1,
        size: 0,
        speed: 0.001 + Math.random() * 0.001,
        direction: Math.random() * 1
    };
}

export const draw = (canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of showedImages) {

    ctx.globalAlpha = p.opacity
    ctx.drawImage(p.image, p.x, p.y, p.size, p.size)
    ctx.globalAlpha = 1.0

    if (p.opacity > 0) {
        p.opacity -= p.speed
        p.size += 0.35
        p.x -= 2
        p.y -= 2
    }
    if (p.opacity <= 0) {
        Object.assign(p, createImage(canvas));
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
