import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import Portrait from "../../static/icon/Portrait.png";
import Landscape from "../../static/icon/Landscape.png";
import Equipment from "../../static/icon/Equipment.png";
import curvyLines from "../../static/background/curvy_lines.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={curvyLines} className={classes.curvyLines} alt="curvyLines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img src={Portrait} className={classes.image} alt="Portrait" />
              <Typography variant="h6" className={classes.title}>
                About Me
              </Typography>
              <Typography variant="h5">
                {
                  "I am a computer science master's graduate currently working in the finance industry in Shanghai, China. My passion for photography is a creative outlet that I've been exploring, even though my professional background is in a different field. Photography is a hobby that has gradually turned into a significant part of my life. It's a journey of continuous learning and self-expression, and I'm excited to share it with you through this website."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Landscape} alt="Landscape" />
              <Typography variant="h6" className={classes.title}>
                My Journey in Photography
              </Typography>
              <Typography variant="h5">
                {
                  "My journey into the world of photography began as a hobby. Although I am relatively new to this art, I've been captivated by the process of capturing moments and the beauty that exists in our everyday lives. My initial experiences with a camera were filled with trial and error, but this process of learning has been incredibly rewarding. I'm constantly seeking to improve my skills, explore new techniques, and document the world through my lens."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Equipment} alt="Equipment" />
              <Typography variant="h6" className={classes.title}>
                My Photography Gear
              </Typography>
              <Typography variant="h5">
                {
                  "For my photographic endeavors, I primarily use a Canon 80D camera, paired with EF-S 18-135mm f/3.5-5.6 IS STM lens, and EF 17-40mm 1:4 L USM. This versatile setup allows me to adapt to various shooting conditions, from wide-angle landscapes to close-up portraits. While I may not have an extensive array of equipment, I believe in the power of creativity and vision over the sheer number of gadgets. It's not about the gear, but how you use it to tell your visual story."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
