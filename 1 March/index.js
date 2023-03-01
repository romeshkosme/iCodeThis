const IMAGES = {
  images: [
    {
      title: "Bear",
      src: "./assets/bear.jpg",
    },
    {
      title: "Cat",
      src: "./assets/cats.jpg",
    },
    {
      title: "Toll",
      src: "./assets/toll.jpg",
    },
    {
      title: "Japan",
      src: "./assets/japan.jpg",
    },
    {
      title: "Market",
      src: "./assets/market.jpg",
    },
    {
      title: "Work setup",
      src: "./assets/setup.jpg",
    },
  ],
  vector: [
    {
      title: "Vector 1",
      src: "./assets/vector-1.jpg",
    },
    {
      title: "Vector 2",
      src: "./assets/vector-2.jpg",
    },
    {
      title: "Vector 3",
      src: "./assets/vector-3.jpg",
    },
    {
      title: "Vector 4",
      src: "./assets/vector-4.jpg",
    },
    {
      title: "Vector 5",
      src: "./assets/vector-5.jpg",
    },
    {
      title: "Vector 6",
      src: "./assets/vector-6.jpg",
    },
  ],
  illustrations: [
    {
      title: "Search Engine",
      src: "./assets/illustration-1.png",
    },
    {
      title: "Cooking",
      src: "./assets/illustration-2.png",
    },
    {
      title: "Fun moments",
      src: "./assets/illustration-3.png",
    },
    {
      title: "By my car",
      src: "./assets/illustration-4.png",
    },
    {
      title: "Photographer",
      src: "./assets/illustration-5.png",
    },
    {
      title: "Travelling",
      src: "./assets/illustration-6.png",
    },
  ],
  icons: [
    {
      title: "Apple",
      src: "./assets/apple-icon.png",
    },
    {
      title: "IOS photos",
      src: "./assets/ios-photos.png",
    },
    {
      title: "Chrome",
      src: "./assets/chrome.png",
    },
    {
      title: "Discord",
      src: "./assets/discord.png",
    },
    {
      title: "Steam",
      src: "./assets/steam.png",
    },
    {
      title: "Gmail",
      src: "./assets/gmail.png",
    },
  ],
};
appendImages();

function appendImages(category = "images") {
  const images = document.getElementById("images-section");
  images.innerHTML = "";
  if (!IMAGES[category]) {
    category = "images";
  }
  for (let { title, src } of IMAGES[category]) {
    const imgParent = document.createElement("div");
    imgParent.className = "image-container";

    // description
    const description = document.createElement("div");
    description.className = "image-description";
    description.innerHTML = `<div><h5>${title}</h5><span><small>245 likes | 35 shares</small><span></div><img src="./assets/bookmark.png" alt="Bookmark icon" id="bookmark" />`;

    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgParent.appendChild(imgElement);
    imgParent.appendChild(description);
    images.appendChild(imgParent);
  }
}

document.getElementById("nav-list").addEventListener("click", (e) => {
  appendImages(e.target.id);
});
