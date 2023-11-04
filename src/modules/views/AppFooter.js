import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
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
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={8} sm={8} md={8}>
            <Typography variant="h6" marked="left" gutterBottom>
              备案号
            </Typography>
            <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
              <ul>
                <li>
                  <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
                    ICP备案主体信息:
                    <a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      style={{ fontSize: "12px", color: "#6a6a6a" }}
                    >
                      陕ICP备2022006197号
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ fontSize: "12px", color: "#6a6a6a" }}>
                    ICP备案服务信息:
                    <a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      style={{ fontSize: "12px", color: "#6a6a6a" }}
                    >
                      陕ICP备2022006197号-1
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
