"""Regenerate every splash image with the mascot + BINDICATOR logo, keeping each file's size and background."""
import glob
import os

from PIL import Image

R = "/Users/muzafar/zyur/bin-day"
HERE = os.path.dirname(os.path.abspath(__file__))
LIGHT, DARK = (245, 243, 238), (32, 32, 33)

mascot = Image.open(os.path.join(HERE, "mascot-wave.png")).convert("RGBA")
wordmark = Image.open(f"{R}/src/assets/brand/wordmark.png").convert("RGBA")


def logo(width):
    """Mascot left, wordmark right, wordmark vertically centred on the mascot."""
    m_h = 1000
    m = mascot.resize((round(mascot.width * m_h / mascot.height), m_h), Image.LANCZOS)
    w_h = int(m_h * 0.30)
    w = wordmark.resize((round(wordmark.width * w_h / wordmark.height), w_h), Image.LANCZOS)
    gap = int(m_h * 0.12)
    canvas = Image.new("RGBA", (m.width + gap + w.width, m_h), (0, 0, 0, 0))
    canvas.alpha_composite(m, (0, 0))
    canvas.alpha_composite(w, (m.width + gap, int(m_h * 0.56 - w_h / 2)))
    h = round(canvas.height * width / canvas.width)
    return canvas.resize((width, h), Image.LANCZOS)


files = (
    glob.glob(f"{R}/resources/splash*.png")
    + glob.glob(f"{R}/ios/App/App/Assets.xcassets/Splash.imageset/*.png")
    + glob.glob(f"{R}/android/app/src/main/res/drawable*/splash.png")
)
for f in files:
    size = Image.open(f).size
    dark = "dark" in os.path.basename(f) or "night" in f
    img = Image.new("RGBA", size, DARK if dark else LIGHT)
    lg = logo(int(min(size) * 0.36))
    img.alpha_composite(lg, ((size[0] - lg.width) // 2, (size[1] - lg.height) // 2))
    img.convert("RGB").save(f, optimize=True)
print(len(files), "splash images")

small = mascot.resize((round(mascot.width * 192 / mascot.height), 192), Image.LANCZOS)
small.save(f"{R}/src/assets/brand/mascot.png", optimize=True)
logo(1200).save(os.path.join(HERE, "logo.png"))
