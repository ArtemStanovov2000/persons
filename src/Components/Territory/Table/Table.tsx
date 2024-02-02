import Row from "../Row/Row"
import { useSelector } from "react-redux"
import React from "react";
import { createUseStyles } from "react-jss";

interface State {
    start: any;
}

const Table = () => {
    let startMap = useSelector((state: State) => state.start.start)

    const styles = createUseStyles({
        statistics: {
            display: "flex",
            flexDirection: "column",
            marginBottom: "250px",
            marginLeft: "300px",
        }
    });

    const classes = styles()
    
    return (
        <div className={classes.statistics}>
            {startMap.map((element: any, index: any) => <Row rowIndex={index} key={index} cells={element}/>)}
        </div>
    )
}

export default Table

