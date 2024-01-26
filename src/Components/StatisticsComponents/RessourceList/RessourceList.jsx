import { createUseStyles } from "react-jss";
import { imagesIcons } from "../../../img/imageAssets";

const RessourceList = () => {

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
            <div className={classes.ressourceBox}>
                <div className={classes.nameRessourceBox}>
                    <div className={`${classes.ressourceImg} ${classes.oilIcon}`}></div>
                    <p className={classes.ressourceDeck}>Нефть:</p>
                </div>
                <p className={classes.ressourceDeck}>{30}</p>
            </div>
            <div className={classes.ressourceBox}>
                <div className={classes.nameRessourceBox}>
                    <div className={`${classes.ressourceImg} ${classes.peopleIcon}`}></div>
                    <p className={classes.ressourceDeck}>Люди:</p>
                </div>
                <p className={classes.ressourceDeck}>{1000}</p>
            </div>
            <div className={classes.ressourceBox}>
                <div className={classes.nameRessourceBox}>
                    <div className={`${classes.ressourceImg} ${classes.workerIcon}`}></div>
                    <p className={classes.ressourceDeck}>Трудоспособные:</p>
                </div>
                <p className={classes.ressourceDeck}>{570}</p>
            </div>
        </div>
    )
}

export default RessourceList