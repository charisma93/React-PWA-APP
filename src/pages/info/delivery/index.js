import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Input,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Calendar from "../../../assets/icons/calendar.svg";

import moment from "moment";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#8492A7",
      marginTop: "3px !important",
      textAlign: "start",
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      marginTop: "3px !important",
      textAlign: "end",
    },
  },
});

const AddPhotoButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "70px",
  fontSize: "14px",
  backgroundColor: "#E7FAF5",
  border: "1px solid #09C792",
  color: "#09C792",
  height: "37px",
  padding: "8px 37px",
  "&:hover": {
    backgroundColor: "#E7FAF5",
    borderColor: "#09C792",
  },
});

const Delivery = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [value, setValue] = React.useState(moment.now());

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
              <Input
                placeholder="( Print Name/Signature )"
                disableUnderline={true}
                autoFocus={true}
                className="input-box"
                value={moment(value).format("YYYY-MM-DD, h:mm:ss a")}
                sx={{
                  color: "#080808",
                  textAlign: "right",
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              />
              <img
                src={Calendar}
                alt="calendar"
                onClick={() => setIsOpen(true)}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Supply Temp
              </Typography>
              <Input
                disableUnderline={true}
                autoFocus={true}
                style={{ width: "60%" }}
                placeholder="Type  °C"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      color: "#8492A7",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "-0.48px",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"70%"}>
                Return Temp
              </Typography>
              <Input
                disableUnderline={true}
                autoFocus={true}
                style={{ width: "60%" }}
                placeholder="Type  °C"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      color: "#8492A7",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "-0.48px",
                    },
                  },
                }}
              />
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
                  sx={{
                    ".MuiSvgIcon-root": {
                      paddingRight: "0px !important",
                    },
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
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

            <Box sx={{ pb: "35px", pt: "135px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              open={isOpen}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={(newDate) => {
                console.log(newDate);
                setValue(newDate);
              }}
              inputFormat="MM-dd-yyyy"
              views={["day"]}
              slotProps={{
                field: {
                  sx: {
                    display: "none",
                  },
                },
                toolbar: {
                  hidden: true,
                },
                dialog: {
                  sx: {
                    ".MuiPaper-root": {
                      borderRadius: "20px !important",
                      boxShadow:
                        "0px 11.52456px 17.28684px 0px rgba(20, 20, 22, 0.24)",
                    },
                  },
                },
                calendarHeader: {
                  sx: {
                    ".MuiPickersCalendarHeader-root": {
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      paddingLeft: "16px !important",
                      paddingRight: "25px !important",
                    },
                    ".MuiPickersArrowSwitcher-root": {
                      display: "inline-flex",
                    },
                    ".MuiPickersCalendarHeader-label": {
                      textAlign: "center !important",
                      display: "flex",
                      position: "absolute",
                      paddingLeft: "80px",
                    },
                    ".MuiPickersArrowSwitcher-spacer": {
                      width: "230px",
                    },
                  },
                },
                actionBar: {
                  sx: {
                    justifyContent: "space-around",
                    ".MuiButtonBase-root:first-child": {
                      display: "flex",
                      width: "128px",
                      padding: "13px 37px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "40px",
                      background: "#CEEAF8",
                      color: "white",
                      marginBottom: "35px",
                    },
                    ".MuiButtonBase-root": {
                      display: "flex",
                      width: "128px",
                      padding: "13px 37px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "40px",
                      background: "#0B98DA",
                      color: "white",
                      marginBottom: "35px",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Delivery;
