import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    box: {
        position: "absolute",
        top: "30px",
        left: "30px",
        padding: "20px",
        maxWidth: "400px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
        borderRadius: "5px",
        fontSize: '18px',
        color: "#fff",
    }
});

function LocationInfoBox({ issPosition }) {
    const classes = useStyles();
    const [currentIssSpeed, setCurrentIssSpeed] = useState('Calculating...');
    const [prevIssPosition, setPrevIssPosition] = useState({});

    useEffect(() => {
        calculateIssSpeed(issPosition.latitude, issPosition.longitude);
    }, [issPosition.latitude, issPosition.longitude])

    // Using the Haversine formula, we are able to calculate the distance between two points and thus determine the speed
    // https://en.wikipedia.org/wiki/Haversine_formula
    function calculateIssSpeed(latitude, longitude) {
        if (!Object.keys(prevIssPosition).length) return setPrevIssPosition({ latitude, longitude });
        const earthRadius = 6371e3;
        const phi1 = prevIssPosition.latitude * Math.PI / 180;
        const phi2 = latitude * Math.PI / 180;
        const dPhi = (latitude - prevIssPosition.latitude) * Math.PI / 180;
        const dLambda = (longitude - prevIssPosition.longitude) * Math.PI / 180;
        const a = Math.sin(dPhi / 2) * Math.sin(dPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(dLambda / 2) * Math.sin(dLambda / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distanceTravelled = earthRadius * c;
        setCurrentIssSpeed(`${(distanceTravelled / 5).toFixed(4)} m/s`)
        setPrevIssPosition({ latitude, longitude });
    }

    return (
        <div className={classes.box}>
            <Typography variant="h6" className={classes.title}>
                International Space Station Tracker
            </Typography>
            <Typography variant="subtitle1">
                Current Latitude: {issPosition.latitude.toFixed(4)}
            </Typography>
            <Typography variant="subtitle1">
                Current Longitude: {issPosition.longitude.toFixed(4)}
            </Typography>
            <Typography variant="subtitle1">
                Current Speed: {currentIssSpeed}
            </Typography>
            <Typography variant="subtitle2">
                This information is updated every five seconds
            </Typography>
        </div >
    )
}

export default LocationInfoBox