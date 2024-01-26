import { createUseStyles } from "react-jss";
import { imagesIcons } from "../../../img/imageAssets";

const Budget = () => {

    const styles = createUseStyles({
        budget: {
            backgroundColor: "white",
            padding: "15px",
            width: "250px"
        },
        budgetLogo: {
            content: `url(${imagesIcons.coin})`,
            width: "40px",
            height: "40px"
        },
        budgetBox: {
            display: "flex",
            gap: "20px",
            alignItems: "center"
        },
        budgetDeck: {
            margin: "0px",
            marginBottom: "10px",
            textAlign: "start"
        }
    });

    const classes = styles()

    return (
        <div className={classes.budget}>
            <p className={classes.budgetDeck}>Количество монет</p>
            <div className={classes.budgetBox}>
                <div className={classes.budgetLogo}></div>
                <div>3000</div>
            </div>
        </div>
    )
}

export default Budget