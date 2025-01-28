import React from "react";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./style.module.scss";

const BurgerConstructor = () => {
    return (

        <div className={`${styles.craftRight} main__block__container__column`}>


            <div className={`${styles.craftBasket} mt-25  ${styles.craftBasket} ${styles.craftOverflow}`}>

                <div className={styles.constructorItems}>
                    <div className={styles.constructorItemsWrapper}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={"src/assets/images/img-1.png"}
                        />
                    </div>

                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={50}
                            thumbnail={"src/assets/images/img-5.png"}
                        />
                    </div>

                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            isLocked={true}
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={20}
                            thumbnail={"src/assets/images/img-12.png"}
                            handleClose={() => {
                            }}
                        />

                    </div>

                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            isLocked={true}
                            text="Плоды Фалленианского дерева"
                            price={200}
                            thumbnail={"src/assets/images/img-7.png"}
                        />

                    </div>

                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            isLocked={true}
                            text="Хрустящие минеральные кольца"
                            price={200}
                            thumbnail={"src/assets/images/img-9.png"}
                        />

                    </div>

                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            isLocked={true}
                            text="Хрустящие минеральные кольца"
                            price={200}
                            thumbnail={"src/assets/images/img-9.png"}
                        />

                    </div>
                    <div className={styles.constructorItemsWrapper}>
                        <DragIcon type="primary" />

                        <ConstructorElement
                            isLocked={true}
                            text="Хрустящие минеральные кольца"
                            price={200}
                            thumbnail={"src/assets/images/img-9.png"}
                        />

                    </div>

                    <div className={styles.constructorItemsWrapper}>


                        <ConstructorElement
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={"src/assets/images/img-1.png"}
                        />

                    </div>



                </div>


            </div>
            <div className={`${styles.craftbar__order} mt-10`}>
                <div className={`${styles.craft__orderSum} text_type_main-large`}>
                    610
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Нажми на меня
                </Button>
            </div>
        </div>
    );
};

export default BurgerConstructor;
