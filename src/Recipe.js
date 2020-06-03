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
            <a className={style.link} href={url} target="_blank">{url}</a>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}
export default Recipe;