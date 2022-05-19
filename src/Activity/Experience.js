import React from "react";
import ActivityItem from "./ActivityItem";
import ExpItem from "./ExpItem";

export default function Experience(btnName) {
  const elemName = "exp";
  console.log(elemName, document.documentElement.clientHeight)
  const exp = [
    {
      startDate: "Июнь 2021",
      endDate: "настоящее время",
      duration: "10 месяцев",
      name: "Company 1",
      city: "Moscow",
      link: "companyOne/",
      position: "Backend Developer",
      stack: [
        "Typescript, NestJS (90% time) (express), TypeORM (postgres), Plain Sql (Clickhouse, MySQL)",
        "Clickhouse: a lot of work with table engines *MergeTree, MaterializedViews, chains of joins, queryoptimizations, work with BIG DATA (Terabytes tables and tens of billions of lines)",
        "React (10% time), Redux, ChartJS, styled components",
        " Python (numpy, matplotlib, jupyter)",
        "RabbitMQ, Redis, ELK",
        "Docker (compose, swarm), Kubernetes, minikube, werf, helm charts, Gitlab CI, Zabbix",
        "Strict Git-Flow",
      ],
    },
    {
      startDate: "Июнь 2021",
      endDate: "настоящее время",
      duration: "10 месяцев",
      name: "Company 2",
      city: "Moscow",
      link: "companyTwo/",
      position: "Backend Developer",
      stack: [
        "Typescript, NestJS (90% time) (express), TypeORM (postgres), Plain Sql (Clickhouse, MySQL)",
        "Clickhouse: a lot of work with table engines *MergeTree, MaterializedViews, chains of joins, queryoptimizations, work with BIG DATA (Terabytes tables and tens of billions of lines)",
        "React (10% time), Redux, ChartJS, styled components",
        " Python (numpy, matplotlib, jupyter)",
        "RabbitMQ, Redis, ELK",
        "Docker (compose, swarm), Kubernetes, minikube, werf, helm charts, Gitlab CI, Zabbix",
        "Strict Git-Flow",
      ],
    },
    {
      startDate: "Июнь 2021",
      endDate: "настоящее время",
      duration: "10 месяцев",
      name: "Company 3",
      city: "Moscow",
      link: "companyThree/",
      position: "Backend Developer",
      stack: [
        "Typescript, NestJS (90% time) (express), TypeORM (postgres), Plain Sql (Clickhouse, MySQL)",
        "Clickhouse: a lot of work with table engines *MergeTree, MaterializedViews, chains of joins, queryoptimizations, work with BIG DATA (Terabytes tables and tens of billions of lines)",
        "React (10% time), Redux, ChartJS, styled components",
        " Python (numpy, matplotlib, jupyter)",
        "RabbitMQ, Redis, ELK",
        "Docker (compose, swarm), Kubernetes, minikube, werf, helm charts, Gitlab CI, Zabbix",
        "Strict Git-Flow",
      ],
    },
  ];

  return (
    <ActivityItem id="exp" elemName={elemName} btnName={btnName}>
      {exp.map((item, index) => {
        return <ExpItem key={index} item={item} />;
      })}
    </ActivityItem>
    // <div  className="exp-list">

    // </div>
  );
}
