import React from "react";

import { makeStyles } from "@mui/styles";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styles/Application.scss";
import useApplicationData from "../hooks/useApplicationData"
import List from "./List"
import Item from "./Item"




const MESSAGE = "Brought to you by Nasa's Api"
const TITLE = "Spacetagram"





//Declare material ui styling here
const useStyles = makeStyles((theme) => ({
  '@global':{
    main:{
      backgroundColor:"white",
      color:'black',
      

    }
  },
  appBar: {
    backgroundColor: 'white',
    display:'flex',
    alignItems:"flex-end",
    '@media print' : {
      display: 'none',
    }
  },
  toolBar: {

    backgroundColor: 'white',
    color: "black",
    // display:"flex", 
    // justifyContent: "space-between", 
    width:"100%" 
    
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize:"2.5em"
  },
  message: {
    paddingLeft:"24px"
  }  
  
  
}));

export default function Application(props) {
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
        <section >
          <div>
            
              
        
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
