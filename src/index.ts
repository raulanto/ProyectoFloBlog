import './dial';

function darkModeListener() {
	document.querySelector("html").classList.toggle("dark");
	let iconMoon = document.querySelector;
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);

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



//Theme dark o light pc
if (
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}


localStorage.theme = "light";
localStorage.theme = "dark";
localStorage.removeItem("theme");

