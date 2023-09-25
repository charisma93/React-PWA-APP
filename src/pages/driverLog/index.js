import * as React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import InfoMark from "../../assets/marks/info_mark.png"
import './driver.scss'

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

        <div className="driver-page"  onClick={() => navigate('/checkinginfo')}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: '3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
              borderRadius: 2,
              padding: '24px',
              textAlign:'center',
            }}
           
          >
            <Box><img src={InfoMark} alt="info_mark" /></Box>
            <Box sx={{ marginTop: '24px' }}><Typography variant="title" marginTop={'24px'}>Hi Alexandra</Typography></Box>
            <Box sx={{ marginTop: '10px' }}>
              <Typography variant="subtitle1" mt={1}>
                Recorded based on DOT regulations for driver Hours of Service. 
                This page is only required if pulling from trucker’s yard or run is more than 4hrs. 
                Supply and Return AIr Temps must be documented at all breaks. 
                If the supply/return air temp is +/- 1.5 degrees from the set temp, contact the SSL service provider and K+N immediately
              </Typography>
            </Box>
          </Box>
        </div>

      </ThemeProvider>
    </>
  );
};

export default Home;
