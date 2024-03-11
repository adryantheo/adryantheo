import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGetExperiences } from "./useGetExperiences";

import './Experiences.css';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "12rem",
  },
}));

const Experiences = () => {
  const classes = useStyles();
  const {works} = useGetExperiences()

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {works.map((item, idx) => (
          <div className="project" key={ idx }>
            <div className="_image_container">
                <div className="__img_wrapper_work">
                <img src={ item.image } alt={ item.title }/>
                </div>
            </div>
            <div className="__content_wrapper_exp">
              <h3 className="title">
                <p>{item.title}</p>
              </h3>
              {item?.description?.map((desc, index)=>(
                <p className="description" key={index}>{desc.detail_desc}</p>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experiences;