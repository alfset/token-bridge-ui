import {createTheme, responsiveFontSizes} from "@material-ui/core";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "rgba(14,58,107, 0.7)",
      },
      secondary: {
        main: '#00c7f5',
      },
    },

    typography: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      h1: {
        lineHeight: 0.9,
        color: "#fff",
        letterSpacing: -2,
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "bold",
      },
      h4: {
        fontWeight: "600",
        letterSpacing: -1.02,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            overscrollBehaviorY: "none",
            backgroundColor: "#0e3a6b",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(./bg.png), linear-gradient(135deg, rgba(14,58,107,1) 0%, rgba(22,26,35,1) 90%)"
          },
          "*": {
            scrollbarWidth: "thin",
          },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {},
          "*::-webkit-scrollbar-corner": {
            // this hides an annoying white box which appears when both scrollbars are present
            backgroundColor: "transparent",
          },
        },
      },
      MuiInputBase: {
        root: {
          borderColor: "#07aeb4",
        }
      },
      MuiDivider: {
        root: {
          margin: "0px",
          flexShrink: "0",
          borderWidth: "0px 0px thin",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }
      },
      MuiAccordion: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
      MuiAppBar: {
        colorPrimary: {
          background: "transparent",
          backgroundColor: "transparent"
        }
      },
      MuiAlert: {
        root: {
          border: "1px solid",
          background: "unset"
        },
      },
      MuiButton: {
        root: {},
        containedSizeSmall: {
          background: 'linear-gradient(180deg, #48367E 0%, #786CE7 100%)',
          border: 0,
          borderRadius: 10,
          boxShadow: '0 3px 5px 2px rgba(7, 174, 180, .2)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
        outlinedSizeSmall: {
          background: 'linear-gradient(180deg, #48367E 0%, #786CE7 100%)',
          border: 0,
          borderRadius: 10,
          boxShadow: '0 3px 5px 2px rgba(7, 174, 180, .2)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
      MuiLink: {
        root: {},
      },
      MuiList: {
        root: {
          backgroundColor: "rgba(14,58,107, 0.95)"
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: 'rgba(7, 174, 180, .1)',
          borderRadius: "5px",
        }
      },
      MuiDialog: {
        paper: {
          backgroundColor: "rgba(14,58,107, 0.95)"
        }
      },
      MuiBottomNavigation: {
        root: {
          backgroundColor: "rgba(255,255,255,.07)",
          justifyContent: "space-evenly",
          borderRadius: "5px"
        }
      },
      MuiStepper: {
        root: {
          backgroundColor: "transparent",
          padding: 0,
        },
      },
      MuiStep: {
        root: {
          borderRadius: "15px"
        },
        vertical: {
          backgroundColor: "#0D111C",
          backdropFilter: "blur(4px)",
          padding: "32px 32px 16px",
        },
      },
      MuiStepConnector: {
        lineVertical: {
          borderLeftWidth: 0,
        },
      },
      MuiStepContent: {
        root: {
          borderLeftWidth: 0,
          marginLeft: 0,
          paddingLeft: 0,
        },
      },
      MuiStepLabel: {
        label: {
          textTransform: "uppercase",
          "&.MuiStepLabel-alternativeLabel": { textTransform: "none" },
          "&.MuiStepLabel-active": {},
          "&.MuiStepLabel-completed": {},
        },
      },
      MuiTabs: {
        root: {},
        indicator: {
          height: "100%",
          zIndex: -1,
        },
      },
      MuiTab: {
        root: {
          fontWeight: "bold",
          fontSize: 18,
          padding: 12,
          letterSpacing: "-0.69px",
          textTransform: "none",
        },
        textColorInherit: {
          opacity: 1,
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "none",
        },
      },
    },
  })
);
