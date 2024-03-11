import React from "react"
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './About.css'

const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '3em',
      marginBottom: "auto",
    },
  }));

const About = () => {
    const classes = useStyles()

    return(
        <section id="about">
            <Container component="main" className={classes.main} maxWidth="md">
                <div className="about">
                    <div className="_img"
                     style={{
                        background: "url(https://avatars2.githubusercontent.com/u/43287907?s=460&v=4)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                     }}
                    >

                    </div>
                    <div className="_content_wrapper">
                        <Typography component='h2' variant="h5">
                            Hello, I'm Adryan Theo
                        </Typography>
                        <p className="aboutme">
                            I'm a Software Engineer, ...
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        // <React.Fragment>
        //     <h1>Hi, I'm Adryan Theo</h1>
        //     <img
        //         src="https://avatars2.githubusercontent.com/u/43287907?s=460&v=4"
        //         alt="profile_picture" 
        //      />
        //     <h2>A Software Engineer</h2>

        // </React.Fragment>
    )
}

export default About;