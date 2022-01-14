export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show); // if show === true then remove 'hidden' class, if show === false then add 'hidden' class
};

export const toggleRain = function toggleRain(show) {
  document.querySelector(".foreground-rain").classList.toggle("hidden", !show);
};
