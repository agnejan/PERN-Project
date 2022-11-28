import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";

function GoBackNavigation() {
  let history = useHistory();
  return (
    <div>
      <ArrowBackIosIcon onClick={() => history.goBack()} />
    </div>
  );
}

export default GoBackNavigation;
