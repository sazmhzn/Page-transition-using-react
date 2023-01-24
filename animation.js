export const container = {
  hidden: { opaity: 0 },
  show: {
    opacitiy: 1,
    tranistion: {
      delayChildren: 0.5,
      staggerChildre: 0.2,
    },
  },
};

export const item = {
  hidden: { y: "100%" },
  show: { y: "0%", tranistion: { duration: 0.5 } },
};
