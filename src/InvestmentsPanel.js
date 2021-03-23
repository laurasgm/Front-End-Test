import { Typography } from "@material-ui/core";
import { makeStyles, withStyles} from '@material-ui/core/styles';
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

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginLeft:'20px',
    marginRight:'20px'
  },
  colorPrimary: {
    backgroundColor: '#80D1D6',
  },
  bar: {
    textAlign:'left',
    paddingTop:'10px',
  
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
        <CircularProgress variant="determinate" color="#00CFC9" {...props} />
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
  
  function createData(investor, sold, purchased) {
    return { investor, sold, purchased };
  }
  
  const rows = [
    createData('Y Combinator', 830.800, 6.0),
    createData('SaaStr', 830.800, 9.0),
    createData('IndieGo', 830.800, 16.0),
  ];
  
const useStyles = makeStyles((theme) => ({
    grid: {
        textAlign: 'center',
        background: '#00CFC9',
    },
    text:{
        paddingTop:'10px',
        color: '#FFFFFF',
    },
    text2:{
        paddingLeft:'40px',
        textAlign:'left',
        paddingTop:'10px',
        color: '#FFFFFF',
    },
    divider:{
        background: '#FFFFFF',
    },
    table: {
        Width: '100%'
    },
    footer:{
        background: '#00A3AD',
        paddingBottom:'10px'
    }
}));
function InvestmentsPanel() {
    const classes = useStyles();

    return (
        <div>   
              
            <Grid item xs={12} className={classes.grid} elevation={3}>
                <Grid item xs={3} className={classes.grid} elevation={0}>
                    <Typography className={classes.text} variant="subtitle2">
                        Product ID 295034231455
                    </Typography>
                    <Divider classes={{root: classes.divider}} variant="fullWidth" />
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Investor name</StyledTableCell>
                                <StyledTableCell align="left">Sold</StyledTableCell>
                                <StyledTableCell align="left">% Purchased</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.investor}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.sold}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <CircularProgressWithLabel variant="determinate" value={row.purchased} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={classes.footer} >
                    <Typography className={classes.text2} variant="subtitle2">
                    Remaining amount $850.000 of $8.300.800
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={30} />
                </div>
            </Grid>
        </div>
    );
}

export default InvestmentsPanel;
