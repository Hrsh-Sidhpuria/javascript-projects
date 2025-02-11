const textArrays = [
  [
    "Art that",
    "Handcrafted",
    "Bringing",
    "Timeless designs,",
    "One-of-a-kind",
    "",
    "Pouring passion",
    "Where creativity",
    "Hand-poured",
    "From nature",
  ],
  [
    "flows with",
    "resin, timeless",
    "resin art to",
    "resin-crafted",
    "resin",
    "Nature’s beauty,",
    "into every",
    "meets",
    "resin,",
    "to",
  ],
  [
    "elegance.",
    "beauty.",
    "life.",
    "charm.",
    "creations.",
    "resin’s touch.",
    "piece.",
    "craftsmanship.",
    "pure perfection.",
    "your home.",
  ],
];

const colors = [
  [
    "#ffffff",
    "#00223f",
    "#000000",
    "#000000",
    "#000000",
    "#120914",
    "#453b37",
    "#ffffff",
    "#120914",
    "#232b2b",
  ],
  [
    "#ffffff",
    "#00223f",
    "#000000",
    "#000000",
    "#000000",
    "#120914",
    "#453b37",
    "#ffffff",
    "#120914",
    "#232b2b",
  ],
  [
    "#ffffff",
    "#00223f",
    "#000000",
    "#000000",
    "#000000",
    "#120914",
    "#453b37",
    "#ffffff",
    "#120914",
    "#232b2b",
  ],
];

let textIndexes = [0, 0, 0];

function AnimateText() {
  const h1s = document.querySelectorAll(".animated-text");

  h1s.forEach((elem, i) => {
    gsap.to(elem, {
      top: "-100%",
      ease: Expo.easeInOut,
      duration: 0.6,
      onComplete: () => {
        textIndexes[i] = (textIndexes[i] + 1) % textArrays[i].length;
        elem.textContent = textArrays[i][textIndexes[i]];
        elem.style.color = colors[i][textIndexes[i]];
        gsap.set(elem, { top: "100%" });

        gsap.to(elem, {
          top: "0%",
          ease: Expo.easeInOut,
          duration: 0.6,
        });
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const h1s = document.querySelectorAll(".animated-text");
  h1s.forEach((elem, i) => {
    elem.textContent = textArrays[i][0];
    elem.style.color = colors[i][0];
  });
});

Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 0.46, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1045241809672386 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.76, range: [0, 10] },
    metaball: { value: 0.26, range: [0, 2] },
    discard_threshold: { value: 0.58, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});
