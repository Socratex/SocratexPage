const sections = [
  {
    id: "about",
    title: "About Me",
    angle: -90,
    icon: "profile",
  },
  {
    id: "music",
    title: "Project: Music",
    angle: -150,
    icon: "music",
  },
  {
    id: "game",
    title: "Project: Game",
    angle: -30,
    icon: "game",
  },
  {
    id: "ai-pipeline",
    title: "AI Pipeline",
    angle: 150,
    icon: "nodes",
  },
  {
    id: "work",
    title: "Work",
    angle: 30,
    icon: "terminal",
  },
  {
    id: "contact",
    title: "Contact",
    angle: 90,
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
const connectorLayer = document.querySelector(".connector-layer");
const selectedSection = document.querySelector("#selected-section");
const centerHex = document.querySelector(".hex-center");
const logo = document.querySelector(".logo-mark");

function getOrbit() {
  return {
    x: Math.min(window.innerWidth * 0.34, 390),
    y: Math.min(window.innerHeight * 0.29, 252),
  };
}

function pointForAngle(angle) {
  const radians = (angle * Math.PI) / 180;
  const orbit = getOrbit();

  return {
    x: Math.cos(radians) * orbit.x,
    y: Math.sin(radians) * orbit.y,
  };
}

function createNode(section, index) {
  const point = pointForAngle(section.angle);
  const button = document.createElement("button");

  button.className = "hex";
  button.type = "button";
  button.dataset.nodeId = section.id;
  button.style.setProperty("--x", `${point.x}px`);
  button.style.setProperty("--y", `${point.y}px`);
  button.style.animationDelay = `${120 + index * 55}ms`;
  button.setAttribute("aria-label", `Open ${section.title}`);

  button.innerHTML = `
    <span class="hex-content">
      ${iconTemplates[section.icon]}
      <span class="hex-title">${section.title}</span>
    </span>
  `;

  button.addEventListener("click", () => selectNode(section.id));
  button.addEventListener("mouseenter", () => setConnectorState(section.id, true));
  button.addEventListener("mouseleave", () => setConnectorState(section.id, false));
  button.addEventListener("focus", () => setConnectorState(section.id, true));
  button.addEventListener("blur", () => setConnectorState(section.id, false));

  return button;
}

function renderNodes() {
  const fragment = document.createDocumentFragment();

  sections.forEach((section, index) => {
    fragment.append(createNode(section, index));
  });

  nodeLayer.replaceChildren(fragment);
}

function centerOf(element) {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    radius: Math.min(rect.width, rect.height) * 0.43,
  };
}

function shortenedLine(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;

  return {
    x1: from.x + ux * from.radius,
    y1: from.y + uy * from.radius,
    x2: to.x - ux * to.radius,
    y2: to.y - uy * to.radius,
  };
}

function createSvgLine(kind, id, line) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", "line");
  element.dataset.nodeId = id;
  element.classList.add(kind);
  element.setAttribute("x1", line.x1);
  element.setAttribute("y1", line.y1);
  element.setAttribute("x2", line.x2);
  element.setAttribute("y2", line.y2);
  return element;
}

function renderConnectors() {
  if (window.matchMedia("(max-width: 920px), (max-height: 650px)").matches) {
    connectorLayer.replaceChildren();
    return;
  }

  const center = centerOf(centerHex);
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const node = document.querySelector(`[data-node-id="${section.id}"]`);
    if (!node) {
      return;
    }

    const line = shortenedLine(center, centerOf(node));
    fragment.append(createSvgLine("connector", section.id, line));
    fragment.append(createSvgLine("connector-trace", section.id, line));
  });

  connectorLayer.replaceChildren(fragment);
}

function setConnectorState(id, isActive) {
  document.querySelectorAll(`[data-node-id="${id}"]`).forEach((element) => {
    if (element.classList.contains("connector") || element.classList.contains("connector-trace")) {
      element.classList.toggle("is-active", isActive);
    }
  });
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

    const point = pointForAngle(section.angle);
    node.style.setProperty("--x", `${point.x}px`);
    node.style.setProperty("--y", `${point.y}px`);
  });

  window.requestAnimationFrame(renderConnectors);
}

renderNodes();
renderConnectors();

logo.addEventListener("error", handleLogoFallback);
window.addEventListener("resize", syncMap);
window.addEventListener("load", renderConnectors);
