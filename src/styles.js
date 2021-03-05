import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#60d4ea',
                main: '#17a2b8',
                dark: '#007388',
                contrastText: '#fff',
              },
              secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
              },
              success:{
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText:'#000',
              }
        },
})