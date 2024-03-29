import React from "react";
import CardSmall from "./card-small";
import "./overview.css";

const cardSmallList = [
  {
    icon: "images/icon-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 2257,
  },
  {
    icon: "images/icon-instagram.svg",
    pageViews: "52",
    growth: 1375,
    key: 3,
  },
  {
    icon: "images/icon-twitter.svg",
    pageViews: "5642",
    growth: 9,
    key: 4,
  },
  {
    icon: "images/icon-youtube.svg",
    pageViews: "117",
    growth: 303,
    key: 5,
  },
];
function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(({ icon, pageViews, growth, key }) => (
            <CardSmall
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
