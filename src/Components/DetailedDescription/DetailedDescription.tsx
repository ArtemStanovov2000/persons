import React, {FC} from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../Consts/colors";

const DetailedDescription: FC = () => {

    const elementHeight = window.innerHeight - 250

    const styles = createUseStyles({
        detailed: {
            position: "fixed",
            display: "flex",
            gap: "10px",
            bottom: "250px",
            width: "280px",
            height: `${elementHeight}px`,
            paddingLeft: "10px",
            paddingRight: "10px",
            backgroundColor: `${Colors.darkGreen}`,
            boxShadow: "0px -4px 8px -1px rgba(240, 255, 0, 0.49)"
        }
    });

    const classes = styles()

    return(
        <article className={classes.detailed}>
            
        </article>
    )
}

export default DetailedDescription