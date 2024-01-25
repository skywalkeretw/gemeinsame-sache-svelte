
let games = {
    "gemeinsamesache": {
        name: {
            en: "Common Ground",
            de: "Gemeinsame Sache",
        },
        path: "/gemeinsamesache",
        description: {
            en: "",
            de: "",
        },
    },
    "blackout": {
        name: {
            en: "Blackout",
            de: "Blackout"
        },
        path: "/blackout",
        description: {
            en: "",
            de: "",
        },
    },
}

export function getGames() {
    return games
}

export function getGameByKey(key) {
    return games[key]
}