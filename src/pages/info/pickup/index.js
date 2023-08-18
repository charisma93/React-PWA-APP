import * as React from "react";
import {
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  Button,
  Checkbox,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./pickup.scss";

const theme = createTheme({
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

const AddPhotoButton = styled(Button)({
  fontFamily: "Poppins",
  borderRadius: "40px",
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

const PickUp = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Outgate
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"60%"}>
                °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Supply
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"60%"}>
                °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
              <Typography variant="subtitle1" mt={1} width={"40%"}>
                Return
              </Typography>
              <Typography variant="subtitle2" mt={1} width={"60%"}>
                °C
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: "flex", p: "14px 0px" }}>
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

            <Box sx={{ display: "flex", p: "14px 0px" }}>
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

            <Box sx={{ display: "flex", p: "14px 0px" }}>
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

            <Box sx={{ display: "flex", p: "14px 0px" }}>
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

            <Box sx={{ display: "flex", p: "14px 0px" }}>
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
              <AddPhotoButton>Click here to add Photo</AddPhotoButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default PickUp;
