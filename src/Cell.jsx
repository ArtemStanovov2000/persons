import { createUseStyles } from "react-jss";

const Cell = ({ srtingIndex, cellIndex }) => {
    
    const styles = createUseStyles({
        cell: {
            height: "75px",
            width: "75px",
            border: "1px solid #cacaca",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
                backgroundColor: "#191919"
            },
            "&:active": {
                backgroundColor: "#7f7f7f"
            }
        }
    });

    const classes = styles()

    return (
        <div srtingIndex={srtingIndex} cellIndex={cellIndex} className={classes.cell}>{}</div>
    )
}

export default Cell