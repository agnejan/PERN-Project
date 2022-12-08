import {react, useContext, useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { style } from "@mui/system";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import LikeButton from "./LikeButton";
import {FavoritesContext} from "../context/FavoritesContext"
import {AuthContext} from "../context/AuthContext"

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function BasicCard(props) {

  const quote = props.item;

  const { favoritesAction, favorites} = useContext(FavoritesContext);
  const { user} = useContext(AuthContext);

  const isFavorite = () => {
  if(favorites.filter((item)=> item.id === quote.id).length > 0) {
     return true;
   } else {
      return false;
   };
  };

  return (
    <Card
      raised={true}
      sx={{ minWidth: 340, maxWidth: 340 }}
      style={{
        backgroundColor: "white",
      }}
    >
      <CardContent
        style={{
          paddingTop: 15,
          paddingBottom: 0,
        }}
      >
        {props.showDeleteButton && (
          <RemoveButton id={quote.id} />
        )}
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          style={{
            fontStyle: "italic",
            fontFamily: "'Merriweather', serif",
          }}
        >
          {quote.author}
        </Typography>
        <Typography
          variant="body2"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          {quote.quote}
        </Typography>
        <Typography
          sx={{ mt: 1.5, fontSize: 14 }}
          color="text.secondary"
          style={{ fontStyle: "italic", fontFamily: "'Merriweather', serif" }}
        >
          {quote.publication}
        </Typography>
      </CardContent>
      <CardActions style={{dislay: "flex", flexDirection:"row", justifyContent: "space-between"}}>
        <Button
          size="small"
          component={Link}
          to={`/quotes/${quote.id}`}
          id={quote.id}
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          View Details
        </Button>
        {user &&
        <LikeButton
        checked={isFavorite()}
        onChange={()=> favoritesAction(quote)}
        />}
      </CardActions>
    </Card>
  );
}
