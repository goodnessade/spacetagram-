import React from "react";

import { makeStyles } from "@mui/styles";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useApplicationData from "../hooks/useApplicationData"
import List from "./List"

import "../styles/Application.scss";


//Declare material ui styling here
const useStyles = makeStyles((theme) => ({
  '@global':{
    main:{
      backgroundColor:"#004c3f",
      color:'#fbf7ed',
      

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

    backgroundColor: '#004c3f',
    display:"flex", 
    justifyContent: "space-between", 
    width:"100%" 
    
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
        </Toolbar>
      </AppBar>

      <main className="layout">
        <section >
          <div>
            
              Spacetagram
        
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
