import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import EchoingSand from "../../static/Landscape/Echoing-Sand.jpeg";
import EchoingSandCompressed from "../../static/Landscape/Echoing-Sand-Compressed.jpg";
import WuKangBuild from "../../static/Urban/Wukang-Building.jpeg";
import WuKangBuildCompressed from "../../static/Urban/Wukang-Building-Compressed.jpg";
import Bird from "../../static/Nature/Bird.jpeg";
import BirdCompressed from "../../static/Nature/Bird-Compressed.jpg";
import ShanghaiBund from "../../static/Night/Shanghai-Bund.jpeg";
import ShanghaiBundCompressed from "../../static/Night/Shanghai-Bund-Compressed.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    height: "34.5vh",
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
    height: "34.5vh",
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: EchoingSand,
      urlCompressed: EchoingSandCompressed,
      title: "Landscape",
      width: "65%",
      height: "34.5vh",
    },
    {
      url: WuKangBuild,
      urlCompressed: WuKangBuildCompressed,
      title: "Urban",
      width: "35%",
      height: "34.5vh",
    },
    {
      url: Bird,
      urlCompressed: BirdCompressed,
      title: "Wildlife",
      width: "40%",
      height: "34.5vh",
    },
    {
      url: ShanghaiBund,
      urlCompressed: ShanghaiBundCompressed,
      title: "Night",
      width: "60%",
      height: "34.5vh",
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Explore My Photographic Portfolio
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
              height: image.height,
              overflow: "hidden",
            }}
          >
            <div className={classes.imageSrc}>
              <LazyLoadImage
                src={image.url}
                alt="Background"
                PlaceholderSrc={image.urlCompressed}
                effect="blur"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                }}
              />
            </div>

            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
