import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Panel from './panel.js'

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'left',
        textJustify: 'auto',
        color: 'white'
    },
    grid: {
        padding: theme.spacing(8),
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #00A3AD 40%, white 40%, white 100%)'
    }
}));
function Load() {
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            <Grid item xs={12} >
                <Typography className={classes.title} variant="h4" noWrap>
                    Advances for syndication
                </Typography>
                <Panel></Panel>
            </Grid>
        </div>
    );
}

export default Load;
