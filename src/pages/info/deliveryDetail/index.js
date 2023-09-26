import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Checkbox,
  Input,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Calendar from "../../../assets/icons/calendar.svg";
import "./index.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
      display: "flex",
      alignItems: "center",
    },
    subtitle1: {
      color: "#536780",
      fontFamily: "Poppins",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.52px",
      display: "flex",
      alignItems: "center",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: "13px",
      marginTop: "3px !important",
      textAlign: "end",
      paddingLeft: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      paddingRight: "10px"
    },
    body2: {
      color: "#8492A7",
      fontFamily: "Poppins",
      fontSize: "11px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.44px",
      marginTop: "0px !important",
      display: "flex",
      alignItems: "center",
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

const DeliveryDetail = () => {
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
            <Box sx={{ p: "7px 0px", display: "flex" }}>
              <Box mt={1} width={"35%"} />
              <Typography variant="title" mt={1} width={"30%"} sx={{ justifyContent: 'end', paddingRight: '22px'}}>
                Arrival
              </Typography>
              <Typography
                variant="title"
                mt={1}
                width={"35%"}
                color={"red"}
                sx={{ justifyContent: "end" }}
              >
                Departure
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "7px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Date
              </Typography>
              <Typography
                mt={1}
                width={"30%"}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "10px"
                }}
              >
                06/15/2023
              </Typography>
              <div className="divider-line" />
              <Input
                placeholder="( Print Name/Signature )"
                disableUnderline={true}
                autoFocus={true}
                className="input-box"
                value={moment(value).format("MM/DD/YYYY")}
                style={{ width: "29%" }}
                inputProps={{
                  sx: {
                    textAlign: "right",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    color: "red",
                  },
                }}
              />
              <img
                src={Calendar}
                alt="calendar"
                onClick={() => setIsOpen(true)}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "7px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Supply Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                45 °C
              </Typography>
              <div className="divider-line" />
              <Input
                disableUnderline={true}
                autoFocus={true}
                style={{ width: "37%" }}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    color: "#FF4A4A",
                    "&::placeholder": {
                      color: "#FF4A4A",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      letterSpacing: "0.52px",
                    },
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      style={{
                        color: "#536780",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.52px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      °C
                    </span>
                  </InputAdornment>
                }
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "7px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Return Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                45 °C
              </Typography>
              <div className="divider-line" />
              <Input
                disableUnderline={true}
                autoFocus={true}
                style={{ width: "37%" }}
                placeholder="Type"
                inputProps={{
                  sx: {
                    color: "#FF4A4A",
                    textAlign: "right",
                    "&::placeholder": {
                      color: "#FF4A4A",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                      letterSpacing: "0.52px",
                    },
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      style={{
                        color: "#536780",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.52px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      °C
                    </span>
                  </InputAdornment>
                }
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "7px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Fuel Level
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                1/4
              </Typography>
              <div className="divider-line" />
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "37%",
                  justifyContent: "end",
                }}
              >
                <Select
                  variant="standard"
                  IconComponent={ExpandMoreIcon}
                  defaultValue={"3"}
                  disableUnderline
                  sx={{
                    color: "#FF4A4A",
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

            <Box sx={{ display: "flex", paddingTop: "15px" }}>
              <Checkbox
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#0B98DA",
                  "&.MuiCheckbox-root": {
                    padding: "0px 8px 15px 0px!important",
                  },
                  ".MuiButtonBase-root-MuiCheckbox-root": {
                    padding: '0px !important'
                  },
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

            <Box>
              <Typography variant="subtitle1" mt={1}>
                Receiver
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "63%",
                    borderRight: "1px solid #EAEAEA",
                    height: "20px",
                  }}
                >
                  <Input
                    disableUnderline={true}
                    autoFocus={true}
                    style={{ width: "60%" }}
                    placeholder="Print Name/Signature"
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "#030303",
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                          letterSpacing: "-0.48px",
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: "37%" }}>
                  <Box sx={{ display: "flex" }}>
                    <Input
                      placeholder="( Print Name/Signature )"
                      disableUnderline={true}
                      autoFocus={true}
                      className="input-box"
                      value={moment(value).format("MM/DD/YYYY")}
                      inputProps={{
                        sx: {
                          textAlign: "end",
                          width: "100%",
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "normal",
                          color: "red",
                        }
                      }}
                    />
                    <img
                      src={Calendar}
                      alt="calendar"
                      onClick={() => setIsOpen(true)}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />

            <Box>
              <Typography variant="subtitle1" mt={1}>
                Driver
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "63%",
                    borderRight: "1px solid #EAEAEA",
                    height: "20px",
                  }}
                >
                  <Input
                    disableUnderline={true}
                    autoFocus={true}
                    style={{ width: "60%" }}
                    placeholder="Print Name/Signature"
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "#030303",
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                          letterSpacing: "-0.48px",
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: "37%" }}>
                  <Box sx={{ display: "flex" }}>
                    <Input
                      placeholder="( Print Name/Signature )"
                      disableUnderline={true}
                      autoFocus={true}
                      className="input-box"
                      value={moment(value).format("MM/DD/YYYY")}
                      inputProps={{
                        sx: {
                          textAlign: "end",
                          width: "100%",
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "normal",
                          color: "red",
                        }
                      }}
                    />
                    <img
                      src={Calendar}
                      alt="calendar"
                      onClick={() => setIsOpen(true)}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                open={isOpen}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={(newDate) => {
                  setValue(newDate);
                }}
                disableHighlightToday="false"
                inputFormat="MM/dd/yyyy"
                dayOfWeekFormatter={(day) => day.toUpperCase()}
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
                      ".MuiDayCalendar-slideTransition": {
                        minHeight: "200px",
                      },
                    },
                  },
                  calendarHeader: {
                    sx: {
                      ".MuiPickersCalendarHeader-root": {
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                      },
                      ".MuiPickersArrowSwitcher-root": {
                        display: "inline-flex",
                      },
                      ".MuiPickersCalendarHeader-label": {
                        textAlign: "center !important",
                        display: "flex",
                        position: "absolute",
                        paddingLeft: "80px",
                        color: "#071830",
                        fontFamily: "Poppins",
                        fontSize: "12.965px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "20.168px",
                      },
                      ".MuiPickersArrowSwitcher-button": {
                        color: "#0B98DA",
                      },
                      ".MuiPickersArrowSwitcher-spacer": {
                        width: "230px",
                      },
                    },
                  },
                  mobilePaper: {
                    sx: {
                      ".MuiPickersDay-root": {
                        color: "#071830",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "30px",
                      },
                      ".MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
                        background: "#0B98DA !important",
                        border: "none !important",
                      },
                      ".Mui-selected": {
                        background: "#0B98DA !important",
                        color: "white !important",
                      },
                    },
                  },
                  actionBar: {
                    sx: {
                      justifyContent: "space-around",
                      ".MuiButtonBase-root:first-child": {
                        display: "flex",
                        width: "128px",
                        padding: "10px 30px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "40px",
                        background: "#CEEAF8",
                        color: "#0B98DA",
                        marginBottom: "35px",
                      },
                      ".MuiButtonBase-root": {
                        display: "flex",
                        width: "128px",
                        padding: "10px 30px",
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

            <Box sx={{ pb: "15px", pt: "20px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default DeliveryDetail;
