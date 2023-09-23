export const takenImage = (url) => {
  return {
    type: "TAKEN_IMAGE",
    payload: url,
  };
};
