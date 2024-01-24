
let sayings = [
    {"en": "A reason not to drink alcohol tonight", "de": "Ein Grund, heute Abend keinen Alkohol zu trinken"},
    {"en": "A job", "de": "Ein Beruf"},
    {"en": "A desert", "de": "Ein Nachtisch"},
    {"en": "Something that can't swim", "de": "Etwas, das nicht schwimmen kann"},
    {"en": "A vampire's drink", "de": "Das Getränk eines Vampirs"},
    {"en": "What you do in a traffic jam", "de": "Was du im Stau machst"},
    {"en": "A cat's sound", "de": "Ein Geräusch einer Katze"},
    {"en": "A vegetable", "de": "Ein Gemüse"},
    {"en": "A ninja's hiding spot", "de": "Der Versteckplatz eines Ninjas"},
    {"en": "A breakfast cocktail", "de": "Ein Frühstückscocktail"},
    {"en": "A secret agent's pet", "de": "Das Haustier eines Geheimagenten"},
    {"en": "What you find in a black hole", "de": "Was du in einem Schwarzen Loch findest"},
    {"en": "A superhero's weakness", "de": "Die Schwäche eines Superhelden"},
    {"en": "A fortune teller's tool", "de": "Das Werkzeug eines Wahrsagers"},
    {"en": "A pirate's favorite letter", "de": "Der Lieblingsbuchstabe eines Piraten"},
    {"en": "What you wear on a hot day", "de": "Was du an einem heißen Tag trägst"},
    {"en": "A procrastinator's excuse", "de": "Die Ausrede eines Aufschiebers"},
    {"en": "A rock star's breakfast", "de": "Das Frühstück eines Rockstars"},
    {"en": "A magician's snack", "de": "Der Snack eines Magiers"},
    {"en": "What you shout at a football game", "de": "Was du bei einem Fußballspiel schreist"},
    {"en": "A chef's nightmare ingredient", "de": "Die Albtraum-Zutat eines Kochs"},
    {"en": "A ghost's favorite holiday", "de": "Der Lieblingsfeiertag eines Geistes"},
    {"en": "A couch potato's activity", "de": "Die Aktivität eines Stubenhockers"},
    {"en": "A politician's promise", "de": "Das Versprechen eines Politikers"},
    {"en": "A horror movie plot", "de": "Die Handlung eines Horrorfilms"},
    {"en": "A chocolate lover's dream", "de": "Der Traum eines Schokoladenliebhabers"},
    {"en": "A lawyer's argument", "de": "Das Argument eines Anwalts"},
    {"en": "A spy's favorite gadget", "de": "Das Lieblingsgadget eines Spions"},
    {"en": "What you do at a karaoke bar", "de": "Was du in einer Karaoke-Bar machst"},
    {"en": "A golfer's excuse for a bad shot", "de": "Die Ausrede eines Golfers für einen schlechten Schlag"},
    {"en": "A gym enthusiast's pet", "de": "Das Haustier eines Fitnessbegeisterten"},
    {"en": "An astronaut's favorite snack", "de": "Der Lieblingssnack eines Astronauten"},
    {"en": "A detective's secret weapon", "de": "Die geheime Waffe eines Detektivs"},
    {"en": "A wine connoisseur's dilemma", "de": "Das Dilemma eines Weinkenners"},
    {"en": "A gamer's battle cry", "de": "Der Schlachtruf eines Spielers"},
    {"en": "A romantic poet's pickup line", "de": "Die Anmache eines romantischen Dichters"},
    {"en": "A caffeine addict's nightmare", "de": "Der Alptraum eines Koffeinjunkies"},
    {"en": "A bee's favorite sport", "de": "Der Lieblingssport einer Biene"},
    {"en": "What you do when your alarm doesn't ring", "de": "Was du tust, wenn dein Wecker nicht klingelt"},
    {"en": "A mathematician's love letter", "de": "Der Liebesbrief eines Mathematikers"},
    {"en": "A dentist's guilty pleasure", "de": "Das heimliche Vergnügen eines Zahnarztes"},
    {"en": "A ghost's social media status", "de": "Der Social-Media-Status eines Geistes"},
    {"en": "An author's worst nightmare", "de": "Der schlimmste Albtraum eines Autors"},
    {"en": "What you say when you find a spider in your room", "de": "Was du sagst, wenn du eine Spinne in deinem Zimmer findest"},
    {"en": "A cat's philosophy on life", "de": "Die Lebensphilosophie einer Katze"},
    {"en": "A chef's definition of a balanced diet", "de": "Die Definition eines ausgewogenen Ernährungsplans eines Kochs"},
    {"en": "A musician's preferred mode of transportation", "de": "Die bevorzugte Transportart eines Musikers"},
    {"en": "A meteorologist's favorite dance move", "de": "Die Lieblings-Tanzbewegung eines Meteorologen"},
    {"en": "What a robot dreams about", "de": "Wovon ein Roboter träumt"},
    {"en": "An archaeologist's pick-up line", "de": "Die Anmache eines Archäologen"},
    {"en": "A gardener's favorite type of humor", "de": "Die Lieblingsart von Humor eines Gärtners"},
    {"en": "A cat burglar's favorite music genre", "de": "Das Lieblingsmusikgenre eines Einbrechers"},
    {"en": "A fashionista's opinion on pajamas in public", "de": "Die Meinung einer Modefanatikerin zu Pyjamas in der Öffentlichkeit"},
    {"en": "What you say when you forget someone's name", "de": "Was du sagst, wenn du den Namen von jemandem vergisst"},
    {"en": "A scientist's favorite dance party element", "de": "Das Lieblingselement einer Wissenschaftlerin auf der Tanzparty"},
    {"en": "A genie's social media status update", "de": "Das Statusupdate eines Genies auf Social Media"}
]

let rule = [
    {en: "Starts with A", de: "Beginnt mit A"},
    {en: "Starts with B", de: "Beginnt mit B"},
    {en: "Starts with C", de: "Beginnt mit C"},
    {en: "Starts with D", de: "Beginnt mit D"},
    {en: "Starts with E", de: "Beginnt mit E"},
    {en: "Starts with F", de: "Beginnt mit F"},
    {en: "Starts with G", de: "Beginnt mit G"},
    {en: "Starts with H", de: "Beginnt mit H"},
    {en: "Starts with I", de: "Beginnt mit I"},
    {en: "Starts with J", de: "Beginnt mit J"},
    {en: "Starts with K", de: "Beginnt mit K"},
    {en: "Starts with L", de: "Beginnt mit L"},
    {en: "Starts with M", de: "Beginnt mit M"},
    {en: "Starts with N", de: "Beginnt mit N"},
    {en: "Starts with O", de: "Beginnt mit O"},
    {en: "Starts with P", de: "Beginnt mit P"},
    {en: "Starts with Q", de: "Beginnt mit Q"},
    {en: "Starts with R", de: "Beginnt mit R"},
    {en: "Starts with S", de: "Beginnt mit S"},
    {en: "Starts with T", de: "Beginnt mit T"},
    {en: "Starts with U", de: "Beginnt mit U"},
    {en: "Starts with V", de: "Beginnt mit V"},
    {en: "Starts with W", de: "Beginnt mit W"},
    {en: "Starts with X", de: "Beginnt mit X"},
    {en: "Starts with Y", de: "Beginnt mit Y"},
    {en: "Starts with Z", de: "Beginnt mit Z"},
    {en: "Starts with a Vowel", de: "Beginnt mit einem Vokal"},
    {en: "Starts with a Consonant", de: "Beginnt mit einem Konsonanten"}
  ];
  

let used = [];
let reset = false;

export function getRandomSaying() {

    if (sayings.length !== 0) {
        const randomIndex = Math.floor(Math.random() * sayings.length);
        const randomSaying = sayings.splice(randomIndex, 1)[0];

        used.push(randomSaying);
        const randomRule = rule[Math.floor(Math.random() * rule.length)]
        // Update the 'previous' variable
        return {saying:randomSaying, rule:randomRule};
    } else {
        // Move the content of used into sayings
        sayings = [...used];
        used.length = 0;

        if (sayings.length !== 0 && used.length === 0) {
            reset = true;
            return getRandomSaying(); // Call the function recursively
        }

        // Sayings array is empty, reset and return null or handle as needed
        reset = false;
        return null;
    }
}

export function numbers(){
    return {
        left: sayings.length, 
        used: used.length
    }
}
