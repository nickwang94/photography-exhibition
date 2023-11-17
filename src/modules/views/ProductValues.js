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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={curvyLines} className={classes.curvyLines} alt="curvyLines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img src={Portrait} className={classes.image} alt="Portrait" />
              <Typography variant="h6" className={classes.title}>
                {t("About Me")}
              </Typography>
              <Typography variant="h5">{t("Intro")}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Landscape} alt="Landscape" />
              <Typography variant="h6" className={classes.title}>
                {t("My Journey in Photography")}
              </Typography>
              <Typography variant="h5">{t("Journey")}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Equipment} alt="Equipment" />
              <Typography variant="h6" className={classes.title}>
                {t("My Photography Gear")}
              </Typography>
              <Typography variant="h5">{t("Gear")}</Typography>
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
