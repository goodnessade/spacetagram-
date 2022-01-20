import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: 300,
    maxHeight:"450px",
    margin: "10px 5px 10px 18px",
    borderRadius: "10px",
    boxShadow: "-15px -15px 15px rgba(255, 255, 255, 0), 15px 15px 15px rgba(255,255,255,0.3)",



  },
  media: {
    backgroundSize: "contain",
    height: 220,
  },
  mediaContent: {
    padding: "1em 1em 0em 1em"
  },
  date: {
    fontSize:"0.8em",
    fontWeight:"100",
    margin:"0em 0em 0.4em 0em"
  },
  description: {
    marginBottom:"0.4em"
  },
  icon: {
    marginLeft:"0.4em"
  },
  name: {
    marginBottom:"0.5em",
    fontSize:"1em"
  }


});

export default function Item(props) {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.mediaContent}>
            <CardMedia
            className={classes.media}
            // image={image}
            alt="product image"
            title="nasa pic"
            />
          </div>
          <CardContent>
            <div className={classes.name}>
              {/* {name} */}
            </div>
            <div className={classes.date}> Date - </div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
             Launch Date - 
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
             Landing Date - 
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
             Status - 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
        <ThumbUpIcon className={classes.icon}/>
        </CardActions>
      </Card>
    </>
  );
}
