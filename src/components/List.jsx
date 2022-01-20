import React from "react";
import "../styles/List.scss";
import Item from "./Item";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  root: {
    display:"flex",
  },
});

const List = (props) => {
  const classes = useStyles();
  const {
    nasaInfo
  } = props;

  const nasaRenders = nasaInfo.map((info) => {
    return (<div className={classes.root}>
        <Item key={info.id} id={info.id} rover={info.rover} camera={info.camera} date={info.earth_date} image={info.img_src}/>
      </div>)
  })

  return (
    nasaRenders
  );
};


export default List;
