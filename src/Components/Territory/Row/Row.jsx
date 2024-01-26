import Cell from "../Cell/Cell"

const Row = ({ cells, rowIndex }) => {

    const style = {
        display: "flex"
    }

    return (
        <div rowIndex={rowIndex} style={style}>{
            cells.map((element, index) => <Cell rowIndex={rowIndex} cellIndex={index} key={index}/>)
        }</div>
    )
}

export default Row