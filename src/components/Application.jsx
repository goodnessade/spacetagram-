import React from "react";

import { makeStyles } from "@mui/styles";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useApplicationData from "../hooks/useApplicationData"
import List from "./List"
import Item from "./Item"

import "../styles/Application.scss";
import { fontSize } from "@mui/system";

const MESSAGE = "Brought to you by Nasa's Api"
const TITLE = "Spacetagram"

//Declare material ui styling here
const useStyles = makeStyles((theme) => ({
  '@global':{
    main:{
      backgroundColor:"#001029",
      color:'#f5f5f5'
    }
  },
  appBar: {
    
    display:'flex',
    alignItems:"flex-start",
    '@media print' : {
      display: 'none',
    }
  },
  toolBar: {
    backgroundColor: "#282828",
    width:"100%",
  },
  cardTitle : {
    fontWeight: "bold",
    fontSize:"2.5em"
  },
  message: {
    width: "100%",
    backgroundColor: "#282828",
    paddingLeft:"24px"
  }  
}));

export default function Application() {
  const classes = useStyles();

  // material ui theme
  const theme = createTheme({
    palette: {
      background: {
        main: 'white',
      },
    }
  });

  const {
    nasaInfo,
    loading
  } = useApplicationData();


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>  
          <div className={classes.cardTitle}>{TITLE}</div>     
        </Toolbar>
        <div className={classes.message}>{MESSAGE}</div> 
      </AppBar>
      <main className="layout">
          { !loading &&
            <List nasaInfo={nasaInfo} style={{width:"100%"}}/>
          }
          { loading &&
            <div> .....Loading</div>
          }
      </main>
    </ThemeProvider>
  );
}
