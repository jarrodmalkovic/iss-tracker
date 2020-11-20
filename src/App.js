import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState, Fragment } from 'react';
import Loader from 'react-loader-spinner'
import InformationBox from './components/InformationBox'
import Map from './components/Map';
const axios = require('axios');

const useStyles = makeStyles({
  loader: {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
  }, app:
    { margin: 0 }
});

function App() {
  const classes = useStyles();
  const [issPosition, setIssPosition] = useState({});

  useEffect(() => {
    async function pollApi() {
      await callApi();
      setInterval(async () => {
        callApi();
      }, 3000);
    }

    pollApi();
  }, []);

  async function callApi() {
    try {
      const res = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
      const data = res.data;
      await setIssPosition({ latitude: data.latitude * 1, longitude: data.longitude * 1, velocity: data.velocity * 1, altitude: data.altitude * 1, visibility: data.visibility, units: data.units });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes.app}>
      {Object.keys(issPosition).length ?
        <Fragment>
          <InformationBox issPosition={issPosition} />
          <Map issPosition={issPosition} />
        </Fragment>
        : <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          className={classes.loader}

        />}
    </div>
  );
}

export default App;
