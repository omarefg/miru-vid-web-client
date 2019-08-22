import { createMuiTheme } from '@material-ui/core/styles'

// palete in https://pm1.narvii.com/6980/5a8561d8202f690eab77fd4b88debae86a0b877cr1-780-520v2_hq.jpg

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fecc5a',
            contrastText: '#505050'
        },
        secondary: {
            main: '#96ceb3',
            contrastText: '#fdeeab'
        },
        error: {
            main: '#f46d66'
        }
    },
    background: '#fffcec'
})
