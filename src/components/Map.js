import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react'
import IssMarker from './IssMarker'

const useStyles = makeStyles({
    map: {
        width: "100%",
        height: "100vh",
    }
});

function Map({ issPosition }) {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.map} >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
                    center={[issPosition.latitude, issPosition.longitude]}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={3}
                >
                    <IssMarker lat={issPosition.latitude} lng={issPosition.longitude} />
                </GoogleMapReact>
            </div>
        </Fragment >
    );
}

export default Map;
