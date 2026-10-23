"""Cut a subject out of a plain white background: flood-fill near-white from the edges, feather the rim."""
import sys
from collections import deque

from PIL import Image, ImageFilter

src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
w, h = im.size
px = im.load()


def whiteness(p):
    return min(p)  # 255 = pure white


HARD = int(sys.argv[3]) if len(sys.argv) > 3 else 236  # definitely background
seeds = [tuple(map(int, s.split(","))) for s in sys.argv[4:]]  # enclosed background holes
mask = Image.new("L", (w, h), 255)
mp = mask.load()
seen = bytearray(w * h)
q = deque()
for x in range(w):
    q.extend([(x, 0), (x, h - 1)])
for y in range(h):
    q.extend([(0, y), (w - 1, y)])
q.extend(seeds)
while q:
    x, y = q.popleft()
    i = y * w + x
    if seen[i]:
        continue
    seen[i] = 1
    p = px[x, y]
    m = whiteness(p)
    sat = max(p) - min(p)
    if m >= HARD and sat < 28:
        mp[x, y] = 0
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx]:
                q.append((nx, ny))

mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
out = im.convert("RGBA")
out.putalpha(mask)
bbox = mask.point(lambda v: 255 if v > 8 else 0).getbbox()
out = out.crop(bbox)
out.save(dst)
print(dst, out.size)
