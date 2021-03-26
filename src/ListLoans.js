import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';

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


const ListLoan = (props) => {
    const classes = useStyles();
    const [listado, setListado] = useState([]);
    const {setInvestor} = props;
    
    useEffect(() => {
        axios.get('http://demo4368463.mockable.io/loads')
        .then( result =>{
            setListado(result.data.loads);
            cardSelect();
        })
    }, []);


    const cardSelect = (info) =>{
        axios.get('http://demo4368463.mockable.io/investor?id=295034231455')
        .then( result =>{
            setInvestor(result.data);

        })
    }

    return (
        <div>
            {listado.map((item) => ( 
                <Card className={classes.root} elevation={0}>
                     <CardActionArea onClick={() => cardSelect(item)}>
                        <CardContent>
                            <Typography className={classes.pos} color="textPrimary">
                                Advance
                            </Typography>
                            <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
                                Producto ID
                            </Typography>
                            <Typography className={classes.pos1} color="subtitle2">
                                {item.Date}
                            </Typography>
                            <Typography variant="subtitle1" >
                                {item.IdProduct}
                            </Typography>
                            <Typography className={classes.pos2} variant="subtitle2" >
                                {item.Amount}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default ListLoan;
