import IssIcon from '../static/icon.webp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        width: "80px",
        height: "40px",
    }
});

const LocationMarker = () => {
    const classes = useStyles();

    return (
        <img className={classes.icon} src={IssIcon} alt="Iss icon" />
    )
}

export default LocationMarker