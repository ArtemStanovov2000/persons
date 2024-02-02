import { createUseStyles } from "react-jss";
import Table from "./Territory/Table/Table";
import React, { FC } from "react";
import Statistics from "./StatisticsComponents/Statistics";

const Window: FC = () => {

    const styles = createUseStyles({
        window: {
            position: "relative"
        }
    });

    const classes = styles()

    return (
        <div className={classes.window}>
            <Table/>
            <Statistics/>
        </div>
    )
}

export default Window