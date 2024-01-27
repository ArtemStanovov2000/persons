import Cell from "../Cell/Cell"
import React, {FC} from "react";

interface Props {
    cells: any;
    rowIndex: any;
}

const Row: FC<Props> = ({ cells, rowIndex }: Props) => {

    const style = {
        display: "flex"
    }

    return (
        <div style={style}>{
            cells.map((element: any, index: any) => <Cell rowIndex={rowIndex} cellIndex={index} key={index}/>)
        }</div>
    )
}

export default Row