import * as React from "react";
import { Box, Stepper, Step } from "@mui/material";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import share from "../../assets/icons/share.svg";
import Phone from "../../assets/icons/phone.svg";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import "./info.scss";

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

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 3px)",
    right: "calc(50% + 3px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#09C792",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#09C792",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 4,
    borderRadius: 10,
  },
}));

const steps = [0, 1, 2, 3, 4, 5, 6];

const headTitle = [
  "Shipment Information",
  "Information at Pickup",
  "Log for checks",
  "Information at Delivery",
  "Information at Delivery",
  "Information",
];

const Header = (props) => {
  const { id } = useParams();

  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <Box
            sx={{
              bgcolor: "#fff",
              height: 99,
            }}
          >
            <Box mt={2} mb={2}>
              <Stepper
                alternativeLabel
                activeStep={Number(id)}
                connector={<QontoConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}></Step>
                ))}
              </Stepper>
            </Box>
            <Box
              sx={{
                p: "22px 22px 22px 32px",
                fontFamily: "Poppins",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>{headTitle[id - 1]}</Box>
              {
                id !== '6' ? 
                <Box sx={{ display: 'flex' }}>
                  { Number(id) >= 4 ? <img src={Phone} alt="phone" style={{ marginRight: 15 }}/> : ''}
                  <img src={share} alt="share" />
                </Box> : ''
              }
            </Box>
          </Box>
        </header>
      </ThemeProvider>
    </>
  );
};

export default Header;
