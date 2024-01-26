import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

const Cell = ({ srtingIndex, cellIndex }) => {

    let cellData = useSelector(state => state.start.start[srtingIndex][cellIndex])

    console.log(cellData.infrastructure)

    const styles = createUseStyles({
        cell: {
            height: "75px",
            width: "75px",
            border: "1px solid #cacaca",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${cellData.infrastructure.backgroundImage}), url(${cellData.texture.backgroundImage})`,
            backgroundSize: "100% 100%",
            "&:hover": {
                border: "1px solid red"
            },
            "&:active": {
                border: "1px solid yellow"
            }
        }
    });

    const classes = styles()

    return (
        <div className={classes.cell}>{}</div>
    )
}

export default Cell