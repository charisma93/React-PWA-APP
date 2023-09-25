import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  MuiBackButton,
  MuiSaveButton,
  AddPhotoButton,
} from "../../components/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import Calendar from "../../assets/icons/calendar.svg";
import "./index.scss";
import moment from "moment";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

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

const AddGenSet = () => {
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
                p: "22px 22px 22px 32px",
                fontFamily: "Poppins",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <Box>Yard Check</Box>
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
            <Box>
              <Box sx={{ display: "flex", p: "14px 0px" }}>
                <Typography variant="subtitle1" mt={1} width={"70%"}>
                  Date
                </Typography>
                <Input
                  placeholder="( Print Name/Signature )"
                  disableUnderline={true}
                  autoFocus={true}
                  className="input-box"
                  value={moment(value).format("DD/MM/YYYY")}
                  inputProps={{
                    sx: {
                      color: "#080808",
                      textAlign: "end",
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      paddingRight: "5px",
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
                  defaultValue={"2"}
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
                    1 / 4
                  </MenuItem>
                  <MenuItem value={"2"}>2 / 4 </MenuItem>
                  <MenuItem value={"3"}>3 / 4</MenuItem>
                  <MenuItem value={"4"}>4 / 4</MenuItem>
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

            <Box sx={{ pb: "5px", textAlign: "center" }}>
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>

        <div className="genset-footer">
          <MuiBackButton>
            <Link to={"/finallogcheck"} style={{ color: "#0B98DA" }}>
              Cancel{" "}
            </Link>
          </MuiBackButton>
          <MuiSaveButton>
            <Link to={"/finallogcheck"} style={{ color: "white" }}>
              Add{" "}
            </Link>
          </MuiSaveButton>
        </div>

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
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "30px",
                  },
                  ".MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
                    background: "#E0F5FF !important",
                  },
                  ".Mui-selected": {
                    background: "#E0F5FF !important",
                    color: "#0B98DA !important",
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
      </ThemeProvider>
    </>
  );
};

export default AddGenSet;
