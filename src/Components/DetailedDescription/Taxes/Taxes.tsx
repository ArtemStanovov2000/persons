import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";
import { useSelector, useDispatch } from "react-redux";
import { setVAT, setIncome, setEmployer } from "../../../store/taxSlice";

const useStyles = createUseStyles({
    maintitle: {
        color: Colors.white,
        fontSize: "18px",
        margin: "0",
        fontWeight: "400",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "10px 0"
    },
    taxList: {
        display: "grid",
        gap: "15px",
    },
    taxItem: {
        width: "275px",
        display: "grid",
        gap: "15px",
        paddingTop: "10px",
        backgroundColor: Colors.darkGreen2
    },
    taxtitle: {
        color: Colors.white,
        fontSize: "18px",
        margin: "0",
        fontWeight: "400",
        textTransform: "uppercase",
        textAlign: "center"
    },
    taxValueBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    button: {
        fontSize: "20px",
        textTransform: "uppercase",
        width: "80px",
        height: "40px",
        border: "none"
    },
    deck: {
        color: Colors.white,
        fontSize: "20px",
        margin: "0"
    }
});

const Taxes: FC = () => {
    const classes = useStyles()

    const taxes = useSelector((state: any) => state.tax.tax)
    const dispatch = useDispatch()

    const decreaseVAT = () => {
        dispatch(setVAT(-0.005))
    }

    const increaseVAT = () => {
        dispatch(setVAT(0.005))
    }

    const decreaseIncome = () => {
        dispatch(setIncome(-0.005))
    }

    const increaseIncome = () => {
        dispatch(setIncome(0.005))
    }

    const decreaseEmployer = () => {
        dispatch(setEmployer(-0.005))
    }

    const increaseEmployer = () => {
        dispatch(setEmployer(0.005))
    }

    return (
        <article>
            <h3 className={classes.maintitle}>Налоги</h3>
            <div className={classes.taxList}>
                <div className={classes.taxItem}>
                    <h4 className={classes.taxtitle}>НДС</h4>
                    <div className={classes.taxValueBox}>
                        <button onClick={decreaseVAT} className={classes.button}>-0.5%</button>
                        <p className={classes.deck}>{taxes.VAT}</p>
                        <button onClick={increaseVAT} className={classes.button}>+0.5%</button>
                    </div>
                </div>
                <div className={classes.taxItem}>
                    <h4 className={classes.taxtitle}>Подоходный</h4>
                    <div className={classes.taxValueBox}>
                        <button onClick={decreaseIncome} className={classes.button}>-0.5%</button>
                        <p className={classes.deck}>{taxes.income}</p>
                        <button onClick={increaseIncome} className={classes.button}>+0.5%</button>
                    </div>
                </div>
                <div className={classes.taxItem}>
                    <h4 className={classes.taxtitle}>Для работодателя</h4>
                    <div className={classes.taxValueBox}>
                        <button onClick={decreaseEmployer} className={classes.button}>-0.5%</button>
                        <p className={classes.deck}>{taxes.employer}</p>
                        <button onClick={increaseEmployer} className={classes.button}>+0.5%</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Taxes