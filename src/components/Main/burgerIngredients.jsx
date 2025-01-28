
import React, { useState, useEffect } from 'react';
import styles from "./style.module.scss";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import CraftItem from "../CraftItem";

import ingredientsData from '../../data/ingredients.json';

const BurgerIngredients = () => {
    const [current, setCurrent] = useState("one");
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        setIngredients(ingredientsData.data);
    }, []);

    return (
        <div className={`${styles.craftLeft} main__block__container__column`}>
            <h1 className={`${styles.craftTitle} mt-10`}>Соберите бургер</h1>
            <div style={{ display: "flex" }} className="mt-5">
                <Tab
                    value="one"
                    active={current === "one"}
                    onClick={() => setCurrent("one")}
                >
                    Булки
                </Tab>
                <Tab
                    value="two"
                    active={current === "two"}
                    onClick={() => setCurrent("two")}
                >
                    Соусы
                </Tab>
                <Tab
                    value="three"
                    active={current === "three"}
                    onClick={() => setCurrent("three")}
                >
                    Начинка
                </Tab>
            </div>

            <div className={`${styles.craftWrapper} ${styles.craftOverflow}`}>
                {current === "one" && (
                    <>
                        <h2 className={`${styles.craftSubtitle} mt-10`}>Булки</h2>
                        <ul className={`${styles.craftList} mt-6`}>
                            {
                                ingredients.filter((item) => item.type === "bun").map((item) => (
                                    <CraftItem
                                        key={item._id}
                                        price={item.price}
                                        src={item.image}
                                        name={item.name}
                                    />
                                ))
                            }
                        </ul>
                    </>
                )}

                {current === "two" && (
                    <>
                        <h2 className={`${styles.craftSubtitle} mt-10`}>Соусы</h2>
                        <ul className={`${styles.craftList} mt-6`}>
                            {
                                ingredients.filter((item) => item.type === "sauce").map((item) => (
                                    <CraftItem
                                        key={item._id}
                                        price={item.price}
                                        src={item.image}
                                        name={item.name}
                                    />
                                ))
                            }
                        </ul>
                    </>
                )}

                {current === "three" && (
                    <>
                        <h2 className={`${styles.craftSubtitle} mt-10`}>Основные ингредиенты</h2>
                        <ul className={`${styles.craftList} mt-6`}>
                            {
                                ingredients.filter((item) => item.type === "main").map((item) => (
                                    <CraftItem
                                        key={item._id}
                                        price={item.price}
                                        src={item.image}
                                        name={item.name}
                                    />
                                ))
                            }
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default BurgerIngredients;
