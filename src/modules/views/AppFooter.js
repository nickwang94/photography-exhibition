import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexFlow: "nowarp",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "zh",
    name: "Chinese",
  },
];

export default function AppFooter() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const selectLanguage = useCallback(
    (event) => {
      i18n.changeLanguage(event.target.value);
    },
    [i18n]
  );

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={2} sm={2} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              {t("language")}
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
                onChange: selectLanguage,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((item) => (
                <option value={item.code} key={item.code}>
                  {t(item.name)}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={5} sm={5} md={5}>
            <Typography variant="h6" marked="left" gutterBottom>
              {t("Contact Me")}
            </Typography>
            <Typography variant="body1" marked="left" gutterBottom>
              {t("Email")} nick.wenkun.wang@outlook.com
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5} md={5}>
            <Typography variant="h6" marked="left" gutterBottom>
              {t("Record Number")}
            </Typography>
            <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
              <ul>
                <li>
                  <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
                    {t("ICP Filing Subject Information")}
                    <a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "12px", color: "#6a6a6a" }}
                    >
                      陕ICP备2022006197号
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
                    {t("ICP Filing Service Information")}
                    <a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "12px", color: "#6a6a6a" }}
                    >
                      陕ICP备2022006197号-1
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
