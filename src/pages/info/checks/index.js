import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Departure from "../../../assets/icons/departure.svg";
import DriverLog from "../../../assets/icons/driver_log.svg";
import Initate from "../../../assets/icons/initate.svg";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 16,
      marginTop: "3px !important",
      textAlign: "start",
      alignItems: 'center',
      display: 'flex'
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      marginTop: "3px !important",
      textAlign: "end",
    },
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

const Checks = () => {
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
              display: "flex",
              justifyContent: "space-between",
              padding: "24.5px 20px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img src={Departure} alt="depart" width={22}/>
              <Typography variant="subtitle1" pl={2}>
                Save departure info
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
              <img src={DriverLog} alt="depart" width={22}/>
              <Typography variant="subtitle1" pl={2}>
                Add driver logs{" "}
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
              <img src={Initate} alt="depart" width={22}/>
              <Typography variant="subtitle1" pl={2}>
                Initiate final Delivery
              </Typography>
            </Box>
            <PlusBtn>
              <AddIcon />
            </PlusBtn>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Checks;
