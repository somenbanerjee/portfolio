const variantHeroImage = {
  offscreen: { y: "-100vh" },
  onscreen: {
    y: 0,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.3, duration: 1 },
  },
};

const variantKidImage = {
  offscreen: { x: "200vw", scale: 0.2 },
  onscreen: {
    x: 0,
    scale: 1,
    rotate: [150, 40, 30, 20, 10, 0, -10, -20, -30, -50, 0],
    transition: { type: "spring", bounce: 0, duration: 0.5 },
  },
};

const variantSkills = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 0.5 },
  },
};

const variantProjects = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.5 },
  },
};

const variantProjectsBottom = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const variantContacts = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 0.5 },
  },
};

const variantContactsBottom = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.5 },
  },
};

export {
  variantHeroImage,
  variantSkills,
  variantProjects,
  variantProjectsBottom,
  variantContacts,
  variantContactsBottom,
  variantKidImage,
};
