import * as React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
// import { FaileButton } from "../../components/Button"
import SuccessMark from "../../assets/marks/success_mark.png";
// import FaileMark from "../../assets/marks/faile.png";
import "./info.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#536780",
      alignItems: "center",
      display: "flex",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: 13,
      color: "#000000",
      lineHeight: "16px",
      fontWeight: 600,
      width: "48%",
      alignItems: "center",
      display: "flex",
      justifyContent: "end",
      textAlign: "right",
    },
  },
});

const Content = (props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setTimeout(() => {
      navigate("/shipinfo");
    }, 1500);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="info-page">
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow:
                "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
              borderRadius: 2,
              p: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Trucking Comp
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                Polaris
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Driver Name
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                ABC
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" width={"50%"}>
                Container #
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                HLBU9605147
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Booking #
              </Typography>
              <Typography variant="subtitle2" className="link" witdth={"50%"}>
                9051304333-01
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" width={"50%"}>
                Pick Up Terminal
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                Norfolk International Terminal
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Load Location
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                CSL Plasma LLC
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Steam Ship
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                HAPAG LLOYD AG
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                PU date
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                09/26/2023
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "15px",
                pb: "15px",
              }}
            >
              <Typography variant="subtitle1" witdth={"50%"}>
                Steam Ship
              </Typography>
              <Typography variant="subtitle2" width={"50%"}>
                HAPAG LLOYD AG
              </Typography>
            </Box>
          </Box>
        </div>

        {/* success */}
        <Dialog onClose={handleClose} open={false}>
          <Box
            sx={{
              textAlign: "center",
              padding: "23px 17px 37px",
              width: "250px",
            }}
          >
            <Box>
              <img src={SuccessMark} alt="mark" />
            </Box>
            <Typography variant="title">Save Success</Typography>
            <Typography mt={2} variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
              eiusmod tempor
            </Typography>
          </Box>
        </Dialog>

        {/* failed */}
        <Dialog open={props.open} onClose={handleClose}>
          {/* <Box
            sx={{
              textAlign: "center",
              padding: "23px 17px 37px",
              width: "230px",
            }}
          >
            <Box mt={3}>
              <img src={FaileMark} alt="mark" />
            </Box>
            <Typography variant="title">Failed to save</Typography>
            <Typography mt={2} variant="subtitle1">
              <span
                style={{
                  fontWeight: 700,
                  fontFamily: "Poppins",
                  fontSize: 13,
                  color: "#536780",
                }}
              >
                Oops!
              </span>{" "}
              we have encountered an unexpected error, please resubmit the
              information.
            </Typography>
            <Box mt={2}><FaileButton onClick={() => handleClose()}>OK</FaileButton></Box>
          </Box> */}
          <Box
            sx={{
              textAlign: "center",
              padding: "23px 17px 37px",
              width: "250px",
            }}
          >
            <Box>
              <img src={SuccessMark} alt="mark" />
            </Box>
            <Typography variant="title">Save Success</Typography>
            <Typography mt={2} variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
              eiusmod tempor
            </Typography>
          </Box>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default Content;
