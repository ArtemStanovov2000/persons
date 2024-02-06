import Row from "../Row/Row"
import { useSelector } from "react-redux"
import { createUseStyles } from "react-jss";
import React from "react";

interface State {
    start: any;
}

const useStyles = createUseStyles({
    statistics: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "250px",
        marginLeft: "300px",
    }
});

const Table = () => {
    const classes = useStyles()
    const startMap = useSelector((state: State) => state.start.start)

    return (
        <div className={classes.statistics}>
            {startMap.map((element: any, index: number) => <Row rowIndex={index} key={index} cells={element}/>)}
        </div>
    )
}

export default Table

