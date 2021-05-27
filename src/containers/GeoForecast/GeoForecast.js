import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  grid: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
});

export default function GeoForecast(props) {
  const classes = useStyles();
  const displayGeoWeatherData = props => {
    const {data} = props;
    
    function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let month = months[a.getMonth()];
      let date = a.getDate();
      let time = month + ' ' + date;
      return time;
    }
    
    // render if data is a available, else, render 'loading'
    if(data) {
      return (
        // work through array of objects containing forecast data
        data.map((item, index) => {
          return (
            <Card key={index} className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2">
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='forecast icon for the day'></img>
                </Typography>
                {/* <Typography variant="h5" component="h2">
                  {Math.floor(item.temp.day)}°F
                </Typography> */}
                <Typography variant="h6" component="h6">
                  High:{Math.floor(item.temp.max)}°F
                </Typography>
                <Typography variant="h6" component="h6">
                  Low: {Math.floor(item.temp.min)}°F
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.weather[0].description}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Humidity: {item.humidity}%
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {timeConverter(item.dt)}
                </Typography>
              </CardContent>
            </Card>
          )
        })
      )
    }
  }
  
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {displayGeoWeatherData(props)}
        </Grid>
      </Grid>
    </Grid>
  )
}
