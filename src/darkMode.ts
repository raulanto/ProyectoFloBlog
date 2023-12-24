function darkModeListener() {
	document.querySelector("html").classList.toggle("dark");
	let iconMoon = document.querySelector;
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);

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

