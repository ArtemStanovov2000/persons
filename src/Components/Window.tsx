import { createUseStyles } from "react-jss";
import Table from "./Territory/Table/Table";
import React, { FC } from "react";
import Statistics from "./StatisticsComponents/Statistics";
import DetailedDescription from "./DetailedDescription/DetailedDescription";

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
            <DetailedDescription/>
        </div>
    )
}

export default Window