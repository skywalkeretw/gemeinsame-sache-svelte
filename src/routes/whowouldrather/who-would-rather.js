let sayings = [
    { en: "get involved in a celebrity scandal?", de: "in einen Promi-Skandal verwickelt werden?" },
    { en: "become a YouTube star overnight?", de: "über Nacht ein YouTube-Star werden?" },
    { en: "Have tears in your eyes when you see baby animals?", de: "Tränen in den Augen haben, wenn Sie Babytiere sehen?" },
    { en: "delete your own Facebook account?", de: "Ihren eigenen Facebook-Account löschen?" },
    { en: "make yourself a monkey in the tram?", de: "sich im Straßenbahn zum Affen machen?" },
    { en: "mess with the staff in the restaurant?", de: "sich mit dem Personal im Restaurant anlegen?" },
    { en: "fly out of a club because of bad behavior?", de: "aus einem Club fliegen wegen schlechten Verhaltens?" },
    { en: "start a fight?", de: "einen Kampf beginnen?" },
    { en: "compliment a complete stranger?", de: "einem völlig Fremden ein Kompliment machen?" },
    { en: "donate all of his possessions to the world's poor?", de: "alle seine Besitztümer den Armen der Welt spenden?" },
    { en: "become Federal Chancellor?", de: "Bundeskanzler werden?" },
    { en: "emigrate overnight?", de: "über Nacht auswandern?" },
    { en: "go to a monastery voluntarily?", de: "freiwillig in ein Kloster gehen?" },
    { en: "Can't take a shower for a week?", de: "eine Woche lang nicht duschen können?" },
    { en: "only eat instant food?", de: "nur Fertiggerichte essen?" },
    { en: "steal a valuable coin from the museum?", de: "eine wertvolle Münze aus dem Museum stehlen?" },
    { en: "become a feline granny as you age?", de: "im Alter eine Katzenoma werden?" },
    { en: "end up on a stake in the Middle Ages?", de: "im Mittelalter auf dem Scheiterhaufen enden?" },
    { en: "adopt a child from Africa?", de: "ein Kind aus Afrika adoptieren?" },
    { en: "give up his job for the good of the relationship?", de: "seinen Job zugunsten der Beziehung aufgeben?" },
    { en: "fall into a depression when the mobile phone is lost?", de: "in Depressionen verfallen, wenn das Handy verloren geht?" },
    { en: "survive a week's party marathon?", de: "eine Party-Marathonwoche überstehen?" },
    { en: "found your own sect?", de: "eine eigene Sekte gründen?" },
    { en: "dye his hair green?", de: "sich die Haare grün färben?" },
    { en: "put on his sandals with socks?", de: "mit Socken Sandalen tragen?" },
    { en: "look better than the opposite sex?", de: "besser aussehen als das andere Geschlecht?" },
    { en: "rise to an international drug lord?", de: "zu einem internationalen Drogenboss aufsteigen?" },
    { en: "launder mafia money?", de: "Mafia-Geld waschen?" },
    { en: "cheat on his partner?", de: "seinen Partner betrügen?" },
    { en: "Take revenge?", de: "Rache nehmen?" },
    { en: "what to do with your manager for your career?", de: "was mit Ihrem Manager für Ihre Karriere tun?" },
    { en: "only with Kik clothes walk around?", de: "nur mit Kik-Kleidung herumlaufen?" },
    { en: "Get fat and fat in old age?", de: "im Alter dick und fett werden?" },
    { en: "taking food away from a homeless person?", de: "Essen von einem Obdachlosen wegnehmen?" },
    { en: "fake an orgasm?", de: "einen Orgasmus vortäuschen?" },
    { en: "have your gender changed?", de: "das Geschlecht ändern lassen?" },
    { en: "sell his eggs or sperm?", de: "seine Eier oder Samen verkaufen?" },
    { en: "put yourself in a box of wood lice for € 20?", de: "sich für 20 € in eine Kiste mit Holzwürmern setzen?" },
    { en: "let his parents disinherit him?", de: "sich von seinen Eltern enterben lassen?" },
    { en: "spontaneously get naked now?", de: "jetzt spontan nackt werden?" },
    { en: "play Russian roulette for one million euros?", de: "Russisches Roulette für eine Million Euro spielen?" },
    { en: "sleep with a very nice but ugly person?", de: "mit einer sehr netten, aber hässlichen Person schlafen?" },
    { en: "leave the light on in the bedroom?", de: "das Licht im Schlafzimmer anlassen?" },
    { en: "eat spaghetti bolognese from the other person's bare belly?", de: "Spaghetti Bolognese vom nackten Bauch der anderen Person essen?" },
    { en: "do without showering?", de: "auf das Duschen verzichten?" },
    { en: "sleep with a totally stupid but pretty person?", de: "mit einer völlig dummen, aber hübschen Person schlafen?" },
    { en: "leave the empty toothpaste tube lying around?", de: "die leere Zahnpastatube liegen lassen?" },
    { en: "take out the garbage before the garbage disposal comes?", de: "den Müll vor der Müllabfuhr rausbringen?" },
    { en: "lying awake all night after watching a horror movie?", de: "nach dem Ansehen eines Horrorfilms die ganze Nacht wach liegen?" },
    { en: "tell the best fairy tales?", de: "die besten Märchen erzählen?" },
    { en: "live like a mess?", de: "wie ein Durcheinander leben?" },
    { en: "leave the house without a shower?", de: "das Haus ohne Dusche verlassen?" },
    { en: "not changing his clothes for a week?", de: "eine Woche lang die Kleidung nicht wechseln?" },
    { en: "do the craziest things?", de: "die verrücktesten Dinge tun?" },
    { en: "steal a friend's partner?", de: "den Partner eines Freundes stehlen?" },
    { en: "provoke a quarrel?", de: "einen Streit provozieren?" },
    { en: "drink the bar empty?", de: "die Bar leertrinken?" },
    { en: "help in emergency situations?", de: "in Notfallsituationen helfen?" },
    { en: "are good as a DJ?", de: "gut als DJ sein?" },
    { en: "shave his hair?", de: "seine Haare rasieren?" },
    { en: "walking around with dyed green hair?", de: "mit gefärbten grünen Haaren herumlaufen?" },
    { en: "invest his money in junk?", de: "sein Geld in Schrott investieren?" },
    { en: "are good as a supervisor?", de: "gut als Aufsichtsperson sein?" },
    { en: "hit others in the pan?", de: "andere in die Pfanne hauen?" },
    { en: "get along without sex for half a year?", de: "ein halbes Jahr ohne Sex auskommen?" },
    { en: "watch/read pornographic things?", de: "pornografische Dinge ansehen/lesen?" },
    { en: "get a tattoo on your calf?", de: "sich ein Tattoo auf die Wade stechen lassen?" },
    { en: "be able to go without your cell phone for a longer period of time?", de: "länger ohne Handy auskommen können?" },
    { en: "do embarrassing things in public?", de: "peinliche Dinge in der Öffentlichkeit machen?" },
    { en: "walk barefoot with smelly feet?", de: "barfuß mit stinkenden Füßen herumlaufen?" },
    { en: "complain loudly about the food in the restaurant?", de: "laut über das Essen im Restaurant klagen?" },
    { en: "someday become famous?", de: "irgendwann berühmt werden?" },
    { en: "be able to remain silent for a long time?", de: "lange schweigen können?" },
    { en: "throw the best party?", de: "die beste Party schmeißen?" },
    { en: "drink no alcohol?", de: "keinen Alkohol trinken?" },
    { en: "go to a Wolfgang Petry concert?", de: "auf ein Konzert von Wolfgang Petry gehen?" },
    { en: "spend a whole day in bed?", de: "einen ganzen Tag im Bett verbringen?" },
    { en: "skip school?", de: "die Schule schwänzen?" },
    { en: "end up in jail?", de: "im Gefängnis landen?" },
    { en: "can live without sweets?", de: "ohne Süßigkeiten leben können?" },
    { en: "get along without the internet?", de: "ohne Internet auskommen können?" },
    { en: "end up in the hospital for a chocolate overdose?", de: "wegen einer Schokoladenüberdosis im Krankenhaus landen?" },
    { en: "end up on a pyre as a heretic in the Middle Ages?", de: "auf einem Scheiterhaufen als Ketzer im Mittelalter enden?" },
    { en: "survive in the wild?", de: "im Wald überleben können?" },
    { en: "be disinherited?", de: "enterbt werden?" },
    { en: "are suitable as an attraction in the ghost train?", de: "als Attraktion in der Geisterbahn geeignet sein?" },
    { en: "steal the money from a homeless man's hat?", de: "das Geld aus dem Hut eines Obdachlosen stehlen?" },
    { en: "smacking and farting loudly in a fine restaurant?", de: "laut schmatzen und furzen in einem feinen Restaurant?" },
    { en: "strip in front of the assembled team?", de: "sich vor dem versammelten Team ausziehen?" },
    { en: "Pass on secrets?", de: "Geheimnisse weitergeben?" },
    { en: "have a blind date?", de: "ein Blind Date haben?" },
    { en: "lose his driver's license?", de: "seinen Führerschein verlieren?" },
    { en: "never exercise?", de: "nie Sport treiben?" },
    { en: "fall asleep on the toilet?", de: "auf der Toilette einschlafen?" },
    { en: "take part in the jungle camp?", de: "am Dschungelcamp teilnehmen?" },
    { en: "get the lead role in a feature film?", de: "die Hauptrolle in einem Spielfilm bekommen?" },
    { en: "freak out?", de: "ausflippen?" },
    { en: "become a YouTube celebrity?", de: "ein YouTube-Star werden?" },
    { en: "end up in a fight?", de: "in eine Schlägerei verwickelt werden?" },
    { en: "end up in hell instead of heaven?", de: "in der Hölle statt im Himmel landen?" }

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

export function numbers() {
    return {
        left: sayings.length,
        used: used.length
    }
}
