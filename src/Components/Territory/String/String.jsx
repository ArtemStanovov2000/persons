import Cell from "../Cell/Cell"

const String = ({cells, stringIndex}) => {

    const style = {
        display: "flex"
    }

    return (
        <div stringIndex={stringIndex} style={style}>{cells.map((element, index) => <Cell srtingIndex={stringIndex} cellIndex={index} key={index}></Cell>)}</div>
    )
}

export default String