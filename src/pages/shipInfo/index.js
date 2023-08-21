import * as React from "react";
import { Box, Typography, Input, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiBackButton, MuiSaveButton } from "../../components/Button";
import share from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";
import "./shipInfo.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 14,
      color: "#8492A7",
      marginTop: "3px !important",
      textAlign: "start",
    },
  },
});

const ShipInfo = () => {
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
              <Box>Shipment Information</Box>
              <img src={share} alt="share" />
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
              textAlign: "center",
              height: "454px",
            }}
          >
            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                K+N #{" "}
              </Typography>
              <Input
                disableUnderline={true}
                autoFocus={true}
                style={{ width: "60%" }}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                Truck #{" "}
              </Typography>
              <Input
                style={{ width: "60%" }}
                disableUnderline={true}
                autoFocus={true}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                Seal #{" "}
              </Typography>
              <Input
                style={{ width: "60%" }}
                disableUnderline={true}
                autoFocus={true}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                Load Time #{" "}
              </Typography>
              <Input
                style={{ width: "60%" }}
                disableUnderline={true}
                autoFocus={true}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                Return{" "}
              </Typography>
              <Input
                style={{ width: "60%" }}
                disableUnderline={true}
                autoFocus={true}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "8px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                {" "}
                Load Location{" "}
              </Typography>
              <Input
                style={{ width: "60%" }}
                disableUnderline={true}
                autoFocus={true}
                placeholder="Type"
                inputProps={{
                  sx: {
                    textAlign: "right",
                    "&::placeholder": {
                      textAlign: "right",
                    },
                  },
                }}
              />
            </Box>
            <Divider />
          </Box>

          <Box
            sx={{
              padding: "64px 0px",
              display: "flex",
              justifyContent: "space-between",
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
              <Link to={"/info/2"} style={{ color: "white" }}>
                {" "}
                Save{" "}
              </Link>
            </MuiSaveButton>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ShipInfo;
