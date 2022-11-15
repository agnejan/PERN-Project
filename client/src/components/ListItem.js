import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const quote = props.quote;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 356 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          style={{ fontStyle: "italic" }}
        >
          {quote.author}
        </Typography>
        <Typography variant="body2">{quote.quote}</Typography>
        <Typography
          sx={{ mt: 1.5, fontSize: 14 }}
          color="text.secondary"
          style={{ fontStyle: "italic" }}
        >
          {quote.publication}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
