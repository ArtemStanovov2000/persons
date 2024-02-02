import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";
import { countChildrens, countPensioners } from "../../../data/GameData/population";
import { financialParameters } from "../../../Consts/govermentParameters";

const Parameters: FC = () => {

    const styles = createUseStyles({
        parametersBox: {
            backgroundColor: `${Colors.darkGreen1}`,
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
        },
        title: {
            fontSize: "16px",
            fontWeight: "600",
            margin: "0",
            color: `${Colors.white}`,
            textTransform: "uppercase",
            paddingTop: "8px",
            paddingBottom: "8px",
            textAlign: "center"
        },
        parametersList: {
            display: "flex",
            gap: "5px",
            flexWrap: "wrap"
        },
        typeItem: {
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            width: "max-content",
            gap: "7px",
            justifyContent: "space-between",
            padding: "6px 10px",
            backgroundColor: `${Colors.darkGreen3}`,
            borderRadius: "5px",
            color: `${Colors.white}`,
            "&:hover": {
                boxShadow: `0px 0px 8px 0px ${Colors.yellow}`
            },
        },
        typeitemDeck: {
            margin: "0"
        }
    });

    const classes = styles()

    return (
        <section className={classes.parametersBox}>
            <h2 className={classes.title}>Статистика</h2>
            <div>
                <article className={classes.parametersList}>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Доходы</p>
                        <p className={classes.typeitemDeck}>{0}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Расходы</p>
                        <p className={classes.typeitemDeck}>{0}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Дети</p>
                        <p className={classes.typeitemDeck}>{countChildrens()}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Пенсионеры</p>
                        <p className={classes.typeitemDeck}>{countPensioners()}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>НДС</p>
                        <p className={classes.typeitemDeck}>{financialParameters.VATTax}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Для работодателя</p>
                        <p className={classes.typeitemDeck}>{financialParameters.employerTax}</p>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Подоходный налог</p>
                        <p className={classes.typeitemDeck}>{financialParameters.incomeTax}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Parameters