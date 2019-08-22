import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ListItemText, ListItemIcon, ListItem, IconButton, Drawer as DrawerUI, List, Typography } from '@material-ui/core'
import { Mail, MoveToInbox, ChevronRight, ChevronLeft } from '@material-ui/icons'
import { DRAWER_WIDTH } from '../utils/general'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0
    },
    drawerPaper: {
        width: DRAWER_WIDTH
    },
    drawerTitle: {
        width: '100%',
        padding: theme.spacing(2)
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}))

const DrawerComponent = props => {
    const classes = useStyles()
    const theme = useTheme()

    const [sections, setSections] = useState([])

    useEffect(() => {
        const getSections = async () => {
            const sections = await props.actions.getAllSections()
            setSections(sections)
        }
        if (!sections.length) {
            getSections()
        }
    })

    return (
        <DrawerUI
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={props.open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <Typography
                    align='left'
                    color='inherit'
                    variant='subtitle1'
                    className={classes.drawerTitle}
                >
                    Secciones
                </Typography>
                <IconButton onClick={props.showDrawerHandler}>
                    {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </div>
            <List>
                {sections.map(({ section_name, section_id }, index) => (
                    <ListItem button key={section_id}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox/> : <Mail/>}</ListItemIcon>
                        <ListItemText primary={section_name} />
                    </ListItem>
                ))}
            </List>
        </DrawerUI>
    )
}

const mapStateToProps = state => {
    return {
        ...state.general
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const Drawer = connect(mapStateToProps, mapDispatchToProps)(DrawerComponent)
