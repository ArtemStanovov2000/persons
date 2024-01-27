import Row from "../Row/Row"
import { useSelector } from "react-redux"
import React from "react";

interface State {
    start: any;
}

const Table = () => {
    let startMap = useSelector((state: State) => state.start.start)
    const style = {
        display: "grid"
    }
    
    return (
        <div style={style}>
            {startMap.map((element: any, index: any) => <Row rowIndex={index} key={index} cells={element}/>)}
        </div>
    )
}

export default Table

