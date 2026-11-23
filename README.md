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

- Museum scan expansion: joint Shiva and Parvati (Uma-Maheshvara) sourced and converted, but not displayed: simplified mesh failed visual QA. One of fourteen niches populated, thirteen still pending. CC0 source and adaptations in CREDITS.md. The gallery remains a shared prototype hall.

- Garden walking: expanded the outdoor walkable area to include the trees. Player and devotees share solid trunk and lantern-post boundaries; devotees can choose garden routes. People and architecture remain low-poly. Physical-phone performance still unmeasured.

- Gallery wayfinding: persistent deity chooser and Exit button; each temple's info panel can open its matching gallery niche. The chooser places the visitor in front of the selected niche, with truthful statue status. This is a navigation aid, not connected architectural interiors. Ganesha remains the only displayed scan.

- Scan quality/loading: Ganesha has local key/fill lighting for relief detail and a loading/failed/ready status instead of claiming a scan loaded before it arrives. Unfilled Parvati niche uses its own deity label again. Tested full original Uma mesh and a quadric-decimated version: visible source gaps remain, matching Wikimedia's preview, so neither is displayed. A newer 2023 museum upload is an alternative under CC BY-SA 4.0, not CC0; download currently requires Sketchfab login. Connected interiors, thirteen further scans and physical-phone performance remain open.

- Connected shrine-bay prototype: fourteen individual bays now open through doorways onto a shared central passage, with deity signs and solid divider/entrance walls. Visitors can walk out of one bay, along the passage and into another, or use the chooser. This is a gallery-layout step, not faithful interiors matched to the outdoor temples. Ganesha is still the only populated shrine. More statues, architectural research, texture tuning and real-phone performance remain open.

- Gallery controls moved below the scene's main subject so the deity's bilingual wall sign stays readable. Mobile guide sits above bottom navigation, with joystick raised to avoid the guide. Connecting-passage status updates only when the zone changes, not every frame. Still a generic bay prototype with one statue, not completed temple interiors.

- Ganesha-bay aarti study: tap the new Aarti control beside the gallery chooser for a 24-second circular brass lamp offering. Original procedural lamp geometry, animated flame, wisps of smoke and warm moving light. Tap Stop, select another deity, walk into the passage or leave the gallery to end it. No new audio recording or asset dependency. It is an effects prototype, not a claim of photorealism or an authentic prescribed ritual sequence for all traditions. Other thirteen statues remain pending.

- Human-model step: walking visitors now use two textured, rigged CC0 characters (Casual Walker and Hiker from tevy.dev) with separate idle/walk animation and existing collision wrappers. They have shaped faces, hands and clothing rather than box torsos/limbs. Still stylized, with repeated modern outfits, not photoreal or a finished varied devotional crowd. External pinned model/decoder downloads are needed; previous procedural crowd remains if loading fails. Physical-phone performance still unmeasured.
