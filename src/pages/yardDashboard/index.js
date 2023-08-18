import * as React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { MuiButton } from '../../components/Button'
import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import share from "../../assets/icons/share.svg";
import menu from "../../assets/icons/menu.svg";
import basketball from "../../assets/icons/basketball.svg";
import car from "../../assets/icons/car.svg";
import location from "../../assets/icons/location.svg";

import "./index.scss";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 16,
      fontWeight: 600,
      textAlign: "start",
    },
    subtitle1: {
      fontSize: 12,
      color: "#8492A7",
      textAlign: "start",
    },
    subtitle2: {
      fontSize: 10,
      color: "#8492A7",
      textAlign: "start",
    }
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

const Dashboard = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <Box
            sx={{
              bgcolor: "#fff",
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
              <img src={menu} alt="menu" />
              <Box>Yard Check</Box>
              <img src={share} alt="share" />
            </Box>

            <Box
              sx={{
                padding: "0px 22px 22px 32px",
              }}
            >
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Search"
                  endAdornment={
                    <InputAdornment
                      sx={{ position: "absolute", right: 0, padding: "16px" }}
                    >
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 32px",
                paddingBottom: "18px",
              }}
            >
              <Select
                variant="standard"
                IconComponent={ExpandMoreIcon}
                defaultValue={"1"}
                input={<SelectInput style={{ marging: '10px' }} />}
                disableUnderline
                sx={{
                  "& .MuiSvgIcon-root": {
                    right: "8px",
                  },
                }}
              >
                <MenuItem value={"1"} selected>
                  Yard Name
                </MenuItem>
                <MenuItem value={"2"}>45 °C </MenuItem>
                <MenuItem value={"3"}>35 °C</MenuItem>
                <MenuItem value={"4"}>25 °C</MenuItem>
              </Select>

              <Select
                variant="standard"
                IconComponent={ExpandMoreIcon}
                defaultValue={"1"}
                input={<SelectInput />}
                disableUnderline
                sx={{
                  "& .MuiSvgIcon-root": {
                    right: "8px",
                  },
                }}
          
              >
                <MenuItem value={"1"} selected>
                  Container
                </MenuItem>
                <MenuItem value={"2"}>45 °C </MenuItem>
                <MenuItem value={"3"}>35 °C</MenuItem>
                <MenuItem value={"4"}>25 °C</MenuItem>
              </Select>
            </Box>
          </Box>
        </header>

        <Box sx={{ padding: "34px" }}>
          {[1, 2, 3].map((val, index) => (
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow:
                  "3px 3px 42px 0px rgb(0 0 0 / 6%), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
                borderRadius: 2,
                padding: "18px 5px 5px",
                marginBottom: "12px",
              }}
              className="card"
            >
              <Box sx={{ display: "flex" }}>
                <Box className="avatar">
                  <img src={basketball} alt="basketball" />
                </Box>
                <Box sx={{ pl: "18px" }}>
                  <Typography variant="title">HLBU9605147</Typography>
                  <Typography variant="subtitle1">
                    Adipiscing. Faucibus arcu
                  </Typography>
                </Box>
              </Box>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "13px",
                }}
              >
                <Box
                  sx={{
                    background: "#F8F9FD",
                    borderRadius: "10px",
                    padding: "12px",
                    width: "41%",
                  }}
                >
                  <Box sx={{ display: "flex", marginBottom: "6px" }}>
                    <img src={car} alt="car"/>
                    <Typography variant="subtitle2" sx={{ marginLeft: "6px" }}>
                      Pick up Location
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="detail_txt">
                      Vestibulum vitae sapien arcu varius nunc arcu.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    background: "#F8F9FD",
                    borderRadius: "10px",
                    padding: "12px",
                    width: "41%",
                  }}
                >
                  <Box sx={{ display: "flex", marginBottom: "6px" }}>
                    <img src={location} alt="location"/>
                    <Typography variant="subtitle2" sx={{ marginLeft: "6px" }}>
                      Delivery Location
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="detail_txt">
                      Vestibulum vitae sapien arcu varius nunc arcu.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <div className="footer">
          <MuiButton><Link to={'/finallogcheck'} style={{ color: 'white' }}>Continue</Link>  </MuiButton>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
