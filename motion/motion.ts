export const slideFromTop = {
    hidden: { y: "-100%" },
    visible: (i) => ({
      y: "0",
      transition: {
        delay: i * 0.2, // delay each element by 0.2 seconds
      },
    }),
    exit: { y: "-100%" },
  };
  
  export const slideFromBottom = {
    hidden: { y: "100%", rotate: 0, scaleY: 1 },
    visible: (i) => ({
      y: "0",
      scaleY: -1,
      transition: {
        delay: i * 0.2, // delay each element by 0.2 seconds
      },
    }),
    exit: { y: "100%", rotate: 0, scaleY: 1 },
  };
  