import String from "../String/String"
import { useSelector } from "react-redux"

const Table = () => {
    let rer = useSelector(state => state.start.start)
    const style = {
        display: "grid"
    }
    
    return (
        <div style={style}>
            {rer.map((element, index) => <String stringIndex={index} key={index} cells={element}></String>)}
        </div>
    )
}

export default Table

