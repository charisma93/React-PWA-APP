import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Checkbox,
  Input,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Calendar from "../../../assets/icons/calendar.svg";
import "./index.scss";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      marginTop: "3px !important",
      textAlign: "start",
      paddingLeft: 5,
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
  const [value, setValue] = React.useState("");

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
            <Box sx={{ p: "14px 0px", display: "flex" }}>
              <Box variant="title" mt={1} width={"35%"} />
              <Typography variant="title" mt={1} width={"30%"}>
                Arrival
              </Typography>
              <Typography variant="title" mt={1} width={"35%"} color={"red"}>
                Departure
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Date
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                06 - 15 - 23
              </Typography>
              <div className="divider-line" />
              <Typography
                variant="subtitle2"
                mt={1}
                width={"35%"}
                color={"red"}
              >
                06 - 15 - 23
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Supply Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                45 °C
              </Typography>
              <div className="divider-line" />
              <Typography
                variant="subtitle2"
                mt={1}
                width={"35%"}
                color={"red"}
              >
                45 °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Return Temp
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                45 °C
              </Typography>
              <div className="divider-line" />
              <Typography
                variant="subtitle2"
                mt={1}
                width={"35%"}
                color={"red"}
              >
                45 °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"35%"}>
                Fuel Level
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"30%"}>
                1/4
              </Typography>
              <div className="divider-line" />
              <Typography
                variant="subtitle2"
                mt={1}
                width={"35%"}
                color={"red"}
              >
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
                value={moment(value).format('YYYY-MM-DD, h:mm:ss a')}
              />
              <img src={Calendar} alt="calendar" 
                onClick={() => setIsOpen(true)}/>
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
                value={moment(value).format('YYYY-MM-DD, h:mm:ss a')}
              />
              <img
                src={Calendar}
                alt="calendar"
                onClick={() => setIsOpen(true)}
              />
            </Box>
            <Divider />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                open={isOpen}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={(newDate) => {
                  console.log(newDate)
                  setValue(newDate);
                }}
                inputFormat="MM-dd-yyyy"
                views={["day"]}
                slotProps={{
                  field: { sx: {
                    display: 'none'
                  } },
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

            <Box sx={{ pb: "35px", pt: "20px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default DeliveryDetail;
