import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@mui/material";

//MUI
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

  //Toggle the expansion
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="h2" color="#e8e8e8">
        Details
      </Typography>
      <Card
        color="#222"
        sx={{
          maxWidth: 350,
          m: "50px auto",
          color: "#00334e",
          backgroundColor: "#e8e8e8",
        }}
      >
        <CardHeader title={selectedMovie.title} />
        <CardMedia
          component="img"
          height="400"
          image={selectedMovie.poster}
          alt={selectedMovie.title}
        />
        {/* Mapping through the genres array and rendering each */}
        <Box display="flex" justifyContents="space-between">
          {genres.map((genre) => {
            return (
              <CardActions>
                <Typography variant="body2" color="#00334e">
                  {genre.genre}
                </Typography>
              </CardActions>
            );
          })}
        </Box>
        {/* Buttons for expanding and going back to the list view */}
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
        {/* Selected movie description that is able to be collapsed */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{selectedMovie.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default MovieDetails;
