import classes from "./MainPage.module.scss";
import { FC } from "react";
import data from '../../data/data.json'
import { Card } from "Components";
const MainPage: FC = () => {


  return (
    <div className={classes.main}>
      {data.map((item) => <Card image={item.image} title={item.title} id={item.id} />)}
    </div >
  );
};

export default MainPage;
