import * as React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { MuiButton } from "../../components/Button";
import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import lockIcon from "../../assets/icons/lock.png"
import profileIcon from "../../assets/icons/Profile.png"
import logoicon from "../../assets/icons/Login.png";
import eyeicon from "../../assets/icons/eye_hide.png";

import "./index.scss";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
    },
    // subtitle1: {
    //   fontSize: 12,
    //   color: "#8492A7",
    //   textAlign: "start",
    // },
    // subtitle2: {
    //   fontSize: 10,
    //   color: "#8492A7",
    //   textAlign: "start",
    // },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: "30px",
    borderRadius: 28,
    position: "relative",
    backgroundColor: "#F8F9FD",
    border: "none",
    fontSize: 14,
    paddingLeft: "35px",
    paddingRight: "35px",
    // padding: "8px 16px",
    color: "#536780",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {},
  },
}));

const SelectInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: "30px",
    width: "117px",
    borderRadius: 28,
    position: "relative",
    backgroundColor: "#FFFF",
    border: "1px solid #DDDDDD",
    fontSize: 14,
    padding: "8px 16px",
    color: "#536780",
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
    < >
      <ThemeProvider theme={theme}>
        <Box sx = {{marginTop: "108px", display: "flex",paddingLeft: "40px",paddingRight: "40px"}}>
          <Box sx = {{marginTop: "117px",bgcolor : "#fff",justifyContent: "center",fontFamily: "Poppins",width: "100%",height: "393px",borderRadius: "10px"}} >
            <Box sx={{display: "flex",justifyContent: "center"}}>
              <img src={logoicon} style={{width:"58px",height: "56px",marginTop: "25px"}} />
            </Box>

              <Typography variant="subtitle1" mt={1} fontSize={"20px"} fontStyle={"normal"} fontWeight={"600"} color={"#080808"} marginLeft={"26px"}>
                  Log In
              </Typography>
           
              <Box
                sx={{
                  padding: "0px 22px 0px 32px",
                }}
              >
              <FormControl variant="standard" sx={{ width: "100%", marginTop: "15px" }}>
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Phone, email or username"
                  startAdornment={
                    <InputAdornment
                      sx={{ position: "absolute", left: 0, padding: "10px",zIndex: 1 }}
                    >
                      <img src={profileIcon} />
                    </InputAdornment>
                  }
                  // endAdornment={
                  //   <InputAdornment
                  //     sx={{ position: "absolute", right: 0, padding: "16px" }}
                  //   >
                  //     <img src={eyeicon} />
                  //   </InputAdornment>
                  // }
                />
              </FormControl>

              <FormControl variant="standard" sx={{ width: "100%", marginTop: "15px" }}>
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Password"
                  startAdornment={
                    <InputAdornment
                      sx={{ position: "absolute", left: 0, padding: "10px", zIndex: 1 }}
                    >
                      <img src={lockIcon} />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment
                      sx={{ position: "absolute", right: 0, padding: "16px" }}
                    >
                      <img src={eyeicon} />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box> 
            
            <Box style = {{marginTop: "6px"}}>
              <Typography variant="subtitle1" mt={1} fontSize={"12px"} fontStyle={"normal"} fontWeight={"400"} color={"#656472"} marginLeft={"194px"}>
                    Forgot Password?
              </Typography>
            </Box>
           
           <Box sx={{padding: "26px"}}>
            <MuiButton>
              Login
            </MuiButton>
           </Box>
            
          </Box> 
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
