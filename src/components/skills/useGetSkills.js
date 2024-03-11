import { useState } from "react";

import js from '../../asset/js.png'
import reactimg from '../../asset/React.png'
import graphql from '../../asset/Grahpql.png'
import pgsql from '../../asset/Postgres.png'
import aws from '../../asset/aws.png'

export const useGetSkills = () =>{
    const [project] = useState([
        {
            title: "Javascript",
            image: `${js}`
        },
        {
            title: "React JS",
            image: `${reactimg}`
        },
        {
            title: "GraphQL",
            image: `${graphql}`
        },
        {
            title: "PostgreSQL",
            image: `${pgsql}`
        },
        {
            title: "Amazon Web Services",
            image: `${aws}`
        },
    ])
    return {project}
}