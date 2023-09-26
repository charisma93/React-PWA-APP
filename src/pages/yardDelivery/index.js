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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: "Poppins",
      fontSize: 16,
      textAlign: "start",
      fontWeight: 500,

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
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [value, setValue] = React.useState(moment.now());

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
                Date
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"70%"}>
                06/15/2023
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
                  "&.MuiCheckbox-root": {
                    padding: "0px 8px 15px 0px!important",
                  },
                  ".MuiButtonBase-root-MuiCheckbox-root": {
                    padding: '0px !important'
                  },
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

            <Box>
              <Typography variant="subtitle1" mt={1}>
                Receiver
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "50%",
                    borderRight: "1px solid #EAEAEA",
                    height: "20px",
                  }}
                >
                  <Input
                    disableUnderline={true}
                    autoFocus={true}
                    placeholder="Print Name/Signature"
                    inputProps={{
                      sx: {
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.48px",
                        paddingRight: '5px',
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
                <Box sx={{ width: "50%" }}>
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
                          paddingRight: "5px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        },
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
                    width: "50%",
                    borderRight: "1px solid #EAEAEA",
                    height: "20px",
                  }}
                >
                  <Input
                    disableUnderline={true}
                    autoFocus={true}
                    placeholder="Print Name/Signature"
                    inputProps={{
                      sx: {
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.48px",
                        paddingRight: '5px',
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
                <Box sx={{ width: "50%" }}>
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
                          paddingRight: "5px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        },
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

            <Box sx={{ pb: "10px", pt: "20px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>

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
