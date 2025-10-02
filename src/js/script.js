// Mapping des boutons et des URLs
const pages = {
    main: "https://anonypos-dz.github.io/Anonypos",
    tools_btn: "./tools/",
    games_btn: "./games/",
    music_btn: "./music/",
    movies_btn: "./movies/"
};

// Parcours des boutons
for (const [id, url] of Object.entries(pages)) {
    const btn = document.getElementById(id);
    if (!btn) continue; // Ignore si le bouton n'existe pas
    btn.onclick = () => {
        // main ouvre dans un nouvel onglet, les autres dans la même page
        window.open(url, "_self");
    };
}

if (/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)) {
  const css = document.getElementById("page_css");
  css.href = "./src/css/style_mobile.css";
  document.getElementById("sub_title").remove();
} else {
  const css = document.getElementById("page_css");
  css.href = "./src/css/style.css";

}
