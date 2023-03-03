const SONGS = [
  {
    img: "./assets/tegipannu.jpg",
    name: "Schedule",
    singer: "Tegi Pannu",
    views: "2,392,209",
  },
  {
    img: "./assets/apdhillon.jpg",
    name: "Brown Munde",
    singer: "AP Dhillon",
    views: "11,322,109",
  },
  {
    img: "./assets/bpraak.jpg",
    name: "Mann Bharya",
    singer: "B Praak",
    views: "8,392,209",
  },
  {
    img: "./assets/divine.jpg",
    name: "Kaam 25",
    singer: "Divine",
    views: "4,392,119",
  },
  {
    img: "./assets/shubh.jpg",
    name: "LOVE",
    singer: "Shubh",
    views: "5,392,209",
  },
];

function createSongNumber(number) {
  const ELEMENT = document.createElement("div");
  ELEMENT.className = "song-number";
  ELEMENT.innerHTML = `<span>${number}</span>`;
  return ELEMENT;
}
function createSongContent({ img = "", name, singer }) {
  const ELEMENT = document.createElement("div");
  ELEMENT.className = "song-content";
  ELEMENT.innerHTML = `
  <img src="${img}" alt="singer photo" height="50" width="50" >
  <div>
  <h4>${name}</h4>
  <p><small>${singer}</small></p>
  </div>
  `;
  return ELEMENT;
}
function createSongViews(views) {
  const ELEMENT = document.createElement("div");
  ELEMENT.className = "song-views";
  ELEMENT.innerHTML = `<p>${views}</p>`;
  return ELEMENT;
}

document.addEventListener("load", loadSongs());

function loadSongs() {
  const SONGS_ELEM = document.getElementById("songs");

  for (let index = 0; index < SONGS.length; index++) {
    const SONG = document.createElement("div");
    SONG.className = "song";
    SONG.appendChild(createSongNumber(index + 1));
    SONG.appendChild(createSongContent(SONGS[index]));
    SONG.appendChild(createSongViews(SONGS[index]["views"]));
    SONGS_ELEM.appendChild(SONG);
  }
}
