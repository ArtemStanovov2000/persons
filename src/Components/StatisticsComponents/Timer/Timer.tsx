import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";
import { useEffect, useState } from "react";
import { updateStatusResources } from "../../../store/ressourceSlice";

const Timer: FC = () => {
    const ressource: any = useSelector<unknown, any>((state: any) => state.ressource)
    const territory: any = useSelector<unknown, any>((state: any) => state.start.start)

    const [time, setTime] = useState(ressource.time);

    const dispatch = useDispatch()

    let maintenanceCostsSum: number = 0
    territory.forEach(element => {
        element.forEach(innerElement => {
            maintenanceCostsSum += innerElement.texture.maintenanceCosts
        });
    });
    console.log(maintenanceCostsSum)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((prev: number) => prev + 1);
            dispatch(updateStatusResources(maintenanceCostsSum))
        }, 3000);
        return () => clearTimeout(timer);
    });

    const styles = createUseStyles({
        box: {
            backgroundColor: Colors.white,
            paddingLeft: "15px"
        }
    });

    const classes = styles()

    return (
        <div className={classes.box}>
            <p>Прошло времени</p>
            <p>{`${time} часов`}</p>
        </div>
    )
}

export default Timer