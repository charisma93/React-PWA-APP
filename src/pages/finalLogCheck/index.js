import * as React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MuiBackButton, MuiSaveButton, PlusBtn } from "../../components/Button";
import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import flydown from "../../assets/icons/flydown.svg";
import flyup from "../../assets/icons/flyup.svg";
import yard from "../../assets/icons/yard.svg";
import genSett from "../../assets/icons/genSett.png";
import "./index.scss";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
      marginTop: "3px !important",
      textAlign: "start",
      alignItems: "center",
      display: "flex",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 13,
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

const Checks = () => {
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
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>Text Message</Box>
              <img src={share} alt="share" />
            </Box>

            <Box
              sx={{
                display: "flex",
                p: "0px 22px 22px 32px",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">
                Is the Container Plugged in
              </Typography>
              <Select
                variant="standard"
                IconComponent={ExpandMoreIcon}
                defaultValue={"1"}
                disableUnderline
              >
                <MenuItem value={"1"} selected>
                  Yes
                </MenuItem>
                <MenuItem value={"2"}>No</MenuItem>
              </Select>
            </Box>
          </Box>
        </header>

        <Box sx={{ padding: "65px 32px 0px 32px", height: "100vh" }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              padding: "24.5px 20px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img src={flydown} alt="flydown" width={22} />
              <Typography variant="title" pl={2}>
                Indicate Arrival
              </Typography>
            </Box>
            <PlusBtn>
              <AddIcon />
            </PlusBtn>
          </Box>

          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              padding: "24.5px 20px",
              marginTop: "15px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img src={yard} alt="yard" width={22} />
              <Typography variant="title" pl={2}>
                Add Yard Check
              </Typography>
            </Box>
            <PlusBtn>
              <AddIcon />
            </PlusBtn>
          </Box>

          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              padding: "24.5px 20px",
              marginTop: "15px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={genSett} alt="genSett" width={22} />
              <Typography variant="title" pl={2}>
                Add Gen Sett
              </Typography>
            </Box>
            <PlusBtn>
              <AddIcon />
            </PlusBtn>
          </Box>

          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              padding: "24.5px 20px",
              marginTop: "15px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img src={flyup} alt="flyup" width={22} />
              <Typography variant="title" pl={2}>
                Indicate Departure
              </Typography>
            </Box>
            <PlusBtn>
              <AddIcon />
            </PlusBtn>
          </Box>

          <div className="footer-final">
            <MuiBackButton>
              <Link to={"/info/1"} style={{ color: "#0B98DA" }}>
                {" "}
                Back{" "}
              </Link>
            </MuiBackButton>
            <MuiSaveButton>
              <Link to={"/yardcheck"} style={{ color: "white" }}>
                {" "}
                Skip{" "}
              </Link>
            </MuiSaveButton>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Checks;
