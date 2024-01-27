import Cell from "../Cell/Cell"
import React, {FC} from "react";
import CellType from "../../../data/GameData/InitialGameData";

interface Props {
    cells: [CellType];
    rowIndex: number;
}

const Row: FC<Props> = ({ cells, rowIndex }) => {

    const style = {
        display: "flex"
    }

    return (
        <div style={style}>{
            cells.map((element: CellType, index: number) => <Cell rowIndex={rowIndex} cellIndex={index} key={index}/>)
        }</div>
    )
}

export default Row