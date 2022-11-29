import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import components from "../styling/components.css";

export default function BasicButtons(props) {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <LightTooltip title="remove" placement="top">
      <ClearIcon
        className="DeleteButton"
        variant="text"
        color="action"
        onClick={props.onClickDeleteButton}
      />
    </LightTooltip>
  );
}
