import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    box: {
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "20px",
        maxWidth: "405px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
        borderRadius: "5px",
        fontSize: '18px',
        color: "#fff",
    }
});

function LocationInfoBox({ issPosition }) {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <Typography variant="h6" className={classes.title}>
                Realtime International Space Station Tracker
            </Typography>
            <Typography variant="subtitle2">
                <a href="https://www.nasa.gov/multimedia/nasatv/iss_ustream.html" target="_blank" rel="noreferrer">Click here to view live video feed from the ISS here</a>
            </Typography>
            <Typography variant="subtitle1">
                Current Latitude: {issPosition.latitude.toFixed(4)}
            </Typography>
            <Typography variant="subtitle1">
                Current Longitude: {issPosition.longitude.toFixed(4)}
            </Typography>
            <Typography variant="subtitle1">
                Current Velocity: {issPosition.velocity.toFixed(4)} {issPosition.units === 'kilometers' ? 'km/h' : 'm/h'}
            </Typography>
            <Typography variant="subtitle1">
                Current Altitude: {issPosition.altitude.toFixed(4)} {issPosition.units === 'kilometers' ? 'km' : 'miles'}
            </Typography>
            <Typography variant="subtitle1">
                Current Visibility: {issPosition.visibility}
            </Typography>
            <Typography variant="subtitle2">
                This information is updated every 3000 milliseconds using data from wheretheiss.at
            </Typography>
        </div >
    )
}

export default LocationInfoBox