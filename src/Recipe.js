import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,url}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a className={style.move} href={url} target="_blank">How to Cook?? Click here! </a>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}
export default Recipe;