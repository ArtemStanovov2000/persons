import Cell from "../Cell/Cell"
import React, {FC} from "react";
import CellType from "../../../data/GameData/InitialGameData";
import { createUseStyles } from "react-jss";

interface Props {
    cells: CellType[];
    rowIndex: number;
}

const useStyles = createUseStyles({
    row: {
        display: "flex"
    }
});

const Row: FC<Props> = ({ cells, rowIndex }) => {
    const classes = useStyles()
    return (
        <div className={classes.row}>{
            cells.map((element: CellType, index: number) => <Cell rowIndex={rowIndex} cellIndex={index} key={index}/>)
        }</div>
    )
}

export default Row