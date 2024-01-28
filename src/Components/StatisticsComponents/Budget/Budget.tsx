import { createUseStyles } from "react-jss";
import { imagesIcons } from "../../../img/imageAssets";
import React, { FC } from "react";
import { useSelector } from "react-redux";

const Budget: FC = () => {

    const ressource: any = useSelector<unknown, any>((state: any) => state.ressource)

    const styles = createUseStyles({
        budget: {
            backgroundColor: "white",
            padding: "15px",
            width: "250px"
        },
        budgetLogo: {
            content: `url(${imagesIcons.coin})`,
            width: "40px",
            height: "40px"
        },
        budgetBox: {
            display: "flex",
            gap: "20px",
            alignItems: "center"
        },
        budgetDeck: {
            margin: "0px",
            marginBottom: "10px",
            textAlign: "start"
        }
    });

    const classes = styles()

    return (
        <div className={classes.budget}>
            <p className={classes.budgetDeck}>Государственный бюджет</p>
            <div className={classes.budgetBox}>
                <div className={classes.budgetLogo}></div>
                <div>{ressource.govermentBudget}</div>
            </div>
        </div>
    )
}

export default Budget