function searchVideos() {
  window.location.href = "/search";
}
const videoItems = [
  {
    id: 1,
    title: "Windows 95 Installation Guide",
    views: 1337,
    description:
      "Learn how to install Windows 95 step by step on your computer.",
    image: "https://example.com/images/windows95-install.jpg",
  },
  {
    id: 2,
    title: "How to use Windows 98",
    views: 2345,
    description:
      "A comprehensive guide on how to navigate and use Windows 98 efficiently.",
    image: "https://example.com/images/windows98-guide.jpg",
  },
  {
    id: 3,
    title: "Windows XP Tutorial",
    views: 3456,
    description:
      "Explore the features and functions of Windows XP in this tutorial.",
    image: "https://example.com/images/windowsxp-tutorial.jpg",
  },
  {
    id: 4,
    title: "Windows Vista Tips and Tricks",
    views: 4567,
    description:
      "Boost your productivity with these Windows Vista tips and tricks.",
    image: "https://example.com/images/windowsvista-tips.jpg",
  },
  {
    id: 5,
    title: "Installing Windows 7 on a PC",
    views: 5678,
    description:
      "Follow this guide to install Windows 7 seamlessly on your PC.",
    image: "https://example.com/images/windows7-install.jpg",
  },
  {
    id: 6,
    title: "Exploring Windows 8 Features",
    views: 6789,
    description:
      "Discover the new features and functionalities introduced in Windows 8.",
    image: "https://example.com/images/windows8-features.jpg",
  },
  {
    id: 7,
    title: "Top 10 Windows 10 Shortcuts",
    views: 7890,
    description:
      "Speed up your work with these top 10 Windows 10 keyboard shortcuts.",
    image: "https://example.com/images/windows10-shortcuts.jpg",
  },
  {
    id: 8,
    title: "What's New in Windows 11",
    views: 8901,
    description:
      "An overview of the latest features in Microsoft's Windows 11 OS.",
    image: "https://example.com/images/windows11-new.jpg",
  },
  {
    id: 9,
    title: "Troubleshooting Common Windows Errors",
    views: 9012,
    description:
      "Learn to troubleshoot and fix common errors across various Windows versions.",
    image: "https://example.com/images/windows-errors.jpg",
  },
  {
    id: 10,
    title: "Windows Registry Editor Explained",
    views: 10234,
    description:
      "Understand the Windows Registry Editor and how to use it safely.",
    image: "https://example.com/images/windows-registry.jpg",
  },
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
