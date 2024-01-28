import { createUseStyles } from "react-jss";
import { imagesIcons } from "../../../img/imageAssets";
import React, { FC } from "react";
import RessourceItem from "./RessourceItem.tsx/RessourceItem";

const RessourceList: FC = () => {

    const styles = createUseStyles({
        ressourceStatistics: {
            backgroundColor: "white",
            padding: "15px",
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
        }, 
        oilIcon: {
            backgroundImage: `url(${imagesIcons.oil})`
        }, 
        peopleIcon: {
            backgroundImage: `url(${imagesIcons.people})`
        },
        workerIcon: {
            backgroundImage: `url(${imagesIcons.worker})`
        }
    });

    const classes = styles()

    return (
        <div className={classes.ressourceStatistics}>
            <p className={classes.boxDeck}>Ресурсы:</p>
            <RessourceItem icon={classes.oilIcon} label={"Нефть"} value={30}/>
            <RessourceItem icon={classes.peopleIcon} label={"Люди:"} value={1000}/>
            <RessourceItem icon={classes.workerIcon} label={"Трудоспособные:"} value={570}/>
        </div>
    )
}

export default RessourceList