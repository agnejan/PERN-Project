import React, {useContext} from "react";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import components from "../styling/components.css";
import { QuotesContext } from "../context/QuotesContext";

export default function BasicButtons(props) {
  const { deleteUserQuote} = useContext(QuotesContext);
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
  const handleClick = () => {
    deleteUserQuote(props.id) /// here means that the function is only fired when the click happens and not always
  }
  
  return (
    
    <LightTooltip title="remove" placement="top" >
      <ClearIcon
        className="DeleteButton"
        variant="text"
        color="action"
        onClick={handleClick} // insteadof writing () => {deleteUserQuote(props.id)}
      />
    </LightTooltip>
 
  );
}
