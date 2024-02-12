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
        backgroundColor: `${Colors.darkGreen4}`,
        boxShadow: "0px -4px 8px -1px rgba(240, 255, 0, 0.49)",
    },
    parameters: {
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        border: `1px solid ${Colors.darkGrey}`,
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    buttonBox: {
        display: "grid",
        gap: "10px"
    },
    buttonTitle: {
        color: Colors.white,
        textTransform: "uppercase",
        fontSize: "14px",
        textAlign: "center",
        margin: "0",
        paddingTop: "15px"
    },
    button: {
        fontSize: "20px",
        padding: "10px 30px",
        border: "none",
        backgroundColor: Colors.grey,
        textTransform: "uppercase",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: Colors.darkGrey,
        }
    }
});

const Statistics: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <div className={classes.statistics}>
            <article className={classes.parameters}>
                <div className={classes.buttonBox}>
                    <p className={classes.buttonTitle}>Параметры</p>
                    <button className={classes.button} onClick={() => dispatch(setPageReducer("Ячейка"))}>{"Ячейка"}</button>
                    <button className={classes.button} onClick={() => dispatch(setPageReducer("Ресурсы"))}>{"Ресурсы"}</button>
                    <button className={classes.button} onClick={() => dispatch(setPageReducer("Налоги"))}>{"Налоги"}</button>
                </div>
            </article>
        </div>
    )
}

export default Statistics