"""App icon: the orange mascot on a warm cream background. Writes a 1024 master plus an adaptive foreground."""
import os

from PIL import Image, ImageDraw, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
S = 1024


def background():
    bg = Image.new("RGB", (S, S), (255, 214, 190))
    glow = Image.new("L", (S, S), 0)
    ImageDraw.Draw(glow).ellipse((S * 0.02, -S * 0.08, S * 0.98, S * 0.86), fill=255)
    glow = glow.filter(ImageFilter.GaussianBlur(S * 0.16))
    bg.paste(Image.new("RGB", (S, S), (255, 244, 234)), (0, 0), glow)
    return bg.convert("RGBA")


def mascot(height):
    m = Image.open(os.path.join(HERE, "mascot-wave.png")).convert("RGBA")
    return m.resize((round(m.width * height / m.height), height), Image.LANCZOS)


def with_shadow(canvas, m, x, y):
    a = m.getchannel("A").point(lambda v: v * 80 // 255)
    s = Image.new("RGBA", m.size, (120, 50, 20, 0))
    s.putalpha(a)
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    layer.alpha_composite(s, (x, y + 22))
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(22)))
    canvas.alpha_composite(m, (x, y))


def place(canvas, scale, cy=0.53):
    m = mascot(int(S * scale))
    x = (S - m.width) // 2 + int(S * 0.01)
    y = int(S * cy - m.height / 2)
    with_shadow(canvas, m, x, y)
    return canvas


out = os.path.join(HERE, "icon")
os.makedirs(out, exist_ok=True)

full = place(background(), 0.84, 0.54)
full.convert("RGB").save(f"{out}/icon-1024.png")

# Android adaptive layers: ic_launcher.xml insets them to the visible area, so only the circle mask trims them.
fg = place(Image.new("RGBA", (S, S), (0, 0, 0, 0)), 0.74, 0.53)
fg.save(f"{out}/icon-foreground.png")
background().convert("RGB").save(f"{out}/icon-background.png")

# Preview at home-screen sizes with the iOS corner mask.
prev = Image.new("RGB", (760, 300), (30, 34, 44))
x = 20
for size in (240, 120, 60):
    icon = full.resize((size, size), Image.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.225), fill=255)
    prev.paste(icon.convert("RGB"), (x, 30), mask)
    x += size + 40
    # Android circle crop of the adaptive layers
circle = Image.alpha_composite(background(), fg).resize((180, 180), Image.LANCZOS)
cm = Image.new("L", (180, 180), 0)
ImageDraw.Draw(cm).ellipse((0, 0, 179, 179), fill=255)
prev.paste(circle.convert("RGB"), (x, 30), cm)
prev.save(f"{out}/preview.png")
print("ok")
