# Audio credits

Recordings are used under open licences. Files in `audio/` are mono, low-bitrate MP3 versions stored as base64 JS modules. Changes made: converted to mono MP3 (32 kbps, 22.05 kHz).

- Temple bell ambience: "Indian Temple Bell.WAV" by ganiket (recorded with a Zoom H6N in Kothi, Himachal Pradesh, 2019), Freesound #466652, CC0. https://freesound.org/people/ganiket/sounds/466652/
- Om Navashivam, traditional hindu song, Kumaon, Uttarakhand, India.ogg: Yann (own work, 2011), Wikimedia Commons, CC BY-SA (GFDL and cc-by-sa-all; used under CC BY-SA 4.0). https://commons.wikimedia.org/wiki/File:Om_Navashivam,_traditional_hindu_song,_Kumaon,_Uttarakhand,_India.ogg . An automatic transcript of the audio matches a Hindi devotional song with Shiva, Sita-Ram and Radha-Shyam names.
- Kumaon devotional recording: Yann (own work, 2011), Wikimedia Commons, same licence. https://commons.wikimedia.org/wiki/File:Sherawali_Maa,_traditional_hindu_song,_Kumaon,_Uttarakhand.oga . Shown under a neutral label: the Commons title and its copied description disagree and an automatic transcript found no speech, so the recording is not assigned to a deity.

The converted audio files `audio/omnava.js` and `audio/sherawali.js` are adaptations and are licensed CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/ . This does not change the licence of the rest of the project.

Removed: an "Aarti Puja, deity Santoshi" recording (Commons CC0, source an Internet Archive community upload credited to a commercial devotional singer) was removed because the uploader's authority to release it could not be verified.


## Ganesha 3D scan
- Ganesha, 10th-11th century CE, volcanic stone, Java. Scan by the Minneapolis Institute of Art.
- Source: https://sketchfab.com/3d-models/ganesha-10th-11th-c-ce-375c670515684977b6ec05be115366ac
- Download and licence record: https://commons.wikimedia.org/wiki/File:Ganesha%2C_10th_-_11th_C_CE_-_3D_model_by_Minneapolis_Institute_of_Art_-_Sketchfab.stl
- Licence: CC0, verified from Wikimedia Commons file metadata.
- Adaptation: welded vertices, 16-bit position quantization, indexed mesh, scaled and rotated for display; neutral stone material rather than original texture. 63,950 triangles. Stored as models/ganesha.json (about 766 KB before transfer compression).
- This is a historical Javanese depiction, not a claim that all traditions depict Ganesha this way.


## Uma-Maheshvara 3D scan
- Uma-Maheshvara (Shiva and Parvati together), sandstone, India, 10th-11th century CE. Minneapolis Institute of Art.
- Museum: https://collections.artsmia.org/art/5369/uma-maheshvara-india
- CC0 download and licence: https://commons.wikimedia.org/wiki/File:Uma-Maheshvara%2C_10th_-_11th_C_CE_-_3D_model_by_Minneapolis_Institute_of_Art_-_Sketchfab.stl
- Adaptation: welded vertices, 16-bit position quantization and indexed mesh, rotated/scaled for display with neutral sandstone material. simplified from 99,994 to 16,625 triangles using vertex clustering, 7,585 vertices, about 194 KB JSON. Original surface colour is not reproduced.
- Experimental asset only. Not displayed: the simplified mesh failed visual QA. Any future display must identify the joint Shiva and Parvati depiction.

## Animated visitors
- Casual Walker and Hiker by tevy.dev. Source pages: https://tevy.dev/models/casual-walker and https://tevy.dev/models/hiker . Each source page and GLB asset metadata states CC0 1.0.
- Pinned v1 LOD1 files loaded from those source pages, about 1.3MB combined. GLTFLoader, KTX2Loader and Meshopt decoder use the existing pinned Three.js0.160.0 dependency.
- Independently cloned skinned models, idle/walk animation blending, movement speed matched to the source walk cycle (1.3m/s), and existing city collision/yielding wrappers retained.
- These are stylized modern visitors, not photoreal people or a finished varied devotional crowd. If a download fails the prior procedural crowd remains as a fallback.

## Shiva Nataraja 3D scan
- Nataraja, Shiva as Lord of the Dance, 1000s, Tamil Nadu, Chola period, bronze. Cleveland Museum of Art1930.331; scan by Dale Utt for the museum.
- Museum identification: https://www.clevelandart.org/art/1930.331
- Original model and verified CC0 dedication: https://sketchfab.com/3d-models/1930331-nataraja-shiva-as-the-lord-of-dance-6862a3c673d4434a8dc39ced2a5b5720
- Downloaded from https://www.artheonmuseum.org/artwork/1930-331-nataraja-shiva-as-the-lord-of-dance-6862a3 . GLB metadata independently identifies original model, museum and CC0.
- Adaptation:98,795 triangles preserved,16-bit quantized positions/indices, source orientation applied and display scale adjusted; recreated bronze-style material, not original photographic texture or painted surface. Geometry compressed into five repository text chunks, decoded only when the Shiva bay is visited. About1.07MB before transfer compression. No claim of authentic original surface colour.

## Surya 3D scan
- Surya, the Sun God, early700s, Kashmir. Cleveland Museum of Art1965.557, brass sculpture with silver eyes and copper lips. Museum: https://www.clevelandart.org/art/1965.557
- Original open-use model: https://sketchfab.com/3d-models/none-0f5e1ad4a1214e0c88d480e8945da422 . Embedded GLB metadata states CC0-1.0 and Cleveland Museum attribution.
- Acquired via https://www.artheonmuseum.org/artwork/1965-557-surya-the-sun-god-0f5e1a . Geometry retained124,404 triangles, quantized16-bit positions/indices, source orientation and display scale adjusted. Recreated brass-style material, not original photo texture, inlays or paint. Six compressed text chunks decoded on first visit, about1.27MB before transfer compression.

## Vishnu on Garuda
- Minneapolis Institute of Art99.216.7, Cambodia,12th–13th century, bronze. Museum identity: https://collections.artsmia.org/art/8321/vishnu-on-garuda-cambodia
- Original scan, CC0 licence checked on source: https://sketchfab.com/3d-models/vishnu-on-garuda-12-13th-c-ce-19f2d33eb9d44d1fa8551b7d95929b0f
- Acquired via https://www.artheonmuseum.org/artwork/vishnu-on-garuda-12-13th-c-ce-19f2d3 . Embedded GLB metadata corroborates source, title and CC0.64,000 triangles kept,16-bit quantization, reorientation/display scale, recreated bronze-style material, not original texture or paint. Three on-demand compressed chunks, about715kB before transfer compression. Historical small bronze enlarged for gallery display.
