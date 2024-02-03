import React, {FC} from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";

const Ressources: FC = () => {

    const ressources: any = useSelector((state: any) => state.ressource)

    const peopleRessources = Object.entries(ressources.people)
    const fossilsRessources = Object.entries(ressources.fossils)
    const moneyRessources = Object.entries(ressources.money)

    const styles = createUseStyles({
        box: {
            display: "grid",
            alignContent: "start"
        },
        mainTitle: {
            color: Colors.white,
            fontSize: "18px",
            margin: "0",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "14px"
        },
        paramList: {
            backgroundColor: Colors.darkGreen1,
            display: "grid",
            gap: "10px",
            justifyContent: "center",
            marginTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "8px",
            paddingRight: "8px",
            "&:hover": {
                boxShadow: `0px 0px 1px 1px ${Colors.red}`
            }
        },
        title: {
            color: Colors.white,
            fontSize: "16px",
            margin: "0",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "14px"
        },
        paramItem: {
            display: "flex",
            padding: "7px 13px",
            justifyContent: "space-between",
            width: "230px",
            backgroundColor: Colors.darkGreen2,
            borderRadius: "5px",
            "&:hover": {
                boxShadow: `0px 0px 2px 2px ${Colors.yellow}`
            }
        },
        desc: {
            color: Colors.white,
            fontSize: "14px",
            margin: "0",
        }
    });

    const classes = styles()

    console.log(moneyRessources)

    return(
        <article className={classes.box}>
            <h2 className={classes.mainTitle}>Ресурсы</h2>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Люди</h3>
                {peopleRessources.map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Ископаемые ресурсы</h3>
                {fossilsRessources.map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Денежные ресурсы</h3>
                {moneyRessources.map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
        </article>
    )
}

export default Ressources