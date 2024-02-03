import { createUseStyles } from "react-jss";
import React, { FC } from "react";
import { Colors } from "../../Consts/colors";
const Statistics: FC = () => {

    const styles = createUseStyles({
        statistics: {
            position: "fixed",
            display: "flex",
            gap: "10px",
            bottom: "0",
            width: "1900px",
            height: "250px",
            paddingLeft: "10px",
            paddingRight: "10px",
            backgroundColor: `${Colors.darkGreen}`,
            boxShadow: "0px -4px 8px -1px rgba(240, 255, 0, 0.49)"
        }
    });

    const classes = styles()

    return (
        <div className={classes.statistics}>
            <button>{"button 1"}</button>
            <button>{"button 2"}</button>
        </div>
    )
}

export default Statistics