import { writable } from "svelte/store";

const languageStore = writable("en")
languageStore.toggleLanguage = () => {
    languageStore.update(currentLanguage => {
        return currentLanguage === "en" ? "de" : "en"
    });
}

export default languageStore