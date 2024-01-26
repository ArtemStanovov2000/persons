import Row from "../Row/Row"
import { useSelector } from "react-redux"

const Table = () => {
    let startMap = useSelector(state => state.start.start)
    const style = {
        display: "grid"
    }
    
    return (
        <div style={style}>
            {startMap.map((element, index) => <Row rowIndex={index} key={index} cells={element}/>)}
        </div>
    )
}

export default Table

