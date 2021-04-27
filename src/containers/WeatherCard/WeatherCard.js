import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
});

export default function WeatherCard(props) {
  const classes = useStyles();
  const displayWeatherData = props => {
    const {data} = props;
    
    if(data.length > 0) {
      return (
        data.map((item, index) => {
          console.log(item);
          return (
            <Card key={index} className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {Math.floor(item.main.temp)}°F
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.weather[0].description}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Humidity: {item.main.humidity}%
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {item.dt_txt}
                </Typography>
              </CardContent>
            </Card>
          )
        })
      )
    } else {
      return (<h3>Loading...</h3>)
    }
  }
  
  return (
    <>
      {displayWeatherData(props)}
    </>
  )
}
