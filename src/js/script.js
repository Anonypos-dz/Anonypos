const main = document.getElementById("main");
const tools_btn = document.getElementById("tools_btn");
const games_btn = document.getElementById("games_btn");
const music_btn = document.getElementById("music_btn");
const movies_btn = document.getElementById("movies_btn");
main.onclick = () => {
  window.open("https://anonypos-dz.github.io/Anonypos");
};
tools_btn.onclick = () => {
  window.open("./tools/","_self");
};
games_btn.onclick = () => {
  window.open("./games/","_self");
};
music_btn.onclick = () => {
  window.open("./music/","_self");
};
movies_btn.onclick = () => {
  window.open("./movies/","_self");
};
