const breakpoint = 500
const images_langs_frameworks_names = [
    'angular',
    'dart',
    'django',
    'flutter',
    'java',
    'css',
    'js',
    'kotlin',
    'laravel',
    'mysql',
    'nodejs',
    'php',
    'mongodb',
    'python',
    'react',
    'html',
    'ruby',
    'springboot',
    'swift',
    'ts',
    'vue',
    'scss',
    'git'
];
const showed_images = [];
var loaded_images = [];
var past_image_index = null
var past_x = 0

export const init = (canvas) => {
    past_x = Math.random() * canvas.width
    for (let i = 0; i < 5; i++) {
        showed_images.push(createImage(canvas));
    }
}

export const preloadAllImages = async () => {
    try {
        const images = await Promise.all(images_langs_frameworks_names.map(name => loadImage(`/lang-frameworks-background/${name}.png`)));
        loaded_images = images
        past_image_index = Math.floor(Math.random() * (loaded_images.length - 1))
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
        img.style.objectFit = 'contain';
    });
}

export const createImage = (canvas) => {

    const limit = canvas.width + canvas.height
    const separation = canvas.width > breakpoint ? limit / 5 : 50

    past_image_index++
    if(past_image_index >= loaded_images.length) past_image_index = 0

    past_x += separation
    if(past_x >= limit) past_x = 0

    const min_width = canvas.width / 5
    const grow = canvas.width > breakpoint ? 0.3 : 0.2
    const image_index = past_image_index
    const x = min_width + past_x
    const y = canvas.height + Math.random() * 100
    const image = loaded_images[image_index]
    const speed = 0.001 + Math.random() * 0.003

    return {
        id: image_index,
        x,
        y,
        grow,
        image,
        opacity: 1,
        size: 0,
        speed
    };
}

export const draw = (canvas, ctx) => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of showed_images) {

        try {
        
            ctx.globalAlpha = p.opacity
            ctx.drawImage(p.image, p.x, p.y, p.size, p.size)
            ctx.globalAlpha = 1.0
        
            if (p.opacity > 0) {
                p.opacity -= p.speed
                p.size += p.grow
                p.x -= 1
                p.y -= 1
            }
            if (p.opacity <= 0) {
                Object.assign(p, createImage(canvas));
            }

        }
        catch(err) {
            console.error('The image can be draw: ', err)
            console.log(p)
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
