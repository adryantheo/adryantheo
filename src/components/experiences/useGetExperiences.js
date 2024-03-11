import { useState } from "react";

import mostrans from '../../asset/mostrans.png'
import epm from '../../asset/epm.jpg'
import acc from '../../asset/acc.png'

export const useGetExperiences = () =>{
    const [works] = useState([
        {
            title: "PT Mostrans Global Digilog",
            image: `${mostrans}`,
            description: [
                {
                    detail_desc: "Part of PT Enseval Putera Megatrading Tbk, since 2021 until now.",
                },
                {
                    detail_desc: `DevOps Engineer (2023), develop pipelines for supporting SDLC, maintain and monitoring Cloud Server.
                    Tech stack as a DevOps Enginner : Jenkins, AWS, Docker, Linux`
                },
                {
                    detail_desc: `PIC Integration System and Internals (2023), manage several projects integrations for supply payment method,
                    Order integrations, and tracking systems via API.`
                },
                {
                    detail_desc: `PIC Marketplace and Saas Projects (2022), manage several projects and teams for development 
                    Marketplace business requirements, and second customer SaaS.`
                },
                {
                    detail_desc: `Key Player at first Project SaaS (2021), manage team to develop SaaS for spesifict customer needs
                    I learned team management, teamwork, be a scrum master and, problem solving
                    Tech stack I used : ASP Net, Git, Node JS, React JS, Postgresql, AWS `
                }
            ] 
        },
        {
            title: "PT Enseval Putera Megatrading Tbk",
            image: `${epm}`,
            description: [
                {
                    detail_desc: `Ecommerce Developer Office as full stack engineer since 2020 until January 2021.
                    Develop web and mobile apps for logistic marketplace with several stacks.`,
                },
                {
                    detail_desc: `Website: ASP Net, React JS, Javascript
                    Backend system: Node JS, GraphQL, AWS, Lambda, PostgreSQL, Git
                    Mobile (Hybrid): React Native`
                },
            ] 
        },
        {
            title: "PT Astra Sedaya Finance (Astra Credit Companies) ",
            image: `${acc}`,
            description: [
                {
                    detail_desc: `RPA Developer (Intern) and Backend Developer since 2020 until August 2020.
                    Develop RPA for Generating employee evaluation report and automatic send email
                    using UI Path.`,
                },
                {
                    detail_desc: `Develop Career Page Systems for recruitment new employee using 
                    - Laravel, MySQL,  Node JS`
                },
                {
                    detail_desc: `Develop Backend Systems for data supply for mobile using
                    Software AG, PLSQL, Outsystems`
                },
            ] 
        },
    ])
    return {works}
}