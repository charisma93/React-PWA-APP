import * as React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import "./home.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600
    },
    subtitle1: {
      fontSize: 14,
      color: '#8492A7'
    },
  }
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
              <Box>Text Message</Box>
              <img src={share} alt="share" />
            </Box>
          </Box>
        </header>

        <div className="home-page">
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: '3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
              borderRadius: 2,
              p: 2,
              textAlign:'center',
              width: '100%'
            }}
          >
            <Typography variant="title">Hi Alexandra</Typography>
            <Typography variant="subtitle1" mt={1}>
              you have been assigned shipment <Link to={'/detail'} className="link">9051304333-01</Link>, please click onthe
              link and follow the instructions
            </Typography>
          </Box>
        </div>

        <footer></footer>
      </ThemeProvider>
    </>
  );
};

export default Home;
