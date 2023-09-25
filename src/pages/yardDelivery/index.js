import * as React from "react";
import { Box, Typography, Divider, Checkbox, Input } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  MuiBackButton,
  MuiSaveButton,
  AddPhotoButton,
} from "../../components/Button";
import Calendar from "../../assets/icons/calendar.svg";
import share from "../../assets/icons/share.svg";
import "./index.scss";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
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

const YardDelivery = () => {
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
                p: "22px 32px 22px 32px",
                fontFamily: "Poppins",
                fontSize: "20px",
                textAlign: "center",
                display: "flex",
              }}
            >
              <Box sx={{ width: "100%" }}>Yard Check</Box>
              <img src={share} style={{ float: "right" }} alt="share" />
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

            <Box sx={{ display: "flex", paddingTop: "15px" }}>
              <Checkbox
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#0B98DA",
                  "&.Mui-checked": {
                    color: "#0B98DA",
                  },
                  borderRadius: 5,
                }}
              />
              <Typography variant="subtitle1">
                I hereby acknowledge the correctnes of the provided data
              </Typography>
            </Box>

            <Box sx={{ display: "flex", p: "31px 0px 8px 0px" }}>
              <Typography variant="subtitle1" mt={1}>
                Receiver
              </Typography>
              <Input
                placeholder="( Print Name/Signature )"
                disableUnderline={true}
                autoFocus={true}
                className="input-box"
              />
              <img src={Calendar} alt="calendar" />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1}>
                Driver
              </Typography>
              <Input
                placeholder="( Print Name/Signature )"
                disableUnderline={true}
                autoFocus={true}
                className="input-box"
              />
              <img src={Calendar} alt="calendar" />
            </Box>
            <Divider />

            <Box sx={{ pb: "35px", pt: "20px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>

        <Box className="delivery-footer">
          <MuiBackButton>
            <Link to={"/yardgenset"} style={{ color: "#0B98DA" }}>
              {" "}
              Back{" "}
            </Link>
          </MuiBackButton>
          <MuiSaveButton>
            <Link to={"/"} style={{ color: "white" }}>
              {" "}
              Save{" "}
            </Link>
          </MuiSaveButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default YardDelivery;
