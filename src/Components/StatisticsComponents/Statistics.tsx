import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setPageReducer } from "../../store/pageSlice";
import { createUseStyles } from "react-jss";
import { Colors } from "../../Consts/colors";

const useStyles = createUseStyles({
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
    },
    parameters: {
        display: "flex",
        gap: "20px",
        alignItems: "flex-start"
    },
    button: {
        fontSize: "20px",
        padding: "10px 30px",
        border: "none",
        backgroundColor: "grey",
        textTransform: "uppercase"
    }
});

const Statistics: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <div className={classes.statistics}>
            <article className={classes.parameters}>
                <button className={classes.button} onClick={() => dispatch(setPageReducer("Ячейка"))}>{"Ячейка"}</button>
                <button className={classes.button} onClick={() => dispatch(setPageReducer("Ресурсы"))}>{"Ресурсы"}</button>
                <button className={classes.button} onClick={() => dispatch(setPageReducer("Налоги"))}>{"Налоги"}</button>
            </article>
        </div>
    )
}

export default Statistics