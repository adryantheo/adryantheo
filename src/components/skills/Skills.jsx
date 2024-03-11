import React from "react"
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGetSkills } from "./useGetSkills";

import './Skills.css'


const useStyles = makeStyles((theme) => ({
    main: {
      maxWidth: '100vw',
      marginTop: '6em',
      marginBottom: "auto",
    },
  }));

const Skills = () => {
    const classes = useStyles()
    const {project} = useGetSkills()

    return(
        <section id="skill">
            <Container component="main" className={classes.main} maxWidth="md">
                <div className="project">
                    {
                        project.map((item, idx)=>(
                            <div key={idx} className="__content_wrapper">
                                <div className="__img_wrapper"> 
                                    <img src={item.image} alt={`${item.title}_img`} />
                                </div>
                                <h3 className="title">
                                    <p>{item.title}</p>
                                </h3>
                            </div>
                        ))
                    }

                </div>
            </Container>
        </section>
    )
}

export default Skills;