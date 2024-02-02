import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Colors } from "../../../Consts/colors";
import { createUseStyles } from "react-jss";

const GovermentRessource: FC = () => {

    const govermentData = useSelector<unknown, any>((state: any) => state.ressource)

    const styles = createUseStyles({
        govermentBox: {
            backgroundColor: `${Colors.darkGreen1}`,
            width: "730px",
            height: "100%",
            borderRadius: "10px",
            flexShrink: "0"
        },
        govermentInner: {
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            marginLeft: "10px"
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
        <section className={classes.govermentBox}>
            <h2 className={classes.title}>Ресурсы государства</h2>
            <article className={classes.govermentInner}>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Прошло часов:</p>
                    <p className={classes.typeitemDeck}>{govermentData.time}</p>
                </div>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Нефти:</p>
                    <p className={classes.typeitemDeck}>{govermentData.oil}</p>
                </div>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Население, чел.:</p>
                    <p className={classes.typeitemDeck}>{govermentData.people}</p>
                </div>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Трудоспособных:</p>
                    <p className={classes.typeitemDeck}>{govermentData.workerPeople}</p>
                </div>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Государственный бюджет:</p>
                    <p className={classes.typeitemDeck}>{govermentData.govermentBudget}</p>
                </div>
                <div className={classes.typeItem}>
                    <p className={classes.typeitemDeck}>Сбережения:</p>
                    <p className={classes.typeitemDeck}>{govermentData.savingsBudget}</p>
                </div>
            </article>
        </section>
    )
}

export default GovermentRessource