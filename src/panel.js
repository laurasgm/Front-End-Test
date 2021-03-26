import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListLoan from './ListLoans.js';
import InvestmentsPanel from './InvestmentsPanel.js';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        background: '#FAFAFA'
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        background: '#00CFC9',
        width: '100%'
    },
    grid: {
        textAlign: 'center',
        background: '#FAFAFA'
    },
    bottom:{
        marginTop: '-30px',
        float: 'right',
        background:'#FFAD00'
    }

}));
function Panel() {
    const classes = useStyles();
     /**
      * The idea is according to the loan that is chosen in the list of loans, 
      * obtain the list of investments and set them in the list to later pass 
      * them to the visualization component
      */
    const [investor, setInvestor] = useState([]);

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <Typography color="textSecondary" gutterBottom>
                            Select a product to syndicate
                        </Typography>
                        <ListLoan setInvestor={setInvestor}></ListLoan>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                            <Fab color="primary" className={classes.bottom} aria-label="add">
                                <AddIcon />
                        </Fab>  
                        <InvestmentsPanel investor={investor} className={classes.paper2}></InvestmentsPanel>
                </Grid>
            </Grid>
        </div>
    );
}

export default Panel;
