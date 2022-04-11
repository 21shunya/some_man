import React from "react";
import ExpItem from "./ExpItem";

export default function Experience() {
    const exp = [{
        startDate: "Июнь 2021",
        endDate: "настоящее время",
        duration: "10 месяцев",
        name: "Company 1",
        city: "Moscow",
        link: "companyone/",
        position: "Backend Developer",
        stack: [
            "Typescript, NestJS (90% time) (express), TypeORM (postgres), Plain Sql (Clickhouse, MySQL)",
            "Clickhouse: a lot of work with table engines *MergeTree, MaterializedViews, chains of joins, queryoptimizations, work with BIG DATA (Terabytes tables and tens of billions of lines)",
            "React (10% time), Redux, ChartJS, styled components",
            " Python (numpy, matplotlib, jupyter)",
            "RabbitMQ, Redis, ELK",
            "Docker (compose, swarm), Kubernetes, minikube, werf, helm charts, Gitlab CI, Zabbix",
            "Strict Git-Flow"
        ]
    },
    {
        startDate: "Июнь 2021",
        endDate: "настоящее время",
        duration: "10 месяцев",
        name: "Company 2",
        city: "Moscow",
        link: "companyone/",
        position: "Backend Developer",
        stack: [
            "Typescript, NestJS (90% time) (express), TypeORM (postgres), Plain Sql (Clickhouse, MySQL)",
            "Clickhouse: a lot of work with table engines *MergeTree, MaterializedViews, chains of joins, queryoptimizations, work with BIG DATA (Terabytes tables and tens of billions of lines)",
            "React (10% time), Redux, ChartJS, styled components",
            " Python (numpy, matplotlib, jupyter)",
            "RabbitMQ, Redis, ELK",
            "Docker (compose, swarm), Kubernetes, minikube, werf, helm charts, Gitlab CI, Zabbix",
            "Strict Git-Flow"
        ]
    }]

    return(
        <ul className="exp-list">
            {exp.map((item, index) => {
                return (
                    <ExpItem key={index} item={item} />
                )
            })}
        </ul>
    )
}