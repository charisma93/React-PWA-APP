import * as React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiButton } from "../../components/Button";

import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import InfoMark from "../../assets/marks/info_mark.png";
import "./driver.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      color: "#8492A7",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.42px",
    },
    subtitle2: {
      color: "#536780",
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.24px",
    },
  },
});

const Home = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <Box
            sx={{
              bgcolor: "#fff",
              height: 70,
            }}
          >
            <Box
              sx={{
                p: "22px 22px 22px 32px",
                fontFamily: "Poppins",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>Driver Logs</Box>
              <img src={share} alt="share" />
            </Box>
          </Box>
        </header>

        <div className="driver-page">
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              padding: "24px",
              textAlign: "center",
            }}
          >
            <Box>
              <img src={InfoMark} alt="info_mark" />
            </Box>
            <Box sx={{ marginTop: "24px" }}>
              <Typography variant="title" marginTop={"24px"}>
                Hi Alexandra
              </Typography>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Typography variant="subtitle1" mt={1}>
                Recorded based on DOT regulations for driver Hours of Service.
                This page is only required if pulling from trucker’s yard or run
                is more than 4hrs. Supply and Return AIr Temps must be
                documented at all breaks. If the supply/return air temp is +/-
                1.5 degrees from the set temp, contact the SSL service provider
                and K+N immediately
              </Typography>
            </Box>
          </Box>
        </div>

        <div
          style={{ padding: "0px 32px" }}
          // onClick={() => navigate("/checkinginfo")}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              padding: "15px 42px",
              marginTop: "15px",
            }}
          >
            <Typography variant="subtitle2">
              Last check Was done at DD/MM HH:MM Next scheduled check is at
              dd/mm HH:MM <Link to={"/checkinginfo"} style={{ color: "#0B98DA", fontWeight: 600 }}>Click here</Link> to add
            </Typography>
          </Box>
        </div>

        <Box className="footer">
          <MuiButton>
            <Link to={"/checkinginfo"} style={{ color: "white" }}>
              Acknowledge Instructions & Continue
            </Link>
          </MuiButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
