import * as React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MuiBackButton,
  MuiSaveButton,
  MuiButton,
} from "../../components/Button";

const Content = (props) => {
  const { id } = useParams();

  return (
    <>
      {id !== "1" && id !== "6" ? (
        <Box
          sx={{
            padding: "64px 32px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <MuiBackButton>
            <Link to={`/info/${Number(id) - 1}`} style={{ color: "#0B98DA" }}>
              {" "}
              Back{" "}
            </Link>
          </MuiBackButton>
          <MuiSaveButton>
            <Link
              to={`${id === "3" ? "/driverinfo" : `/info/${Number(id) + 1}`} `}
              style={{ color: "white" }}
            >
              {" "}
              {id === "3" ? "Skip" : "Save"}{" "}
            </Link>
          </MuiSaveButton>
        </Box>
      ) : (
        <Box
          sx={{
            padding: "0px 32px",
          }}
        >
          <Box mt={3}>
            {id === "6" ? (
              <MuiButton>
                <Link to={"/dashboard"} style={{ color: "white" }}>
                  Click here to complete shipment
                </Link>
              </MuiButton>
            ) : (
              <MuiButton onClick={() => props.setOpen(true)}>
                Continue
              </MuiButton>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Content;
