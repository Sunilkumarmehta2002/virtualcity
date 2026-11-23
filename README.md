# देवनगरी | DEVNAGARI

A virtual city of gods and goddesses: an explorable 3D temple city (Three.js) with darshan, aarti, prasad cards and a daily panchang.

Open `index.html` through any static server (for example `python3 -m http.server`) and enter the city.

## Deities so far
Ganesh, Ram, Krishna, Shiv, Durga, Lakshmi, Hanuman, Saraswati, Vishnu, Surya, Parvati, Kartikeya, Kali, Ganga.

## Daily log
- Day 1: four new temples (Parvati, Kartikeya, Kali, Ganga), floating Hindi/English name labels, and a pulsing gold ring around today's deity.
- Day 2 (23 Nov 2026): CC0 stone textures from Poly Haven (see CREDITS.md), temple shikhara, gardens and trees, wandering animals (low-poly, blocky), automatic IST day/night sky with manual buttons, jugnu lights and lanterns, a follow-an-animal camera, ACES filmic lighting with day haze, and a walk mode (first person, joystick or WASD, drag to look, temple collision). Still low-poly, not photorealistic. Phone performance is not yet measured.

- Day 2 evening: animals replaced with 12 walking low-poly devotees; player/person collision and NPC yielding added. Prototype gallery has 14 named niches and one CC0 museum Ganesha scan; thirteen statues are still pending. Tap the top 🪔 to enter/leave, drag to look and use joystick or WASD to walk. The hall is not yet connected interiors for every temple.
- Label safety fix: use actual projected sprite bounds to avoid clipped/overlapping labels and toolbar collisions; hide outdoor labels inside the gallery. Gallery entry has on-screen control guidance. Tree trunks are outside the current walkable radius, so garden exploration and tree collision remain future work. Phone frame rate unmeasured.

- Museum scan expansion: joint Shiva and Parvati (Uma-Maheshvara) added to Parvati's niche with an explicit joint label. Two of fourteen niches populated, twelve still pending. CC0 source and adaptations in CREDITS.md. The gallery remains a shared prototype hall.
