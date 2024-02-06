import React, {FC} from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";

const useStyles = createUseStyles({
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

const Resources: FC = () => {
    const classes = useStyles()

    const resources: any = useSelector((state: any) => state.ressource)

    return(
        <article className={classes.box}>
            <h2 className={classes.mainTitle}>Ресурсы</h2>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Люди</h3>
                {Object.entries(resources.people).map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Ископаемые ресурсы</h3>
                {Object.entries(resources.fossils).map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
            <div className={classes.paramList}>
                <h3 className={classes.title}>Денежные ресурсы</h3>
                {Object.entries(resources.money).map((element: any, index: any) =>
                    <div className={classes.paramItem} key={index}>
                        <p className={classes.desc}>{element[1].name}</p>
                        <p className={classes.desc}>{element[1].value}</p>
                    </div>)}
            </div>
        </article>
    )
}

export default Resources