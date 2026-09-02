const sections = [
  {
    id: "about",
    title: "About Me",
    slot: "top",
    icon: "profile",
  },
  {
    id: "music",
    title: "Project: Music",
    slot: "upper-left",
    icon: "music",
  },
  {
    id: "game",
    title: "Project: Game",
    slot: "upper-right",
    icon: "game",
  },
  {
    id: "ai-pipeline",
    title: "AI Pipeline",
    slot: "lower-left",
    icon: "nodes",
  },
  {
    id: "work",
    title: "Work",
    slot: "lower-right",
    icon: "terminal",
  },
  {
    id: "contact",
    title: "Contact",
    slot: "bottom",
    icon: "contact",
  },
];

const iconTemplates = {
  profile: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="21" r="10"></circle>
      <path d="M16 52c1.5-10 7.4-16 16-16s14.5 6 16 16"></path>
    </svg>
  `,
  music: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M23 44V16l25-5v28"></path>
      <circle cx="17" cy="45" r="7"></circle>
      <circle cx="42" cy="40" r="7"></circle>
      <path d="M23 24l25-5"></path>
    </svg>
  `,
  game: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M19 26h26c6 0 10 6 11 16 .7 7-5.7 10-10 5l-5-6H23l-5 6c-4.3 5-10.7 2-10-5 1-10 5-16 11-16Z"></path>
      <path d="M21 35h10M26 30v10"></path>
      <circle cx="43" cy="34" r="2"></circle>
      <circle cx="50" cy="39" r="2"></circle>
    </svg>
  `,
  nodes: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="18" cy="20" r="5"></circle>
      <circle cx="46" cy="18" r="5"></circle>
      <circle cx="31" cy="33" r="5"></circle>
      <circle cx="19" cy="47" r="5"></circle>
      <circle cx="48" cy="45" r="5"></circle>
      <path d="M22 23l5 6M42 21l-7 8M27 37l-5 6M36 36l8 6M24 20h17M24 47h19"></path>
    </svg>
  `,
  terminal: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="14" width="44" height="36" rx="4"></rect>
      <path d="M10 24h44M20 35l7 6-7 6M33 47h13"></path>
    </svg>
  `,
  contact: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="18" width="44" height="32" rx="4"></rect>
      <path d="M13 22l19 16 19-16"></path>
      <path d="M45 43c-3.4 2.1-8 3.2-13 3.2-10 0-18-5.6-18-14S22 18 32 18s18 5.6 18 14c0 2.5-.7 4.8-2 6.8"></path>
    </svg>
  `,
};

const nodeLayer = document.querySelector(".node-layer");
const selectedSection = document.querySelector("#selected-section");
const logoTile = document.querySelector(".logo-tile");
const logo = document.querySelector(".logo-mark");

function getTileMetrics() {
  const rect = logoTile.getBoundingClientRect();
  const gap = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tile-gap")) || 10;
  const distance = rect.height + gap;

  return {
    diagonalX: Math.cos(Math.PI / 6) * distance,
    diagonalY: distance / 2,
    distance,
  };
}

function pointForSlot(slot) {
  const { diagonalX, diagonalY, distance } = getTileMetrics();
  const positions = {
    top: { x: 0, y: -distance },
    "upper-right": { x: diagonalX, y: -diagonalY },
    "lower-right": { x: diagonalX, y: diagonalY },
    bottom: { x: 0, y: distance },
    "lower-left": { x: -diagonalX, y: diagonalY },
    "upper-left": { x: -diagonalX, y: -diagonalY },
  };

  return positions[slot] || { x: 0, y: 0 };
}

function createNode(section, index) {
  const button = document.createElement("button");

  button.className = "hex";
  button.type = "button";
  button.dataset.nodeId = section.id;
  button.dataset.slot = section.slot;
  button.style.animationDelay = `${120 + index * 55}ms`;
  button.setAttribute("aria-label", `Open ${section.title}`);

  button.innerHTML = `
    <span class="hex-content">
      ${iconTemplates[section.icon]}
      <span class="hex-title">${section.title}</span>
    </span>
  `;

  button.addEventListener("click", () => selectNode(section.id));

  return button;
}

function renderNodes() {
  const fragment = document.createDocumentFragment();

  sections.forEach((section, index) => {
    fragment.append(createNode(section, index));
  });

  nodeLayer.replaceChildren(fragment);
}

function selectNode(id) {
  const section = sections.find((item) => item.id === id);
  if (!section) {
    return;
  }

  document.querySelectorAll(".hex[data-node-id]").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.nodeId === id);
  });

  selectedSection.textContent = `${section.title} selected`;
}

function handleLogoFallback() {
  logo.classList.add("is-missing");
}

function syncMap() {
  document.querySelectorAll(".hex[data-node-id]").forEach((node) => {
    const section = sections.find((item) => item.id === node.dataset.nodeId);
    if (!section) {
      return;
    }

    const point = pointForSlot(section.slot);
    node.style.setProperty("--x", `${point.x}px`);
    node.style.setProperty("--y", `${point.y}px`);
  });
}

renderNodes();
syncMap();

logo.addEventListener("error", handleLogoFallback);
window.addEventListener("resize", syncMap);
window.addEventListener("load", syncMap);
