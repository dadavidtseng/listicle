/**
 * ---------------------------------------------------------------------------------------------------
 * tracks.js
 * 
 * @module server.data
 * ---------------------------------------------------------------------------------------------------
 */

const discSvg = (color) =>
    `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="#1a1a1a" stroke="#333" stroke-width="2"/><circle cx="60" cy="60" r="48" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="60" cy="60" r="40" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="60" cy="60" r="32" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="60" cy="60" r="20" fill="${color}"/><circle cx="60" cy="60" r="6" fill="#1a1a1a"/></svg>`)}`

const trackData = [
    {
        "id": 1,
        "name": "Cat",
        "artist": "C418",
        "image": discSvg("#4aad4a"),
        "description": "A cheerful, upbeat melody that captures the lighthearted spirit of early Minecraft. One of the most iconic and recognizable discs in the game.",
        "duration": "3:05",
        "addedIn": "Alpha v1.0.14",
        "rarity": "Common",
        "foundIn": "Dungeon and Woodland Mansion chests"
    },
    {
        "id": 2,
        "name": "Blocks",
        "artist": "C418",
        "image": discSvg("#d4753e"),
        "description": "A calm, chill electronic track with a bouncy beat. Perfect background music for building your next big project.",
        "duration": "5:45",
        "addedIn": "Java Edition 1.0.0",
        "rarity": "Common",
        "foundIn": "Dungeon and Woodland Mansion chests"
    },
    {
        "id": 3,
        "name": "Chirp",
        "artist": "C418",
        "image": discSvg("#cc3333"),
        "description": "A retro 8-bit style track with a warm, nostalgic vibe. Starts with a record-scratch effect before launching into its melody.",
        "duration": "3:05",
        "addedIn": "Java Edition 1.0.0",
        "rarity": "Common",
        "foundIn": "Dungeon and Woodland Mansion chests"
    },
    {
        "id": 4,
        "name": "Stal",
        "artist": "C418",
        "image": discSvg("#2a2a2a"),
        "description": "A smooth jazz piece featuring a piano and saxophone combo. Widely considered one of the most divisive discs among the community.",
        "duration": "2:30",
        "addedIn": "Java Edition 1.0.0",
        "rarity": "Common",
        "foundIn": "Dungeon and Woodland Mansion chests"
    },
    {
        "id": 5,
        "name": "Pigstep",
        "artist": "Lena Raine",
        "image": discSvg("#d4a43e"),
        "description": "An intense, bass-heavy track with a dark and driving beat. The first disc not composed by C418 and one of the rarest in the game.",
        "duration": "2:28",
        "addedIn": "Java Edition 1.16",
        "rarity": "Rare",
        "foundIn": "Bastion Remnant chests (Nether only)"
    },
    {
        "id": 6,
        "name": "otherside",
        "artist": "Lena Raine",
        "image": discSvg("#3ba5d4"),
        "description": "A dramatic, emotional track that builds from soft synths into a powerful, bittersweet climax. Evokes a sense of adventure and nostalgia.",
        "duration": "3:15",
        "addedIn": "Java Edition 1.18",
        "rarity": "Rare",
        "foundIn": "Stronghold corridor chests and Ancient City chests"
    },
    {
        "id": 7,
        "name": "5",
        "artist": "Samuel Aberg",
        "image": discSvg("#4a7a8c"),
        "description": "A dark, eerie track assembled from nine disc fragments. Features unsettling audio that hints at a mysterious Minecraft lore narrative.",
        "duration": "2:58",
        "addedIn": "Java Edition 1.19",
        "rarity": "Very Rare",
        "foundIn": "Crafted from disc fragments found in Ancient City chests"
    },
    {
        "id": 8,
        "name": "Relic",
        "artist": "Aaron Cherof",
        "image": discSvg("#8b6b4a"),
        "description": "A warm, ancient-sounding track with lo-fi textures and gentle melodies. Feels like uncovering a forgotten piece of history.",
        "duration": "3:38",
        "addedIn": "Java Edition 1.20",
        "rarity": "Rare",
        "foundIn": "Suspicious gravel in Trail Ruins (archaeology)"
    },
    {
        "id": 9,
        "name": "Creator",
        "artist": "Lena Raine",
        "image": discSvg("#9b59b6"),
        "description": "A triumphant, uplifting track celebrating creativity and building. Features soaring synths layered over a steady, inspiring rhythm.",
        "duration": "3:57",
        "addedIn": "Java Edition 1.21",
        "rarity": "Rare",
        "foundIn": "Ominous Vault in Trial Chambers"
    }
]

export default trackData
