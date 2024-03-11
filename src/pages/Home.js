import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import { ThemeToggle } from '../components/theme/ThemeToggle'


import { SideNavbar } from '../components/nav/SideNavbar'
import { SocialIcons } from '../components/content/SocialIcons'
import { SpeedDials } from '../components/content/SpeedDial'
const Content = React.lazy(() => import ('../components/content/Content'))
const About = React.lazy(() => import ('../components/biodata/About'))
const Skills = React.lazy(()=>import('../components/skills/Skills'))
const Contact = React.lazy(()=>import('../components/contact/Contact'))
const Experience = React.lazy(()=>import('../components/experiences/Experiences'))


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}))

const Loading = () => {
    return(
        <h1>Loading ...</h1>
    )
}

export const Home = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.root} id='home'>
                <React.Suspense fallback={<Loading />}>
                    <Content />
                </React.Suspense>
                <ThemeToggle />
                <Hidden smDown>
                    <SocialIcons />
                </Hidden>
                <Hidden mdUp>
                    <SpeedDials />
                </Hidden>
            </div>
            <SideNavbar />

            <React.Suspense fallback={<Loading />}>
                <Experience />
            </React.Suspense>

            <React.Suspense fallback={<Loading />}>
                <Skills />
            </React.Suspense>


            <React.Suspense fallback={<Loading />}>
                <About />
            </React.Suspense>
            
            <React.Suspense fallback={<Loading />}>
                <Contact />
            </React.Suspense>
        </>
    )
}