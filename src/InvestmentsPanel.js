import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		borderRadius: 5,
		marginLeft: '20px',
		marginRight: '20px'
	},
	colorPrimary: {
		backgroundColor: '#80D1D6',
	},
	bar: {
		textAlign: 'left',
		paddingTop: '10px',

		backgroundColor: '#FFFFFF',
		borderRadius: 5,
	},
}))(LinearProgress);


/**
 * the circular progress bar with defined text is parameterized
 * @param {*} props 
 * @returns 
 */
function CircularProgressWithLabel(props) {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="determinate" background="#00CFC9" {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
					props.value,
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

/**
 * Table
 */
const StyledTableCell = withStyles((theme) => ({
	head: {
		background: '#00CFC9',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.white,
		},
	},
}))(TableRow);


const useStyles = makeStyles((theme) => ({
	grid: {
		textAlign: 'center',
		background: '#00CFC9',
	},
	text: {
		paddingTop: '10px',
		color: '#FFFFFF',
	},
	text2: {
		paddingLeft: '40px',
		textAlign: 'left',
		paddingTop: '10px',
		color: '#FFFFFF',
	},
	divider: {
		background: '#FFFFFF',
	},
	table: {
		minHeight: 400,
		maxHeight: 400
	},
	footer: {
		background: '#00A3AD',
		paddingBottom: '10px'
	},
	buttonEdit: {
		background: '#00A3AD',
		color: '#FFFFFF',
		padding: '3px',
		borderRadius: '15px',
		fontSize: '20px',
	},
	buttonEdit2: {
		background: '#00A3AD',
		color: '#FFFFFF',
		padding: '3px',
		marginTop: '5px',
		marginRight: '10px',
		borderRadius: '15px',
		fontSize: '20px',
		float: 'right'
	},
	buttonDelete: {
		color: '#00A3AD',
		fontSize: '30px',
		marginLeft: '-65px'
	},
	buttonDelete2: {
		color: '#00A3AD',
		fontSize: '30px',
		marginTop: '2px',
		float: 'right'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		background: '#FAFAFA',
		minWidth: 500
	},
	paperBack: {
		background: '#FAFAFA',
		minHeight: 350,
		maxHeight: 400
	},
	subText: {
		paddingTop: '10px',
		paddingBottom: '10px',
		color: '#FFFFFF',
	},
	titleEdit: {
		color: '#00A3AD'
	},
	form: {
		'& > *': {
			marginRight: '5px',
			width: '25ch',
		},
	},

}));


const InvestmentsPanel = (props) => {
	//defined mode to the panel 
	const [editionMode, setEditionMode] = useState(true);
	const [listInvest, setListInvest] = useState([]);
	const [open, setOpen] = useState(false);
	const [inputs, setInputs] = useState({
		id: "",
		investor: "Y Combinator",
		amountToSell: 0,
		leftAmount: 0,
	  });
	
	const classes = useStyles();
	const {investor} = props;

	useEffect(() => {
		if(investor.length > 0){
			setListInvest(investor)
		}
	}, [investor])

	//change to mode edition
	const editInvestment = () => {
		setEditionMode(false);
	};

	//change to mode edition
	const cancelInvestment = () => {
		setEditionMode(true);
	};

	const saveInvestment = () => {
		debugger;
		axios.post('http://demo4368463.mockable.io/investment', inputs)
        .then( result =>{
            var exitoso = result.data.msg;
			if(exitoso == 'OK'){
				setOpen(true);
			}
        })
	};

	const handleClose = () => {
		setOpen(false);
	  };

	//condition for icon edit in table
	function ActionEditRow(props) {
		debugger;
		const index = listInvest.findIndex(row => row == props.row);
		if (index != -1 && index == 0) {
			return (
				<div>
					<EditIcon className={classes.buttonEdit} onClick={editInvestment}></EditIcon>
				</div>
			);
		} else {
			return null;
		}
	}

	//condition for icon delete in table
	function ActionDeleteRow(props) {
		const index = listInvest.findIndex(row => row == props.row);
		if (index != -1 && index == 0) {
			return (
				<div>
					<HighlightOffIcon className={classes.buttonDelete} ></HighlightOffIcon>
				</div>
			);
		} else {
			return null;
		}
	}


	return (
		<div>
			<Grid item xs={12} className={classes.grid} elevation={3}>
				<Grid item xs={3} className={classes.grid} elevation={0}>
					<Typography className={classes.text} variant="subtitle2">
						Product ID 295034231455
                    </Typography>
					<Divider classes={{ root: classes.divider }} variant="fullWidth" />
				</Grid>
				{editionMode ?
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>Investor name</StyledTableCell>
									<StyledTableCell align="left">Sold</StyledTableCell>
									<StyledTableCell align="left">% Purchased</StyledTableCell>
									<StyledTableCell align="left"></StyledTableCell>
									<StyledTableCell align="left"></StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{listInvest.map((row) => (
									<StyledTableRow key={row.name}>
										<StyledTableCell component="th" scope="row">
											{row.investor}
										</StyledTableCell>
										<StyledTableCell align="left">{row.sold}</StyledTableCell>
										<StyledTableCell align="left">
											<CircularProgressWithLabel variant="determinate" value={row.purchased} />
										</StyledTableCell>
										<StyledTableCell align="left">
											<ActionEditRow row={row}></ActionEditRow>
										</StyledTableCell>
										<StyledTableCell align="left">
											<ActionDeleteRow row={row}></ActionDeleteRow>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer> :
					
					<Grid item xs={12} >
						<Grid item xs={3} className={classes.grid} elevation={0}>
							<Typography className={classes.subText} variant="subtitle1">
								Add new purchase
                      		</Typography>
						</Grid>
						<Paper className={classes.paperBack}>
							<Paper className={classes.paper}>
								<Grid item xs={12} >
									<HighlightOffIcon className={classes.buttonDelete2} onClick={cancelInvestment} ></HighlightOffIcon>
									<SaveIcon className={classes.buttonEdit2} onClick={saveInvestment}></SaveIcon>
									<form className={classes.form} noValidate autoComplete="off">
										<TextField
											id="investor"
											label="Investor"
											InputProps={{
												className: classes.titleEdit,
												shrink: true,
												startAdornment: <InputAdornment position="start"></InputAdornment>,
											}}
										/>
										<TextField
											label="Amount to sell"
											id="amountToSell"
											InputProps={{
												className: classes.titleEdit,
												shrink: true,
												startAdornment: <InputAdornment position="start">$</InputAdornment>,
											}}
										/>
										<TextField
											id="leftAmount"
											label="Left amounts"
											InputProps={{
												className: classes.titleEdit,
												shrink: true,
												startAdornment: <InputAdornment position="start">$</InputAdornment>,
											}}
										/>
									</form>
								</Grid>
							</Paper>
						</Paper>
					</Grid>
				}
				<Snackbar
					open={open}
					onClose={handleClose}
					message="test Ok!"
				/>
				<div className={classes.footer} >
					<Typography className={classes.text2} variant="caption">
						Remaining amount $850.000 of $8.300.800
                    </Typography>
					<BorderLinearProgress variant="determinate" value={30} />
				</div>
			</Grid>
		</div>
	);
}

export default InvestmentsPanel;
