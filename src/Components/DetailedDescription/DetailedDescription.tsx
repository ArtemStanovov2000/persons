import React, {FC} from "react";
import AboutCell from "./AboutCell/AboutCell";
import Resources from "./Resources/Resources";
import Taxes from "./Taxes/Taxes";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../Consts/colors";

const elementHeight = window.innerHeight - 250
const useStyles = createUseStyles({
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

const DetailedDescription: FC = () => {
    const classes = useStyles()

    const page: string = useSelector((state: any) => state.page.page)

    return(
        <section className={classes.detailed}>
            {page === "Ячейка" && <AboutCell/>}
            {page === "Ресурсы" && <Resources/>}
            {page === "Налоги" && <Taxes/>}
        </section>
    )
}

export default DetailedDescription