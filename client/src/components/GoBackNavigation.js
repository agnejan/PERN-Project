import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router-dom";

function GoBackNavigation() {
  let navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <ArrowBackIosRoundedIcon onClick={() => navigate(-1)} />
    </div>
  );
}

export default GoBackNavigation;
