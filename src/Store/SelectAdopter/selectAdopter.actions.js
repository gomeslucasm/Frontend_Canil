export const AdopterSelection = (adopter) => {
  
  const state = {
    adopter:adopter
  };

  return {
    type: "ADOPTER_SELECTION",
    payload: [state],
  };
};

