import React, {FC} from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";
import { useEffect, useState } from "react";

const Timer: FC = () => {
    let timeValue: any = useSelector<unknown, any>((state: any) => state.ressource.time)

    const [count, setCount] = useState(timeValue);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setCount(prev => prev + 1);
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
            <p>{`${count} часов`}</p>
        </div>
    )
}

export default Timer