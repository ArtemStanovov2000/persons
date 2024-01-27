import { createUseStyles } from "react-jss";
import Table from "./Territory/Table/Table";
import Statistics from "./StatisticsComponents/Statistics";
import React, { FC } from "react";

const Window: FC = () => {

    const styles = createUseStyles({
        window: {
            position: "relative"
        }
    });

    const classes = styles()

    return (
        <div className={classes.window}>
            <Statistics/>
            <Table/>
        </div>
    )
}

export default Window