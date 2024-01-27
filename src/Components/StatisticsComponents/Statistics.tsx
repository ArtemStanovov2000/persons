import Budget from "./Budget/Budget";
import RessourceList from "./RessourceList/RessourceList";
import { createUseStyles } from "react-jss";
import React, { FC } from "react";

const Statistics: FC = () => {

    const styles = createUseStyles({
        statistics: {
            position: "fixed",
            top: "100px",
            right: "20px",
            display: "grid",
            gap: "10px"
        }
    });

    const classes = styles()

    return (
        <div className={classes.statistics}>
            <Budget/>
            <RessourceList/>
        </div>
    )
}

export default Statistics