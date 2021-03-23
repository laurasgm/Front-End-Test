import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
        textAlign: 'justify',
        background: '#FAFAFA'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        color: '#00A3AD',
        float: 'right'
    },
    pos1: {
        fontSize: 12,
        float: 'right',
        position: 'sticky',
        color: '#757575'
    },
    pos2: {
        fontSize: 20,
        float: 'right',
        position: 'sticky'
    },
}));
function ListLoan() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} elevation={0}>
            <CardContent>
                <Typography className={classes.pos} color="textPrimary">
                    Advance
          </Typography>
                <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                    Producto ID
          </Typography>
                <Typography className={classes.pos1} color="subtitle2">
                    03/23/2021
            </Typography>
                <Typography variant="subtitle1" >
                    295034231455
          </Typography>
                <Typography className={classes.pos2} variant="subtitle2" >
                    $27.000.000
            </Typography>
            </CardContent>
        </Card>
    );
}

export default ListLoan;
