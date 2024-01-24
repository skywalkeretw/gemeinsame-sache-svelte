let sayings = [
    { "de": "Ein beliebtes Reiseziel", "en": "A popular holiday destination" },
    { "de": "Etwas, das groß ist", "en": "Something that is large" },
    { "de": "Ein menschliches Körperteil", "en": "A human body part" },
    { "de": "Etwas Illegales", "en": "Something illegal" },
    { "de": "Ein Tier aus Afrika", "en": "An animal from Africa" },
    { "de": "Ein bekanntes Wahrzeichen", "en": "A famous landmark" },
    { "de": "Eine berühmte Persönlichkeit", "en": "A famous personality" },
    { "de": "Ein traditionelles Gericht", "en": "A traditional dish" },
    { "de": "Ein Teil des menschlichen Gehirns", "en": "A part of the human brain" },
    { "de": "Etwas, das fliegt", "en": "Something that flies" },
    { "de": "Ein Sportgerät", "en": "A sports equipment" },
    { "de": "Ein astronomisches Phänomen", "en": "An astronomical phenomenon" },
    { "de": "Ein Musikinstrument", "en": "A musical instrument" },
    { "de": "Ein Modeaccessoire", "en": "A fashion accessory" },
    { "de": "Ein Transportmittel", "en": "A mode of transportation" },
    { "de": "Ein technisches Gerät", "en": "A technological device" },
    { "de": "Ein Buchtitel", "en": "A book title" },
    { "de": "Ein olympischer Sport", "en": "An Olympic sport" },
    { "de": "Ein Werkzeug", "en": "A tool" },
    { "de": "Ein bekanntes Gemälde", "en": "A famous painting" },
    { "de": "Ein Symbol für Glück", "en": "A symbol of luck" },
    { "de": "Ein beliebtes Haustier", "en": "A popular pet" },
    { "de": "Etwas, das süß ist", "en": "Something sweet" },
    { "de": "Ein Filmgenre", "en": "A film genre" },
    { "de": "Ein bekanntes Märchen", "en": "A famous fairy tale" },
    { "de": "Ein Element im Periodensystem", "en": "An element in the periodic table" },
    { "de": "Ein Produkt in einem Supermarkt", "en": "A product in a supermarket" },
    { "de": "Ein ozeanisches Lebewesen", "en": "An oceanic creature" },
    { "de": "Ein Synonym für Glück", "en": "A synonym for happiness" },
    { "de": "Etwas, das man täglich benutzt", "en": "Something you use daily" },
    { "de": "Ein bekanntes Theaterstück", "en": "A famous play" },
    { "de": "Ein Sportwagen", "en": "A sports car" },
    { "de": "Ein Naturphänomen", "en": "A natural phenomenon" },
    { "de": "Ein Vorname", "en": "A first name" },
    { "de": "Ein Gemüse", "en": "A vegetable" },
    { "de": "Ein Musikgenre", "en": "A music genre" },
    { "de": "Ein Superheldenkostüm", "en": "A superhero costume" },
    { "de": "Ein Getränk", "en": "A beverage" },
    { "de": "Ein Arbeitswerkzeug", "en": "A work tool" },
    { "de": "Ein Teil eines Computers", "en": "A part of a computer" },
    { "de": "Ein Schmuckstück", "en": "A piece of jewelry" },
    { "de": "Ein Urlaubsziel im Winter", "en": "A winter holiday destination" },
    { "de": "Ein Insekt", "en": "An insect" },
    { "de": "Ein Requisit in einem Krimi", "en": "A prop in a crime thriller" },
    { "de": "Etwas, das man im Garten findet", "en": "Something found in the garden" },
    { "de": "Ein Emoticon", "en": "An emoticon" },
    { "de": "Ein Märchenwald-Bewohner", "en": "A fairy tale forest inhabitant" },
    { "de": "Ein Party-Snack", "en": "A party snack" },
    { "de": "Ein Symbol für Liebe", "en": "A symbol for love" },
    { "de": "Ein Produkt aus Schokolade", "en": "A chocolate product" },
    { "de": "Etwas, das schrumpft, wenn man es wäscht", "en": "Something that shrinks when you wash it" },
    { "de": "Ein Gegenstand, den man nur einmal benutzt und dann wegwirft", "en": "An item you use once and then throw away" },
    { "de": "Ein Modeartikel aus den 80ern", "en": "A fashion item from the 80s" },
    { "de": "Etwas, das man im Schlafzimmer versteckt", "en": "Something hidden in the bedroom" },
    { "de": "Der absurdeste Grund für einen Stau", "en": "The most absurd reason for a traffic jam" },
    { "de": "Ein imaginäres Haustier mit einem ulkigen Namen", "en": "An imaginary pet with a quirky name" },
    { "de": "Die albernste Sache, die man im Dunkeln machen kann", "en": "The silliest thing to do in the dark" },
    { "de": "Etwas, das man auf einer einsamen Insel braucht, außer Überlebensutensilien", "en": "Something you need on a deserted island, besides survival tools" },
    { "de": "Die absurdeste Nebenwirkung eines fiktiven Medikaments", "en": "The most absurd side effect of a fictional medication" },
    { "de": "Ein erfundenes Gerät, um Zeit zu sparen", "en": "An invented device to save time" },
    { "de": "Ein schräges Talent, das niemand wirklich braucht", "en": "A quirky talent that no one really needs" },
    { "de": "Der verrückteste Grund, warum Aliens die Erde besuchen würden", "en": "The craziest reason why aliens would visit Earth" },
    { "de": "Ein abwegiger Jobtitel für einen Superhelden", "en": "An absurd job title for a superhero" },
    { "de": "Ein skurriler Werbeslogan für Kaffee", "en": "A quirky advertising slogan for coffee" },
    { "de": "Das absurdeste Accessoire für ein formelles Outfit", "en": "The most absurd accessory for a formal outfit" },
    { "de": "Ein erfundenes Gerücht über die Entstehung eines bekannten Lieds", "en": "An invented rumor about the creation of a famous song" },
    { "de": "Ein albernes Superkraft-Duo (wie Captain Kaffeetasse und Sir Lachsalot)", "en": "A silly superhero duo (like Captain Coffee Mug and Sir Chuckle-a-lot)" },
    { "de": "Etwas, das man mit ins All nehmen würde", "en": "Something you would take to space" },
    { "de": "Eine lustige Entschuldigung fürs Zuspätkommen", "en": "A funny excuse for being late" },
    { "de": "Der beste fiktive Zaubertrick", "en": "The best fictional magic trick" },
    { "de": "Ein verrücktes Haustier, das auf dem Mars leben könnte", "en": "A crazy pet that could live on Mars" },
    { "de": "Eine absurde Superkraft, die keinerlei Nutzen hat", "en": "An absurd superpower with no practical use" },
    { "de": "Ein alternativer Name für den Montag", "en": "An alternative name for Monday" },
    { "de": "Die schrägste Form von Kunst", "en": "The quirkiest form of art" },
    { "de": "Ein erfundenes Brettspiel mit skurrilen Regeln", "en": "An invented board game with quirky rules" },
    { "de": "Die beste Ausrede für das Vergessen eines Geburtstags", "en": "The best excuse for forgetting a birthday" },
    { "de": "Etwas, das man gegen eine Alien-Invasion verwenden könnte", "en": "Something you could use against an alien invasion" },
    { "de": "Die witzigste Nachricht, die ein Roboter senden könnte", "en": "The funniest message a robot could send" },
    { "de": "Ein erfundenes Getränk mit skurrilem Geschmack", "en": "An invented drink with a quirky flavor" },
    { "de": "Ein skurriler Grundeintrag im Guinness-Buch der Rekorde", "en": "A quirky entry in the Guinness World Records" },
    { "de": "Die beste Taktik, um Zombies zu vertreiben", "en": "The best tactic to repel zombies" },
    { "de": "Ein futuristisches Fortbewegungsmittel", "en": "A futuristic mode of transportation" },
    { "de": "Die albernste Modeerscheinung des Jahres", "en": "The silliest fashion trend of the year" },
    { "de": "Ein erfundenes Wort, das perfekt eine unangenehme Situation beschreibt", "en": "An invented word that perfectly describes an awkward situation" },
    { "de": "Die witzigste Ausrede für Hausaufgaben", "en": "The funniest excuse for not doing homework" },
    { "de": "Ein absurd hoher Preis für etwas Alltägliches", "en": "An absurdly high price for something everyday" },
    { "de": "Eine seltsame Tradition für den Weltfrieden", "en": "A bizarre tradition for world peace" },
    { "de": "Die beste Idee für eine verrückte Weltreise", "en": "The best idea for a crazy world tour" },
    { "de": "Ein ungewöhnliches Talent, das in einem Talentwettbewerb gewinnen könnte", "en": "An unusual talent that could win in a talent competition" },
    { "de": "Die witzigste Begründung, warum Einhörner ausgestorben sind", "en": "The funniest reason why unicorns went extinct" },
    { "de": "Ein skurriles Gerät, um Träume aufzuzeichnen", "en": "A quirky device for recording dreams" },
    { "de": "Die albernste Regel in einem absurden Sport", "en": "The silliest rule in an absurd sport" },
    { "de": "Ein lustiges Synonym für Langeweile", "en": "A funny synonym for boredom" },
    { "de": "Die schrägste Erklärung für ein UFO-Sichtung", "en": "The quirkiest explanation for a UFO sighting" },
    { "de": "Ein erfundenes Musikinstrument mit einem komischen Klang", "en": "An invented musical instrument with a funny sound" },
    { "de": "Die witzigste Idee für eine intergalaktische Reality-Show", "en": "The funniest idea for an intergalactic reality show" },
    { "de": "Ein skurriles Haustier für einen Superhelden", "en": "A quirky pet for a superhero" },
    { "de": "Die absurdeste Begründung, warum Katzen denken, sie seien die Herren der Welt", "en": "The most absurd reason why cats think they are the rulers of the world" },
    { "de": "Ein seltsames Geräusch, das man im Weltraum hören könnte", "en": "A strange sound you might hear in outer space" },
    { "de": "Die albernste Ausrede für das Platzen eines Luftballons", "en": "The silliest excuse for a balloon popping" },
    { "de": "Ein skurriler Grund für einen intergalaktischen Handelskrieg", "en": "A quirky reason for an intergalactic trade war" },
    { "de": "Die witzigste Begründung für die Existenz von Außerirdischen", "en": "The funniest explanation for the existence of aliens" },
    { "de": "Ein lustiges Tier, das in einem Zirkus auftreten könnte", "en": "A funny animal that could perform in a circus" },
    { "de": "Die absurdeste Regel in einem Kinderbrettspiel", "en": "The most absurd rule in a children's board game" },
    { "de": "Ein seltsames Phänomen, das in einem Paralleluniversum normal ist", "en": "A strange phenomenon that is normal in a parallel universe" },
    { "de": "Die witzigste Methode, um einen Kaktus zu umarmen", "en": "The funniest method to hug a cactus" },
    { "de": "Ein erfundenes Gericht mit ungewöhnlichen Zutaten", "en": "An invented dish with unusual ingredients" },
    { "de": "Die albernste Begründung für das Vergessen eines Passworts", "en": "The silliest excuse for forgetting a password" },
    { "de": "Ein skurriles Verhalten eines Roboters", "en": "Quirky behavior of a robot" },
    { "de": "Die lustigste Begründung für das Scheitern einer Zeitmaschine", "en": "The funniest reason for the failure of a time machine" },
    { "de": "Ein erfundener Superheld, der nur Alltagsprobleme löst", "en": "An invented superhero who only solves everyday problems" },
    { "de": "Die witzigste Entschuldigung für das Verlieren einer Socke", "en": "The funniest excuse for losing a sock" },
    { "de": "Etwas Sexy", "en": "Something Sexy" },
    { "de": "Ein unangebrachtes Geburtstags geschenk", "en": "An appropriate birthday present" },
    { "de": "Etwas das man einen Schwarzen nicht nennen möchte", "en": "Something you dont want to call a black person"},
    { "de": "Der sinnloseste Gegenstand", "en": "The most pointless object" },
    { "de": "Etwas, das du nicht essen würdest", "en": "Something you wouldn't eat" },
    { "de": "Der ungewöhnlichste Ort für eine Party", "en": "The most unusual place for a party" },
    { "de": "Die langweiligste Tätigkeit", "en": "The most boring activity" },
    { "de": "Etwas, das nur Kinder lieben", "en": "Something only children love" },
    { "de": "Der schlechteste Filmschauspieler", "en": "The worst movie actor" },
    { "de": "Der schnellste weg entlassen zu werden", "en": "The quickest way to get fired" },
    { "de": "Etwas das man im Gefängnis handeln würde", "en": "Something you would trade in prison" },
    { "de": "Etwas das als elegant gilt wenn man reich ist aber billig wenn man arm ist", "en": "What is Classy If You are Rich But Trashy If You are Poor" },
    { "de": "Etwas das eine Frau hat aber ein Mann nicht", "en": "Something a Woman has that a man does not" },
    { "de": "Etwas das man einem kind nicht geben sollte", "en": "Something you sould not give to a child" },
    { "de": "Was wird zum Weltuntergang führen", "en": "What will cause the end of the world" },
    { "de": "Etwas ungewöhnliches was man auf der toilette machen kann", "en": "Something unusual you can do on the toilet" },
    { "de": "Ein Geschenk welches man nicht zu Weihnachten bekommen möchte", "en": "A present you do not want to get for christmas" },
    { "de": "Ein Gegenstand das man nicht in seinem Happymeal finden möchte", "en": "Something you do not want to find in your happymeal" },
    { "de": "Wieso tut mir alles weh", "en": "Why do I hurt all over" }

]


let used = [];
let reset = false;

export function getRandomSaying() {

    if (sayings.length !== 0) {
        const randomIndex = Math.floor(Math.random() * sayings.length);
        const randomSaying = sayings.splice(randomIndex, 1)[0];

        used.push(randomSaying);

        // Update the 'previous' variable
        return randomSaying;
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
