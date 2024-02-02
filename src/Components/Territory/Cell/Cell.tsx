import { createUseStyles } from "react-jss";
import { useSelector, useDispatch } from "react-redux";
import React, {FC} from "react";
import { Colors } from "../../../Consts/colors";
import CellType from "../../../data/GameData/InitialGameData";
import { setStateInformation } from "../../../store/aboutCellSlice";

interface Props {
    rowIndex: number;
    cellIndex: number;
}

const Cell: FC<Props> = ({ rowIndex, cellIndex }) => {

    let cellData: CellType = useSelector<unknown, any>((state: any) => state.start.start[rowIndex][cellIndex])

    const styles = createUseStyles({
        cell: {
            height: "75px",
            width: "75px",
            border: `1px solid ${Colors.black}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${cellData.infrastructure.backgroundImage}), url(${cellData.texture.backgroundImage})`,
            backgroundSize: "100% 100%",
            "&:hover": {
                border: `1px solid ${Colors.red}`
            },
            "&:active": {
                border: `1px solid ${Colors.yellow}`
            }
        }
    });

    const classes = styles()

    const dispatch = useDispatch()
    const setData = () => {
        dispatch(setStateInformation(cellData))
    }

    return (
        <div onClick={setData} className={classes.cell}>{}</div>
    )
}

export default Cell