import * as React from "react";
import { Box, Typography } from "@mui/material";
import { MuiButton } from "../../components/Button";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import lockIcon from "../../assets/icons/lock.png";
import profileIcon from "../../assets/icons/Profile.png";
import logoicon from "../../assets/icons/Login.png";
import eyeicon from "../../assets/icons/eye_hide.png";

import "./index.scss";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
    },
    subtitle1 : {
      color: '#656472',
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
    }
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: "47px",
    position: "relative",
    fontSize: 14,
    paddingLeft: "35px",
    paddingRight: "35px",
    color: "#536780",
    borderRadius: "28px",
    border: "1px solid rgba(221, 221, 221, 0.87)",
    background: "#FFF",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {},
  },
}));

const Login = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "27px",
            paddingRight: "27px",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              justifyContent: "center",
              fontFamily: "Poppins",
              width: "100%",
              height: "393px",
              borderRadius: "10px",
              padding: "26px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={logoicon}
                style={{ width: "58px", height: "56px", marginTop: "25px" }}
                alt="icon"
              />
            </Box>

            <Typography
              variant="subtitle1"
              mt={1}
              fontSize={"20px"}
              fontStyle={"normal"}
              fontFamily={"Poppins"}
              fontWeight={"600"}
              color={"#080808"}
            >
              Log In
            </Typography>

            <Box>
              <FormControl
                variant="standard"
                sx={{ width: "100%", marginTop: "15px" }}
              >
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Phone, email or username"
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{
                        position: "absolute",
                        left: 0,
                        padding: "10px",
                        zIndex: 1
                      }}
                    >
                      <img src={profileIcon} alt="icon" />
                    </InputAdornment>
                  }
                  inputProps={{
                    sx: {
                      backgroundColor: "white"
                    }
                  }}
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "100%", marginTop: "15px" }}
              >
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Password"
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{
                        position: "absolute",
                        left: 0,
                        padding: "10px",
                        zIndex: 1,
                      }}
                    >
                      <img src={lockIcon} alt="icon" />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ position: "absolute", right: 0, padding: "16px" }}
                    >
                      <img src={eyeicon} alt="icon" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box style={{ marginTop: "6px" }}>
              <Typography
                variant="subtitle1"
                mt={1}
                fontSize={"12px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                color={"#656472"}
                sx={{ textAlign: "end" }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Box sx={{ marginTop: '20px' }}>
              <MuiButton>
                <Link to={"/yardDashboard"} style={{ color: "white" }}>
                  Login
                </Link>
              </MuiButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
