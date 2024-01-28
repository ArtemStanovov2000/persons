import { createUseStyles } from "react-jss";
import React, { FC } from "react";

interface Props {
    icon: any;
    label: string;
    value: number;
}

const RessourceItem: FC<Props> = ({icon, label, value}) => {

    const styles = createUseStyles({
        ressourceStatistics: {
            backgroundColor: "white",
            display: "grid",
            gap: "10px"
        },
        boxDeck: {
            textAlign: "start",
            margin: "0"
        },
        ressourceBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        ressourceImg: {
            height: "50px",
            width: "50px",
            backgroundSize: "100% 100%"
        },
        nameRessourceBox: {
            display: "flex",
            alignItems: "center"
        },
        ressourceDeck: {
            fontSize: "14px",
            margin: "0"
        }
    });

    const classes = styles()

    return (
        <div className={classes.ressourceStatistics}>
            <div className={classes.ressourceBox}>
                <div className={classes.nameRessourceBox}>
                    <div className={`${classes.ressourceImg} ${icon}`}></div>
                    <p className={classes.ressourceDeck}>{label}</p>
                </div>
                <p className={classes.ressourceDeck}>{value}</p>
            </div>
        </div>
    )
}

export default RessourceItem