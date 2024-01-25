
let games = {
    "gemeinsamesache": { 
        en: "Common Ground", 
        de: "Gemeinsame Sache", 
        path: "/gemeinsamesache"
    },
    "blackout": { 
        en: "Blackout", 
        de: "Blackout",
        path: "/blackout"
    },
}


export function getGameByKey(key) {
    return games[key]
}