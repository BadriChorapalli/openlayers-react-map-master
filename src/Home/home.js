import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import App from '../App';
import MailBox from '../MailBox/mailbox.js';
import MapFilter from '../MapFilter/mapfilter.js';
import Accordion from '../Accordion/accordion.js';
import TopMenu from '../TopMenu/topmenu.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
         
              <TopMenu/>
             
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MapFilter></MapFilter></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper><App/></Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}><Accordion/></Paper>
        </Grid>
        <Grid item xs={12}>
        <AppBar position="static">
        <Tabs color="red" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab color="red" label="MAILBOX" {...a11yProps(0)} />
          <Tab label="SUMMARY" {...a11yProps(1)} />
          <Tab label="DETAILS" {...a11yProps(2)} />
          <Tab label="REPORT" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MailBox/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
