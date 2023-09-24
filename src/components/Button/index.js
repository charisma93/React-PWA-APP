import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MuiBackButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "40px",
  fontSize: "14px",
  backgroundColor: "#CEEAF8",
  color: "#0B98DA",
  width: "47%",
  padding: "13px 34px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#CEEAF8",
    borderColor: "#0B98DA",
  },
});

const MuiSaveButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "40px",
  fontSize: "14px",
  backgroundColor: "#0B98DA",
  color: "white",
  width: "47%",
  padding: "13px 34px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0B98DA",
    borderColor: "#0B98DA",
  },
});

const AddPhotoButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "70px",
  fontSize: "14px",
  backgroundColor: "#E7FAF5",
  border: "1px solid #09C792",
  color: "#09C792",
  padding: "8px 37px",
  "&:hover": {
    backgroundColor: "#E7FAF5",
    borderColor: "#09C792",
  },
});

const PlusBtn = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "10px",
  fontSize: "14px",
  backgroundColor: "#0B98DA",
  border: "1px solid #0B98DA",
  color: "white",
  height: "45px",
  minWidth: "45px !important",
  "&:hover": {
    backgroundColor: "#0B98DA",
    borderColor: "#0B98DA",
  },
});

const MuiButton = styled(Button)({
  borderRadius: "40px",
  fontSize: "14px",
  backgroundColor: "#0B98DA",
  color: "white",
  width: "100%",
  padding: "13px 34px",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#0B98DA",
    borderColor: "#0B98DA",
  },
});

const FaileButton = styled(Button)({
  borderRadius: "40px",
  borderColor: "#FF3B30",
  fontSize: "14px",
  backgroundColor: "#FF3B30",
  color: "white",
  width: "95px",
  height: "40px",
  padding: "13px, 37px, 13px, 37px",
  textTransform: "none",
  "&:hover": {
    borderColor: "#FF3B30",
    backgroundColor: "#FF3B30",
  },
});

export default Button;
export {
  MuiBackButton,
  MuiSaveButton,
  AddPhotoButton,
  PlusBtn,
  MuiButton,
  FaileButton,
};
