import * as React from "react";
import { Box, Typography, Checkbox  } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiButton } from '../../components/Button'

import { Link } from "react-router-dom";
import close from "../../assets/icons/close.svg";

import "./detail.scss";

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
    subtitle2: {
      fontSize: 12,
      color: "#000000",
      lineHeight: "16px",
    },
  },
});

const Detail = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <Box
            sx={{
              bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                p: "22px 22px 22px 32px",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
            >
              <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                <Box>Shipment</Box> <img src={close} alt="close"/>
              </Box>
              <Typography variant="subtitle1">
                <Link className="link">9051304333-01</Link> Driver Instructions
              </Typography>
            </Box>
          </Box>
        </header>

        <div className="detail-page">
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: '3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
              borderRadius: 2,
              p: 2,
              width: "100%",
              height: "326px",
            }}
          >
            <Typography variant="subtitle1" mt={1}>
              1 Magnum Reefer And Genset required. Age must be less than 8 yrs
              old. Arrive running at minus 35 Celsius Driver to check
              temperature every 4 hours and keep log. Magnum Reefer and Genset
              required.
            </Typography>
          </Box>
        </div>

        <Box
          sx={{
            padding: "0px 32px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              padding: "20px",
              display: "flex",
              borderRadius: 2,
              boxShadow: '3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
            }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "#0B98DA",
                "&.Mui-checked": {
                  color: "#0B98DA",
                },
                borderRadius: 5,
              }}
            />
            <Typography variant="subtitle2">
              I agree to allow clock work to access the phone functionalities
            </Typography>
          </Box>

          <Box mt={3}>
            <MuiButton><Link to={'/info/1'} style={{ color: 'white' }}>Acknowledge Instructions & Continue</Link></MuiButton>
          </Box>
        </Box>

      </ThemeProvider>
    </>
  );
};

export default Detail;
