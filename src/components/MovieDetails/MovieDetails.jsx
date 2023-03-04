import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@mui/material";

//mui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function MovieDetails() {
  const history = useHistory();
  const selectedMovie = useSelector((store) => store.selectedMovieDetails);
  const genres = useSelector((store) => store.genres);

  //Variable to determine whether or not the card is expanded
  const [expanded, setExpanded] = useState(false);

  const ExpandMore = styled((expanded) => {
    const { expand, ...other } = expanded;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader title={selectedMovie.title} />
      <CardMedia
        component="img"
        height="400"
        image={selectedMovie.poster}
        alt={selectedMovie.title}
      />
      {genres.map((genre) => {
        return (
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              {genre.genre}
            </Typography>
          </CardActions>
        );
      })}
      <CardActions disableSpacing>
        <IconButton
          aria-label="Back to movie list"
          onClick={() => {
            history.push(`/`);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{genres.gernre}</Typography>
          <Typography paragraph>{selectedMovie.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MovieDetails;
