import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  IconButton,
  Checkbox,
  Input,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { Icon } from "@iconify/react";
import Webcam from "react-webcam";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import {
  AddPhotoButton,
  CaptureButton,
  MuiButton,
  FaileButton,
} from "../../../components/Button";
import "./pickup.scss";
import trashicon from "../../../assets/marks/trash.png";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#080808",
          textAlign: "right",
          fontFamily: "Poppins",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "-0.52px",
        },
      },
    },
  },

  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#8492A7",
      marginTop: "3px !important",
      textAlign: "start",
      letterSpacing: 0,
      display: "flex",
      alignItems: "center"
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#8492A7",
      marginTop: "3px !important",
      textAlign: "end",
    },
  },
});

const PickUp = (props) => {
  const [checked, setChecked] = React.useState(true);
  const webcamRef = React.useRef(null);

  const [isViewPhoto, openCamera] = React.useState(false);
  const [photoImg, setPhoto] = React.useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const add_photo = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc)
    setPhoto(imageSrc);
  };

  const handleClose = () => {};

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: "65px 26px 0px 26px" }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Outgate
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

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Supply
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

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Return
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

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"50%"}>
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

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"50%"}>
                Genset Type
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
                  defaultValue={"1"}
                  disableUnderline
                >
                  <MenuItem value={"1"} selected>
                    Genset Clip
                  </MenuItem>
                  <MenuItem value={"2"}>Penset Clip</MenuItem>
                </Select>
              </Box>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"90%"}>
                Does set Temp match K+N Order
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
                    paddingLeft: "0",
                  }}
                />
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  width: "10%",
                  justifyContent: "end",
                }}
              >
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
            <Divider />

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"90%"}>
                Sufficient fuel is provided
              </Typography>
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "10%",
                  justifyContent: "end",
                }}
              >
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
            <Divider />

            <Box sx={{ display: "flex", alignItem: "center", height: "47px" }}>
              <Typography variant="subtitle1" mt={1} width={"90%"}>
                Reefer isin god condition
              </Typography>
              <Box
                sx={{
                  alignItems: "end",
                  display: "flex",
                  width: "10%",
                  justifyContent: "end",
                }}
              >
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
            <Divider />

            <Box sx={{ pt: "17px" }}>
              {photoImg == null && (
                <AddPhotoButton onClick={() => openCamera(true)}>
                  Click here to add Photo
                </AddPhotoButton>
              )}

              {photoImg != null && (
                <Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img
                      src={photoImg}
                      alt="Captured"
                      style={{
                        width: "50px",
                        height: "46px",
                        borderRadius: 10,
                      }}
                    />

                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffffff",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={trashicon}
                        style={{ width: 14, height: 15 }}
                        onClick={() => {
                          setPhoto(null)
                        }}
                        alt="camera"
                      />
                    </Box>
                  </Box>

                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {/* success */}
        <Dialog onClose={handleClose} open={isViewPhoto}>
          <Box
            sx={{
              textAlign: "center",
              width: "326px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                padding: "23px 17px 17px",
              }}
              onClick={() => openCamera(false)}
            >
              <CloseIcon />
            </Box>
            <Box>
              {photoImg != null ? (
                <Box style={{ width: "100%", height: "276px" }}>
                <img
                style={{ width: "100%", height: "100%" }}
                  src={photoImg}
                  alt="mark"
                />
                </Box>
              ) : (
                <Webcam
                  audio={false}
                  screenshotFormat="image/webp"
                  ref={webcamRef}
                  style={{
                    width: "100%",
                    height: "276px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
            </Box>
            <Box
              sx={{
                padding: "25px 0px 35px",
              }}
            >
              {photoImg == null ? (
                <Box>
                  <CaptureButton onClick={() =>add_photo()}/>
                  <IconButton
                    sx={{
                      background: "#F1F3FC",
                      width: "40px",
                      position: "absolute",
                      right: "15%",
                      bottom: "10%",
                    }}
                  >
                    <Icon icon="ri:loop-right-fill" color="#0B98DA" />
                  </IconButton>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <FaileButton
                    style={{
                      width: "140px",
                      height: "40px",
                    }}
                    onClick={() => setPhoto(null)}
                  >
                    Retake
                  </FaileButton>
                  <MuiButton
                    style={{
                      width: "140px",
                      height: "40px",
                    }}
                    onClick={() => openCamera(false)}
                  >
                    Use Photo
                  </MuiButton>
                </Box>
              )}
            </Box>
          </Box>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default PickUp;
