const IMAGES = {
  images: [
    {
      title: "Bear",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/bear.jpg",
    },
    {
      title: "Cat",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/cats.jpg",
    },
    {
      title: "Toll",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/toll.jpg",
    },
    {
      title: "Japan",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/japan.jpg",
    },
    {
      title: "Market",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/market.jpg",
    },
    {
      title: "Work setup",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/setup.jpg",
    },
  ],
  vector: [
    {
      title: "Vector 1",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-1.jpg",
    },
    {
      title: "Vector 2",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-2.jpg",
    },
    {
      title: "Vector 3",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-3.jpg",
    },
    {
      title: "Vector 4",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-4.jpg",
    },
    {
      title: "Vector 5",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-5.jpg",
    },
    {
      title: "Vector 6",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/vector-6.jpg",
    },
  ],
  illustrations: [
    {
      title: "Search Engine",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-1.png",
    },
    {
      title: "Cooking",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-2.png",
    },
    {
      title: "Fun moments",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-3.png",
    },
    {
      title: "By my car",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-4.png",
    },
    {
      title: "Photographer",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-5.png",
    },
    {
      title: "Travelling",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/illustration-6.png",
    },
  ],
  icons: [
    {
      title: "Apple",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/apple-icon.png",
    },
    {
      title: "IOS photos",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/ios-photos.png",
    },
    {
      title: "Chrome",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/chrome.png",
    },
    {
      title: "Discord",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/discord.png",
    },
    {
      title: "Steam",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/steam.png",
    },
    {
      title: "Gmail",
      src: "https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/gmail.png",
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
    description.innerHTML = `<div><h5>${title}</h5><span><small>245 likes | 35 shares</small><span></div><img src="https://raw.githubusercontent.com/romeshkosme/iCodeThis/master/1%20March/assets/bookmark.png" alt="Bookmark icon" id="bookmark" />`;

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
