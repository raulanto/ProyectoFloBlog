
function setupRatingInteraction(ratingClass: string): void {
    const svgs = (document.querySelector(`.${ratingClass}`) as HTMLElement).children;

    for (let i = 0; i < svgs.length; i++) {
        (svgs[i] as HTMLElement).onclick = () => {
            for (let j = 0; j <= i; j++) {
                (svgs[j] as HTMLElement).classList.add("fill-yellow-300");
            }
            for (let k = i + 1; k < svgs.length; k++) {
                (svgs[k] as HTMLElement).classList.remove("fill-yellow-300");
            }
        };
    }
}


setupRatingInteraction("rating1");
setupRatingInteraction("rating2");
setupRatingInteraction("rating3");
setupRatingInteraction("rating4");
setupRatingInteraction("rating5");
setupRatingInteraction("rating6");
setupRatingInteraction("rating7");
setupRatingInteraction("rating8");
setupRatingInteraction("rating9");



