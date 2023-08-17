import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#8492A7",
      marginTop: "3px !important",
      textAlign: "start",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      marginTop: "3px !important",
      textAlign: "end",
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
  "&:hover": {
    backgroundColor: "#E7FAF5",
    borderColor: "#09C792",
  },
});

const Delivery = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: "65px 32px 0px 32px" }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box sx={{ p: "14px 0px" }}>
              <Typography variant="title" mt={1}>
                Arrival
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Supply Arir Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"70%"}>
                06 - 15 - 23
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Supply Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"70%"}>
                45 °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Return Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"70%"}>
                45 °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Fuel Level
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"70%"}>
                1/4
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ pb: "35px", pt: "135px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Delivery;
