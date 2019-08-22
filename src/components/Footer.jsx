import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100px',
        background: theme.palette.primary.main,
        padding: '0 24px'
    }
}))

export const Footer = props => {
    const classes = useStyles()
    return (
        <Container
            className={classes.root}
            maxWidth='xl'
        >
            <Box>
                Centro de ayuda
            </Box>
        </Container>
    )
}
