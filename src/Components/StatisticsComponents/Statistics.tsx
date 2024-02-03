import { createUseStyles } from "react-jss";
import React, { FC } from "react";
import { Colors } from "../../Consts/colors";
import { useDispatch } from "react-redux";
import { setPageReducer } from "../../store/pageSlice";

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

    const dispatch = useDispatch()

    return (
        <div className={classes.statistics}>
            <button onClick={() => dispatch(setPageReducer("button1"))}>{"button1"}</button>
            <button onClick={() => dispatch(setPageReducer("button2"))}>{"button2"}</button>
        </div>
    )
}

export default Statistics