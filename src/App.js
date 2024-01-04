import {
  AppBar, BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useCallback } from "react";
import { useLocation } from "react-router";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Attest from "./components/Attest";
import Footer from "./components/Footer";
import deltaswap from "./icons/logo-delta.svg";
import ImageIcon from '@material-ui/icons/Image';
import RedeemIcon from '@material-ui/icons/Redeem';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HeaderText from "./components/HeaderText";
import NFT from "./components/NFT";
import NFTOriginVerifier from "./components/NFTOriginVerifier";
import Recovery from "./components/Recovery";
import TokenOriginVerifier from "./components/TokenOriginVerifier";
import Transfer from "./components/Transfer";
import UnwrapNative from "./components/UnwrapNative";
import USDC from "./components/USDC";
import WithdrawTokensTerra from "./components/WithdrawTokensTerra";

const useStyles = makeStyles((theme) => ({
  disclaimerText: {
    display: "flex",
    flexWrap: "wrap"
  },
  donwloadHref: {
    color: "#ffffff"
  },
  appBar: {
    marginTop: theme.spacing(2),
    "& > .MuiToolbar-root": {
      margin: "auto",
      width: "100%",
      maxWidth: 1440,
    },
  },
  spacer: {
    flex: 1,
    display: 'flex',
    justifyContent: "space-between",
    width: "100vw",
  },
  link: {
    ...theme.typography.body2,
    fontWeight: 600,
    marginLeft: theme.spacing(4),
    textUnderlineOffset: "6px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
    "&.active": {
      textDecoration: "underline",
    },
  },
  bg: {
    // background:
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  brandLink: {
    display: "inline-flex",
    padding: "0.5rem",
    alignItems: "start",
    "&:hover": {
      textDecoration: "none",
    },
  },
  logoImg: {
    height: "auto",
    verticalAlign: "middle",
    display: "inline-block",
    maxWidth: "100%"
  },
}));

function App() {
  const classes = useStyles();
  const { push } = useHistory();
  const handleBotNavChange = useCallback(
    (_, value) => {
      push(value);
    },
    [push]
  );
  const { pathname } = useLocation();
  return (
    <div className={classes.bg}>
      {
        <AppBar position="static" elevation={0} style={{ marginTop: 25, marginBottom: 40 }}>
          <Toolbar>
            <Link href={"https://swap.deltaswap.io"} className={classes.brandLink}>
              <img src={deltaswap} alt={"Deltaswap"} className={classes.logoImg} />
            </Link>
            <div className={classes.spacer} />
            <Button href={"/tranfer"} style={{ textTransform: 'capitalize', fontSize: '18px', margin: "0 10px" }}>
              Token
            </Button>
            <Button href={"/nft"} style={{ textTransform: 'capitalize', fontSize: '18px', margin: "0 10px" }}>
              NFT's
            </Button>
            <Button href={"/reedem"} style={{ textTransform: 'capitalize', fontSize: '18px', margin: "0 10px" }}>
              Reedem
            </Button>
            <Button href={"https://vesting.deltaswap.io"} style={{ textTransform: 'capitalize', fontSize: '18px', margin: "0 10px" }}>
              Vesting
            </Button>
          </Toolbar>
        </AppBar>
      }
      {["/transfer", "/nft", "/redeem"].includes(pathname) ? (
        <Container maxWidth="md" style={{ paddingBottom: 24 }}>
          <HeaderText
            white children={'Vesting DELTA Swap Docs'} small
            subtitle={
              <>
                <Typography>
                  This is a bridge for transferring tokens and NFTs across chains wrapped by Deltaswap.
                </Typography>
              </>
            }
          >
          </HeaderText>
          {/* <BottomNavigation
            value={pathname}
            onChange={handleBotNavChange}
            indicatorColor="primary"
            showLabels={true}
          >
            <BottomNavigationAction label="Tokens" icon={<LocalAtmIcon />} component={Link} to="/transfer" />
            <BottomNavigationAction label="NFTs" icon={<ImageIcon />} component={Link} to="/nft" />
            <BottomNavigationAction label="Redeem" icon={<RedeemIcon />} component={Link} to="/redeem" />
          </BottomNavigation> */}
        </Container>
      ) : null}
      <Switch>
        {/* <Route exact path="/usdc">
          <USDC />
        </Route> */}
        <Route exact path="/transfer">
          <Transfer />
        </Route>
        {/* <Route exact path="/nft">
          <NFT />
        </Route>
        <Route exact path="/redeem">
          <Recovery />
        </Route>
        <Route exact path="/nft-origin-verifier">
          <NFTOriginVerifier />
        </Route>
        <Route exact path="/token-origin-verifier">
          <TokenOriginVerifier />
        </Route>
        <Route exact path="/register">
          <Attest />
        </Route>
        <Route exact path="/withdraw-tokens-terra">
          <WithdrawTokensTerra />
        </Route>
        <Route exact path="/unwrap-native">
          <UnwrapNative />
        </Route> */}
        <Route>
          <Redirect to="/transfer" />
        </Route>
      </Switch>
      <div className={classes.spacer} />
      <div className={classes.gradientRight}></div>
      <div className={classes.gradientRight2}></div>
      <div className={classes.gradientLeft}></div>
      <div className={classes.gradientLeft2}></div>
      <Footer />
    </div>
  );
}

export default App;
