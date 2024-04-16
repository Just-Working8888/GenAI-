import React from 'react';
import classes from './Card.module.scss'
import { Link, useNavigate } from 'react-router-dom';
type Props = {
    image: string
    title: string
    id: string
}
const Card: React.FC<Props> = ({ image, title, id }) => {
    const navigate = useNavigate()
    return (

        <div onClick={() => navigate(`/upload/${id}`)} className={classes.Card}>
            <img src={image} alt="" />
            <h1>{title}</h1>
        </div >


    );
};

export default Card;
