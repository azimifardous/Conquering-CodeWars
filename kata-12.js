/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo! */

const areYouPlayingBanjo = (name) => {
    /* startsWith() method returns true if a string starts with specicif
    string of letters, otherwise returns false. */
    if (name.startsWith("r") || name.startsWith("R")) {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}
console.log(areYouPlayingBanjo("Ray")); // Ray plays banjo
console.log(areYouPlayingBanjo("John")); // John does not play banjo