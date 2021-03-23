import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Toolbar, AppBar, InputBase, Container } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import logoLending from './lendingIcon.png';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Load from './Load.js'

const useStyles = makeStyles((theme) => ({
	colorBar: {
		background: "#2E2E2E"
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		marginRight: theme.spacing(4),
	},
	logo: {
		maxWidth: 60,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(60),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));


function App() {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static" className={classes.colorBar}>
				<Toolbar>
					<img src={logoLending} alt="logo" className={classes.logo} />
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					</IconButton>
					<Typography className={classes.title} variant="body2" noWrap>
						APPLICATION
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="SEARCH…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<Typography className={classes.title} variant="body2" noWrap>
						DASHBOARD
					</Typography>
					<AccountBoxIcon />
					<Typography className={classes.title} variant="body2" noWrap>
						USER ADMIN
					</Typography>
				</Toolbar>
			</AppBar>
			<Load></Load>
		</div>
	);
}

export default App;
