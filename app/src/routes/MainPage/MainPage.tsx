import classes from "./MainPage.module.scss";
import { FC, useEffect, useState } from "react";
import data from '../../data/data.json'
import { Card } from "Components";
import Survey from "Components/Test/Test";
import { api } from "api";
const MainPage: FC = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    // Добавьте другие вопросы здесь
  ];

  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.getQuetions()
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (

    <>
      <div className={classes.main}>
        {categories.map((item: any) => <Card image={item.image} title={item.title} id={item.id} />)}
      </div >

    </>

  );
};

export default MainPage;
