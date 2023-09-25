import * as React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import KeyMark from "../../assets/marks/key_mark.png";
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

const Home = () => {
  const navigate = useNavigate();

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

        <div className="yard-check" onClick={() => navigate("/checkinginfo")}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                <img src={KeyMark} alt="KeyMark" />
              </Box>
              <Box sx={{ marginTop: "24px" }}>
                <Typography variant="title" marginTop={"24px"}>
                  Temperature and Genset fuel
                </Typography>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle1" mt={1}>
                  levels must be recorded at least twice daily at no more than
                  8hr increments. This page is only required if Reefer is held
                  on trucker’s yard.
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
        <Box className="footer-yardcheck">
          <MuiButton>
            <Link to={"/yardgenset"} style={{ color: "white" }}>
              Continue
            </Link>{" "}
          </MuiButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
