import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import backgroundImage from "../../static/background/home_pic.jpeg";
import backgroundImageCompressed from "../../static/background/home_pic_compressed.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const { t } = useTranslation();

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <LazyLoadImage
        src={backgroundImage}
        alt="Background"
        PlaceholderSrc={backgroundImageCompressed}
        style={{ display: "none" }}
        effect="blur"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        nickwang.online
      </Typography>
      <br />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        {t("Capturing Life's Beauty Through My Lens")}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/sign-up/"
      >
        {t("Register")}
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        {t("Embark on a Visual Journey")}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
