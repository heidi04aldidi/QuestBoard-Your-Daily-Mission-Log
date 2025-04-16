// soundPlayer.js
export const playSound = (fileName) => {
  const sound = new Audio(`${import.meta.env.BASE_URL}sounds/${fileName}`);
  sound.play();
};
