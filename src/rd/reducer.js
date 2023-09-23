import testImg from "../assets/marks/test_img.jpg"; 
const initial_state = {
  url: testImg,
};
export default (state = initial_state, action) => {
  switch (action.type) {
    case "TAKEN_IMAGE":
      return { ...state, url: action.payload };
    default:
      return state;
  }
}
