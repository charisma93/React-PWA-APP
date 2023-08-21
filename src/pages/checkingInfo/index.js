import * as React from "react";
import { Box, Typography, Divider, Select, MenuItem } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  MuiBackButton,
  MuiSaveButton,
  AddPhotoButton,
} from "../../components/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import share from "../../assets/icons/share.svg";
import "./checkingInfo.scss";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 14,
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

const CheckingInfo = () => {
  const is_checking = false;

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
              <Box>{is_checking ? "Checking Information" : "Departure information" }</Box>
              <img src={share} alt="share" />
            </Box>
          </Box>
        </header>
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
                {is_checking ? "Last check" : "Last Check was done at DD/MM HH:MM" }
              </Typography>
              <Typography variant="subtitle1" mt={1} fontSize={12}>
                {is_checking ? "Was done at dd/mm hh:mm <br />" : '' }
                Next scheduled check is at dd/mm HH:MM
                <br />
                <Link style={{ color: "#0B98DA" }}>Click here </Link>to add
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Supply Arir Temp
              </Typography>
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <Select
                  variant="standard"
                  IconComponent={ExpandMoreIcon}
                  defaultValue={"2"}
                  disableUnderline
                >
                  <MenuItem value={"1"} selected>
                    55 °C
                  </MenuItem>
                  <MenuItem value={"2"}>45 °C </MenuItem>
                  <MenuItem value={"3"}>35 °C</MenuItem>
                  <MenuItem value={"4"}>25 °C</MenuItem>
                </Select>
              </Box>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Return AIr Temp
              </Typography>
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <Select
                  variant="standard"
                  IconComponent={ExpandMoreIcon}
                  defaultValue={"2"}
                  disableUnderline
                >
                  <MenuItem value={"1"} selected>
                    55 °C
                  </MenuItem>
                  <MenuItem value={"2"}>45 °C </MenuItem>
                  <MenuItem value={"3"}>35 °C</MenuItem>
                  <MenuItem value={"4"}>25 °C</MenuItem>
                </Select>
              </Box>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Fuel Level
              </Typography>
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <Select
                  variant="standard"
                  IconComponent={ExpandMoreIcon}
                  defaultValue={"3"}
                  disableUnderline
                >
                  <MenuItem value={"1"} selected>
                    1/4 Tank
                  </MenuItem>
                  <MenuItem value={"2"}>2/4 Tank</MenuItem>
                  <MenuItem value={"3"}>3/4 Tank</MenuItem>
                  <MenuItem value={"4"}>4/4 Tank</MenuItem>
                </Select>
              </Box>
            </Box>
            <Divider />

            <Box sx={{ p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Comment
              </Typography>
              <Box>
                <TextareaAutosize
                  width={"100%"}
                  minRows={5}
                  className="text-area"
                />
              </Box>
            </Box>

            <Box sx={{ pb: "35px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "64px 32px 30px",
            display: "flex",
            justifyContent: "space-between",
            width: "-webkit-fill-available",
            position: "fixed",
            bottom: "0",
          }}
        >
          <MuiBackButton>
            <Link to={"/info/1"} style={{ color: "#0B98DA" }}>
              {" "}
              Back{" "}
            </Link>
          </MuiBackButton>
          <MuiSaveButton>
            <Link to={"/info/4"} style={{ color: "white" }}>
              {" "}
              Save{" "}
            </Link>
          </MuiSaveButton>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CheckingInfo;
