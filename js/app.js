const mainSections = [
  {
    id: "about",
    title: "About Me",
    slot: "upper-left",
    icon: "profile",
    children: [
      { id: "photo", title: "My Photo", icon: "photo", action: "none" },
      { id: "traits", title: "Traits", icon: "spark", action: "panel" },
      { id: "about-philosophy", title: "Philosophy", icon: "mind", action: "panel" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    slot: "upper-right",
    icon: "nodes",
    children: [
      { id: "music", title: "Music", icon: "music", action: "url", url: "https://soundcloud.com/rexcoast" },
      {
        id: "game",
        title: "Game",
        icon: "game",
        action: "panel",
        url: "https://sites.google.com/view/riftbound",
        linkLabel: "Open Riftbound",
      },
      {
        id: "ai-pipeline",
        title: "AI Pipeline",
        icon: "nodes",
        action: "panel",
        url: "https://github.com/Socratex/SocratexAI",
        linkLabel: "Open SocratexAI",
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    slot: "lower-left",
    icon: "terminal",
    children: [
      { id: "stack", title: "Stack", icon: "terminal", action: "panel" },
      { id: "work-philosophy", title: "Philosophy", icon: "mind", action: "panel" },
      { id: "history", title: "History", icon: "history", action: "panel" },
      { id: "skills", title: "Skills", icon: "skills", action: "panel" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    slot: "lower-right",
    icon: "contact",
    children: [
      { id: "facebook", title: "Facebook", icon: "facebook", action: "url", url: "https://www.facebook.com/socratex" },
      {
        id: "discord",
        title: "Discord",
        icon: "discord",
        action: "url",
        url: "https://discord.com/users/248187684541956096",
      },
      {
        id: "email",
        title: "Email",
        icon: "email",
        action: "url",
        url: "mailto:michal.jasinski.programmer@gmail.com",
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        icon: "linkedin",
        action: "url",
        url: "https://www.linkedin.com/in/michaljasinskiprogrammer/",
      },
    ],
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
    </svg>
  `,
  photo: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="13" y="17" width="38" height="31" rx="4"></rect>
      <circle cx="25" cy="28" r="5"></circle>
      <path d="M16 45l12-12 8 7 6-6 8 9"></path>
    </svg>
  `,
  spark: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 9l5 17 17 6-17 6-5 17-6-17-16-6 16-6 6-17Z"></path>
      <path d="M49 8l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z"></path>
    </svg>
  `,
  mind: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 50V38h-7l5-9c0-10 7-17 18-17 9 0 16 6 16 15 0 6-3 10-8 13v10"></path>
      <path d="M31 26h14M31 34h10"></path>
    </svg>
  `,
  history: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 21a19 19 0 1 1-2 20"></path>
      <path d="M18 21H8M18 21v-10M32 21v13l9 6"></path>
    </svg>
  `,
  skills: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 18h12v12H18zM34 18h12v12H34zM18 34h12v12H18zM34 34h12v12H34z"></path>
    </svg>
  `,
  facebook: `
    <svg class="hex-icon text-icon" viewBox="0 0 64 64" aria-hidden="true">
      <text x="32" y="45" text-anchor="middle">f</text>
    </svg>
  `,
  discord: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M21 22c7-4 15-4 22 0l4 20c-4 4-9 6-15 6s-11-2-15-6l4-20Z"></path>
      <circle cx="27" cy="34" r="2"></circle>
      <circle cx="37" cy="34" r="2"></circle>
      <path d="M27 42c3 2 7 2 10 0"></path>
    </svg>
  `,
  email: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="18" width="44" height="32" rx="4"></rect>
      <path d="M13 22l19 16 19-16"></path>
    </svg>
  `,
  linkedin: `
    <svg class="hex-icon text-icon" viewBox="0 0 64 64" aria-hidden="true">
      <text x="32" y="42" text-anchor="middle">in</text>
    </svg>
  `,
  back: `
    <svg class="hex-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M38 16L22 32l16 16"></path>
      <path d="M24 32h28"></path>
    </svg>
  `,
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor, neque vitae efficitur cursus, justo nibh gravida libero, vitae pretium mi sem id lorem. Donec non arcu at ipsum fermentum luctus. Suspendisse potenti. Curabitur sit amet magna non erat pulvinar dictum. Praesent sed nibh vel erat consequat gravida.";

const nodeLayer = document.querySelector(".node-layer");
const subnodeLayer = document.querySelector(".subnode-layer");
const mapStage = document.querySelector(".map-stage");
const logoTile = document.querySelector(".logo-tile");
const logo = document.querySelector(".logo-mark");
const overlay = document.querySelector(".content-overlay");
const contentTitle = document.querySelector("#content-title");
const contentLink = document.querySelector("#content-link");
const contentCopy = document.querySelector("#content-copy");
const closeButton = document.querySelector(".content-close");
const mobileMapQuery = window.matchMedia("(max-width: 640px)");

let activeSectionId = null;
let subnodeRenderToken = 0;

const backNode = {
  id: "back",
  title: "Back",
  icon: "back",
  action: "back",
};

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
  const { diagonalX, diagonalY } = getTileMetrics();
  const positions = {
    "upper-right": { x: diagonalX, y: -diagonalY },
    "lower-right": { x: diagonalX, y: diagonalY },
    "lower-left": { x: -diagonalX, y: diagonalY },
    "upper-left": { x: -diagonalX, y: -diagonalY },
  };

  return positions[slot] || { x: 0, y: 0 };
}

function pointForChild(slot, index) {
  const { diagonalX, diagonalY, distance } = getTileMetrics();
  const childPositions = {
    "upper-left": [
      { x: -diagonalX, y: -diagonalY },
      { x: -diagonalX, y: diagonalY },
      { x: 0, y: -distance },
      { x: -diagonalX * 2, y: 0 },
    ],
    "upper-right": [
      { x: diagonalX, y: -diagonalY },
      { x: diagonalX, y: diagonalY },
      { x: 0, y: -distance },
      { x: diagonalX * 2, y: 0 },
    ],
    "lower-left": [
      { x: -diagonalX, y: diagonalY },
      { x: 0, y: distance },
      { x: -diagonalX, y: -diagonalY },
      { x: -diagonalX * 2, y: 0 },
    ],
    "lower-right": [
      { x: diagonalX, y: diagonalY },
      { x: 0, y: distance },
      { x: diagonalX, y: -diagonalY },
      { x: diagonalX * 2, y: 0 },
    ],
  };

  const parent = pointForSlot(slot);
  const offset = childPositions[slot]?.[index] || { x: 0, y: 0 };
  return {
    x: parent.x + offset.x,
    y: parent.y + offset.y,
  };
}

function mobileSequence() {
  const activeSection = mainSections.find((section) => section.id === activeSectionId);
  const sequence = [];

  if (activeSection) {
    return [backNode, ...activeSection.children]
      .map((item) => ({
        type: item.id === "back" ? "back" : "child",
        id: item.id,
        element: document.querySelector(`.subhex[data-node-id="${item.id}"]`),
      }))
      .filter((item) => item.element);
  }

  sequence.push({ type: "logo", id: "logo", element: logoTile });

  mainSections.forEach((section) => {
    sequence.push({
      type: "main",
      id: section.id,
      element: document.querySelector(`.hex[data-node-id="${section.id}"]`),
    });

    if (activeSection?.id === section.id) {
      activeSection.children.forEach((child) => {
        sequence.push({
          type: "child",
          id: child.id,
          element: document.querySelector(`.subhex[data-node-id="${child.id}"]`),
        });
      });
    }
  });

  return sequence.filter((item) => item.element);
}

function pointForMobileIndex(index, total) {
  const rect = logoTile.getBoundingClientRect();
  const xLimit = (window.innerWidth - rect.width) / 2 - 18;
  const xOffset = Math.max(0, Math.min(rect.width * 0.55, xLimit));
  const yStep = rect.height * 0.76;
  const middleIndex = (total - 1) / 2;

  return {
    x: index % 2 === 0 ? -xOffset : xOffset,
    y: (index - middleIndex) * yStep,
    yStep,
  };
}

function setPoint(element, point) {
  element.style.setProperty("--x", `${point.x}px`);
  element.style.setProperty("--y", `${point.y}px`);
}

function syncStageSize() {
  if (!mobileMapQuery.matches) {
    mapStage.style.removeProperty("height");
    mapStage.style.removeProperty("min-height");
    return;
  }

  const sequence = mobileSequence();
  const rect = logoTile.getBoundingClientRect();
  const { yStep } = pointForMobileIndex(0, sequence.length || 1);
  const sequenceHeight = rect.height + yStep * Math.max(0, sequence.length - 1);
  const stageHeight = Math.max(window.innerHeight, sequenceHeight + 184);
  mapStage.style.setProperty("height", `${stageHeight}px`);
  mapStage.style.setProperty("min-height", `${stageHeight}px`);
}

function tileMarkup(item) {
  return `
    <span class="hex-content">
      ${iconTemplates[item.icon]}
      <span class="hex-title">${item.title}</span>
    </span>
  `;
}

function createMainNode(section, index) {
  const button = document.createElement("button");

  button.className = "hex mainhex";
  button.type = "button";
  button.dataset.nodeId = section.id;
  button.dataset.slot = section.slot;
  button.style.animationDelay = `${120 + index * 45}ms`;
  button.setAttribute("aria-label", `Open ${section.title} branch`);
  button.innerHTML = tileMarkup(section);

  button.addEventListener("mouseenter", () => activateSection(section.id));
  button.addEventListener("focus", () => activateSection(section.id));
  button.addEventListener("click", () => activateSection(section.id));

  return button;
}

function createSubNode(section, child, index) {
  const isDirectLink = child.action === "url" && child.url;
  const button = document.createElement(isDirectLink ? "a" : "button");

  button.className = child.action === "back" ? "hex subhex backhex" : "hex subhex";
  if (button.tagName === "BUTTON") {
    button.type = "button";
  } else {
    button.href = child.url;
    if (!child.url.startsWith("mailto:")) {
      button.target = "_blank";
      button.rel = "noopener noreferrer";
    }
  }
  button.dataset.nodeId = child.id;
  button.dataset.parentId = section.id;
  button.dataset.action = child.action;
  button.style.animationDelay = `${index * 34}ms`;
  button.setAttribute(
    "aria-label",
    child.action === "back" ? "Back to main portfolio map" : `Open ${child.title}`,
  );
  button.innerHTML = tileMarkup(child);
  if (!isDirectLink) {
    button.addEventListener("click", () => handleChildAction(child));
  }

  return button;
}

function renderMainNodes() {
  const fragment = document.createDocumentFragment();

  mainSections.forEach((section, index) => {
    fragment.append(createMainNode(section, index));
  });

  nodeLayer.replaceChildren(fragment);
}

function renderSubNodes(section) {
  const oldNodes = [...subnodeLayer.querySelectorAll(".subhex")];
  const token = (subnodeRenderToken += 1);

  if (oldNodes.length > 0) {
    oldNodes.forEach((node) => {
      node.classList.add("is-exiting");
    });

    window.setTimeout(() => {
      if (token === subnodeRenderToken) {
        renderSubNodesNow(section);
      }
    }, 240);
    return;
  }

  renderSubNodesNow(section);
}

function renderSubNodesNow(section) {
  if (!section) {
    subnodeLayer.replaceChildren();
    window.requestAnimationFrame(syncMap);
    return;
  }

  const fragment = document.createDocumentFragment();
  const visibleChildren = mobileMapQuery.matches ? [backNode, ...section.children] : section.children;

  visibleChildren.forEach((child, index) => {
    fragment.append(createSubNode(section, child, index));
  });

  subnodeLayer.replaceChildren(fragment);
  window.requestAnimationFrame(syncMap);
}

function activateSection(id) {
  if (activeSectionId === id) {
    return;
  }

  activeSectionId = id;
  const section = mainSections.find((item) => item.id === id);
  mapStage.classList.toggle("is-mobile-subview", mobileMapQuery.matches);
  renderSubNodes(section);

  document.querySelectorAll(".mainhex").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.nodeId === id);
  });

  syncMap();
}

function handleChildAction(child) {
  if (child.action === "back") {
    leaveMobileSubview();
    return;
  }

  if (child.action === "url" && child.url) {
    openDirectLink(child.url);
    return;
  }

  if (child.action !== "panel") {
    return;
  }

  contentTitle.textContent = child.title;
  contentCopy.textContent = loremIpsum;
  setPanelLink(child);
  overlay.hidden = false;
  document.body.classList.add("has-overlay");
  closeButton.focus();
}

function openDirectLink(url) {
  if (url.startsWith("mailto:")) {
    window.location.href = url;
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

function setPanelLink(child) {
  if (!child.url) {
    contentLink.hidden = true;
    contentLink.removeAttribute("href");
    contentLink.textContent = "Open link";
    return;
  }

  contentLink.hidden = false;
  contentLink.href = child.url;
  contentLink.textContent = child.linkLabel || `Open ${child.title}`;
}

function leaveMobileSubview() {
  if (!mobileMapQuery.matches) {
    return;
  }

  activeSectionId = null;
  mapStage.classList.remove("is-mobile-subview");
  document.querySelectorAll(".mainhex").forEach((node) => {
    node.classList.remove("is-selected");
  });
  renderSubNodes(null);
  syncMap();
}

function closeOverlay() {
  overlay.hidden = true;
  document.body.classList.remove("has-overlay");
}

function syncInteractiveVisibility() {
  const subviewActive = mobileMapQuery.matches && Boolean(activeSectionId);

  nodeLayer.toggleAttribute("inert", subviewActive);
  nodeLayer.setAttribute("aria-hidden", String(subviewActive));
  logoTile.toggleAttribute("inert", subviewActive);
  logoTile.setAttribute("aria-hidden", String(subviewActive));
}

function handleLogoFallback() {
  logo.classList.add("is-missing");
}

function syncMap() {
  mapStage.classList.toggle("is-mobile-subview", mobileMapQuery.matches && Boolean(activeSectionId));
  syncInteractiveVisibility();
  syncStageSize();

  if (mobileMapQuery.matches) {
    const sequence = mobileSequence();
    sequence.forEach((item, index) => {
      setPoint(item.element, pointForMobileIndex(index, sequence.length));
    });

    return;
  }

  setPoint(logoTile, { x: 0, y: 0 });

  document.querySelectorAll(".mainhex").forEach((node) => {
    const section = mainSections.find((item) => item.id === node.dataset.nodeId);
    if (section) {
      setPoint(node, pointForSlot(section.slot));
    }
  });

  const activeSection = mainSections.find((item) => item.id === activeSectionId);
  document.querySelectorAll(".subhex").forEach((node, index) => {
    if (activeSection) {
      setPoint(node, pointForChild(activeSection.slot, index));
    }
  });
}

renderMainNodes();
syncMap();

logo.addEventListener("error", handleLogoFallback);
closeButton.addEventListener("click", closeOverlay);
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeOverlay();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) {
    closeOverlay();
  }
});
window.addEventListener("resize", syncMap);
window.addEventListener("load", syncMap);
mobileMapQuery.addEventListener("change", syncMap);
mobileMapQuery.addEventListener("change", () => {
  const activeSection = mainSections.find((item) => item.id === activeSectionId);
  renderSubNodes(activeSection || null);
});
