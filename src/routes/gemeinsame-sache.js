let sayings = [
    { de: "Guten Tag", en: "Good day" },
    { de: "Auf Wiedersehen", en: "Goodbye" },
    // Add more sayings as needed
];

let used = [];
let reset = false;

export function getRandomSaying() {
    if (reset) {
        console.log("sayings reset", sayings);
        console.log("used reset", used);
        reset = false;
    }

    if (sayings.length !== 0) {
        const randomIndex = Math.floor(Math.random() * sayings.length);
        const randomSaying = sayings.splice(randomIndex, 1)[0];

        used.push(randomSaying);
        console.log("added to used: ", used);

        // Update the 'previous' variable
        return randomSaying;
    } else {
        // Move the content of used into sayings
        sayings = [...used];
        used.length = 0;

        if (sayings.length !== 0 && used.length === 0) {
            console.log("restart");
            reset = true;
            return getRandomSaying(); // Call the function recursively
        }

        // Sayings array is empty, reset and return null or handle as needed
        reset = false;
        console.log("Sayings array is empty");
        return null;
    }
}
