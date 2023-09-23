import React,{ useState,useEffect, useCallback} from "react";
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Webcam from "react-webcam";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import ellpseIcon from "../../assets/icons/ellpse_btn.png";
import switchIcon from "../../assets/icons/Switch_btn.png"
import headerimg from "../../assets/icons/headeImg.png";

const theme = createTheme({
  typography: {
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 14,
      color: "#8492A7",
    },
  },
});

const Webcamera = () => {


  const webcamRef = React.useRef(null);
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);


  const add_photo =  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setTimeout(() => {
      localStorage.setItem("img_data",imageSrc);
      localStorage.setItem("cam_set",1);
       navigate('/info/2');
    },100);
         
    };

  return (
    <>
      <Box sx = {{width: "99%",height: "100%",backgroundColor: "#000"}}>
        <header>
          <Box
            sx={{
              bgcolor: "#000",
              height: 70,
            }}
          >
           
          </Box>

          <Box
            sx={{
              bgcolor: "#000",
              height: 44,
            }}
          >
            <img src= {headerimg} />
          </Box>
        </header>

          <Box
            sx={{
              bgcolor: "#000",
              width: "100%",
              height: "562px",
 
            }}
          >
            <Webcam
                audio={false}
                screenshotFormat="image/webp"
                ref={webcamRef}
                style = {{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}}
            />
               
          </Box>

          <Box sx={{ pb: "35px", textAlign: "center",backgroundColor: "#000" }}>
            <img
              src={ellpseIcon}
              style={{marginTop: "66px"}}
              onClick={() =>add_photo()}
            />

            <img
              src={switchIcon}
              style={{position: "absolute", right: "24px", bottom: "10px"}}
              onClick={() =>add_photo()}
            />
          </Box>
    
      </Box>
    </>
  );
};

// const mapStateToProps = (state)=>{
//   const {url} = state.imgInfo;
//   return {url};
// }

//export default connect(mapStateToProps, takenImage) (Webcamera);
export default Webcamera;
