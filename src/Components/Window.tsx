import Table from "./Territory/Table/Table";
import React, { FC } from "react";
import Statistics from "./StatisticsComponents/Statistics";
import DetailedDescription from "./DetailedDescription/DetailedDescription";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    window: {
        position: "relative"
    }
});

const Window: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.window}>
            <Table/>
            <Statistics/>
            <DetailedDescription/>
        </div>
    )
}

export default Window