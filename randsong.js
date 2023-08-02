// This  script will generate a random song from Post Malone's fifth studio album 'Austin'
const austin = () => {
    let num = Math.floor(Math.random() * 18);
    switch (num) {
        case 0:
            console.log(`1. “Don’t Understand”`);
            break;
        case 1:
            console.log(`2. “Something Real”`);
            break;
        case 2:
            console.log(`3. “Chemical”`);
            break;
        case 3:
            console.log(`4. “Novacandy”`);
            break;
        case 4:
            console.log(`5. “Mourning”`);
            break;
        case 5:
            console.log(`6. “Too Cool to Die”`);
            break;
        case 6:
            console.log(`7. “Sign Me Up”`);
            break;
        case 7:
            console.log(`8. “Socialite”`);
            break;
        case 8:
            console.log(`9. “Overdrive”`);
            break;
        case 9:
            console.log(`10. “Speedometer”`);
            break;
        case 10:
            console.log(`11. “Hold My Breath”`);
            break;
        case 11:
            console.log(`12. “Enough Is Enough”`);
            break;
        case 12:
            console.log(`13. “Texas Tea”`);
            break;
        case 13:
            console.log(`14. “Buyer Beware”`);
            break;
        case 14:
            console.log(`15. “Landmine”`);
            break;
        case 15:
            console.log(`16. “Green Thumb”`);
            break;
        case 16:
            console.log(`17. “Laugh It Off”`);
            break;
        case 17:
            console.log(`18. “Joy”`);
            break;
        default:
            console.log(`error. a song could not be generated`)
    }
}

austin();
