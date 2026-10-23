"""Square notification pictures: colour mascot(s) on a soft tinted background."""
import os

from PIL import Image, ImageDraw, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = "/Users/muzafar/zyur/bin-day"
WEB_OUT = f"{REPO}/public/notifications"
ANDROID_OUT = f"{REPO}/android/app/src/main/res/drawable-nodpi"
SIZE = 600

TINTS = {
    "black": ((236, 238, 242), (205, 210, 220)),
    "blue": ((226, 236, 255), (186, 207, 252)),
    "brown": ((246, 236, 228), (226, 205, 189)),
    "green": ((228, 245, 231), (190, 228, 198)),
    "orange": ((255, 238, 228), (255, 208, 186)),
}

MASCOT = {
    "black": "mascot-black.png",
    "blue": "mascot-blue.png",
    "brown": "mascot-brown.png",
    "green": "mascot-green.png",
    "orange": "mascot-wave.png",
}

SETS = {
    "black": ["black"],
    "blue": ["blue"],
    "brown": ["brown"],
    "green": ["green"],
    "black-green": ["black", "green"],
    "blue-green": ["blue", "green"],
    "brown-green": ["brown", "green"],
    "bindicator": ["orange"],
}


def background(kind):
    inner, outer = TINTS[kind]
    bg = Image.new("RGB", (SIZE, SIZE), outer)
    glow = Image.new("L", (SIZE, SIZE), 0)
    ImageDraw.Draw(glow).ellipse((-SIZE * 0.1, -SIZE * 0.2, SIZE * 1.0, SIZE * 0.9), fill=255)
    glow = glow.filter(ImageFilter.GaussianBlur(SIZE * 0.18))
    bg.paste(Image.new("RGB", (SIZE, SIZE), inner), (0, 0), glow)
    return bg.convert("RGBA")


def mascot(kind, height):
    m = Image.open(os.path.join(HERE, MASCOT[kind])).convert("RGBA")
    w = round(m.width * height / m.height)
    return m.resize((w, height), Image.LANCZOS)


def shadow(img, offset=(0, 14), blur=16, alpha=70):
    a = img.getchannel("A").point(lambda v: v * alpha // 255)
    s = Image.new("RGBA", img.size, (40, 30, 30, 0))
    s.putalpha(a)
    pad = blur * 3
    canvas = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    canvas.alpha_composite(s, (pad + offset[0], pad + offset[1]))
    return canvas.filter(ImageFilter.GaussianBlur(blur)), pad


def compose(kinds):
    bg = background(kinds[0])
    if len(kinds) == 1:
        layers = [(mascot(kinds[0], int(SIZE * 0.78)), 0.5, 0.53)]
    else:
        # Second bin sits behind and to the right, a little smaller.
        layers = [
            (mascot(kinds[1], int(SIZE * 0.6)), 0.71, 0.56),
            (mascot(kinds[0], int(SIZE * 0.68)), 0.36, 0.54),
        ]
    for m, cx, cy in layers:
        x, y = int(SIZE * cx - m.width / 2), int(SIZE * cy - m.height / 2)
        s, pad = shadow(m)
        bg.alpha_composite(s, (x - pad, y - pad))
        bg.alpha_composite(m, (x, y))
    return bg.convert("RGB")


os.makedirs(WEB_OUT, exist_ok=True)
for name, kinds in SETS.items():
    img = compose(kinds)
    img.save(f"{WEB_OUT}/{name}.jpg", quality=86, optimize=True, progressive=True)
    img.save(f"{ANDROID_OUT}/notif_{name.replace('-', '_')}.jpg", quality=86, optimize=True)
    print(name, os.path.getsize(f"{WEB_OUT}/{name}.jpg") // 1024, "KB")
