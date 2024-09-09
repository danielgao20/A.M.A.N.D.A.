import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

//Style component
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "auto",  // Ensure links are pushed to the right
    display: "flex",
    borderRadius: "5px",
  },

  logo: {
    flexGrow: "0",
    cursor: "pointer",
    marginLeft: "1%",  // Slight margin to the left
    marginRight: theme.spacing(5),  // Add more space between the logo and title
    width: "50px",  // Control the size of the logo
    height: "auto",  // Maintain aspect ratio
  },

  title: {
    fontFamily: 'Poppins, sans-serif',  // Use Poppins for title
    flexGrow: "1",
    color: "white",
    marginLeft: theme.spacing(2),  // Additional spacing between logo and title
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),  // Increase spacing between links
    fontFamily: 'Poppins, sans-serif',  // Ensure links use Poppins
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: "#12232E" }}>
      <CssBaseline />
      <Toolbar>
        <img className={classes.logo} src="./../../static/images/AMANDA_Logo.png" alt="Logo" />
        <Typography variant="h5" className={classes.title}>
          A.M.A.N.D.A.
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
