import { createMuiTheme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: pink[900],
        }
    },
});

export default darkTheme;