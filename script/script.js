// JSON dummy data
const videoItems = [
  {
    id: 1,
    title: "Windows 95 Installation Guide",
    views: 1337,
  },
  { id: 2, title: "How to use Windows 98", views: 2345 },
  { id: 3, title: "Windows XP Tutorial", views: 3456 },
];

// Map over the video items and create a string of HTML
const videoGridHtml = videoItems
  .map((item) => {
    return `
      <div class="video-item"
        onclick="window.location.href = '/watch?id=${item.id}'"
      >
        <div class="video-thumbnail"></div>
        <div class="video-title">${item.title}</div>
        <div class="video-info">Views: ${item.views}</div>
      </div>
    `;
  })
  .join("");

document.querySelector(".video-grid").innerHTML = videoGridHtml;

const url = new URL(window.location.href);

// Access the URLSearchParams object
const params = new URLSearchParams(url.search);

// Get specific parameters
const id = params.get("id"); // 'John'
console.log(id);

const title = document.querySelector(`.video-info .video-title`);
const description = document.querySelector(`.video-info .video-description`);
const img = document.querySelector(`.video-info .video-player`);

title.innerHTML = videoItems[id - 1].title;
description.innerHTML = videoItems[id - 1].description;
img.src = videoItems[id - 1].img;
