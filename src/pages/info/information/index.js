import * as React from "react";
import { Box, Button } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import "./index.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 14,
      color: "#8492A7",
    },
  },
});

const AddPhotoButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "70px",
  fontSize: "14px",
  backgroundColor: "#E7FAF5",
  border: "1px solid #09C792",
  color: "#09C792",
  height: "37px",
  padding: "8px 37px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#E7FAF5",
    borderColor: "#09C792",
  },
});

const Header = () => {

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: -webkit-fill-available;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    padding: 21px;
    color: #8492A7;
    background: "#fff";
    border: none;
    border-radius: 10px;
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: "65px 32px 0px" }}>
          <AddPhotoButton>Click here to add POD</AddPhotoButton>
          <Box sx={{ marginTop: '16px' }}><StyledTextarea minRows={15} aria-label="maximum height" placeholder="Input here"/></Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Header;
