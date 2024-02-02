import React, { FC } from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { Colors } from "../../../Consts/colors";

const AboutCell: FC = () => {

    const aboutCellData = useSelector<unknown, any>((state: any) => state.aboutCell.data)

    const styles = createUseStyles({
        aboutBox: {
            backgroundColor: `${Colors.darkGreen1}`,
            height: "100%",
            borderRadius: "10px",
            paddingLeft: "15px",
            paddingRight: "15px"
        },
        aboutInner: {
            display: "flex",
            gap: "20px"
        },
        aboutTypeList: {
            backgroundColor: `${Colors.darkGreen2}`,
            display: "grid",
            gap: "5px",
            padding: "10px",
            borderRadius: "10px",
            "&:hover": {
                boxShadow: `0px 0px 8px -3px ${Colors.red}`
            },
        },
        mainTitle: {
            fontSize: "16px",
            fontWeight: "600",
            margin: "0",
            color: `${Colors.white}`,
            textTransform: "uppercase",
            paddingTop: "8px",
            paddingBottom: "8px",
            textAlign: "center"
        },
        title: {
            fontSize: "14px",
            fontWeight: "500",
            color: `${Colors.white}`,
            margin: "0",
            paddingTop: "8px",
            paddingBottom: "8px",
            textAlign: "center"
        },
        typeItem: {
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            width: "270px",
            justifyContent: "space-between",
            padding: "6px 10px",
            backgroundColor: `${Colors.darkGreen3}`,
            borderRadius: "5px",
            color: `${Colors.white}`,
            "&:hover": {
                boxShadow: `0px 0px 8px 0px ${Colors.yellow}`
            },
        },
        typeitemDeck: {
            margin: "0"
        }
    });

    const classes = styles()

    return (
        <section className={classes.aboutBox}>
            <h2 className={classes.mainTitle}>Информация о ячейке</h2>
            <div className={classes.aboutInner}>
                <article className={classes.aboutTypeList}>
                    <h3 className={classes.title}>О территории</h3>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>{aboutCellData.texture.name.name}</p>
                        <div>{aboutCellData.texture.name.value}</div>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>{aboutCellData.texture.destroyCost.name}</p>
                        <div>{aboutCellData.texture.destroyCost.value}</div>
                    </div>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>{aboutCellData.texture.maintenanceCosts.name}</p>
                        <div>{aboutCellData.texture.maintenanceCosts.value}</div>
                    </div>
                </article>
                <article className={classes.aboutTypeList}>
                    <h3 className={classes.title}>Об инфраструктуре</h3>
                    <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Тип</p>
                        <div>{aboutCellData.infrastructure.name}</div>
                    </div> 
                    {aboutCellData.infrastructure.humanResources !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Требуется людей</p>
                        <div>{aboutCellData.infrastructure.humanResources}</div>
                    </div> : ""}
                    {aboutCellData.infrastructure.maintenanceCosts !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Госрасходы</p>
                        <div>{aboutCellData.infrastructure.maintenanceCosts}</div>
                    </div> : ""}
                    {aboutCellData.infrastructure.oilProduction !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Производство нефти</p>
                        <div>{aboutCellData.infrastructure.oilProduction}</div>
                    </div> : ""}
                    {aboutCellData.infrastructure.electricityProduction !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Производство энергии</p>
                        <div>{aboutCellData.infrastructure.electricityProduction}</div>
                    </div> : ""}
                    {aboutCellData.infrastructure.fuelProduction !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Производство топлива</p>
                        <div>{aboutCellData.infrastructure.fuelProduction}</div>
                    </div> : ""}
                    {aboutCellData.infrastructure.capacityPeople !== 0 ? <div className={classes.typeItem}>
                        <p className={classes.typeitemDeck}>Население</p>
                        <div>{aboutCellData.infrastructure.capacityPeople}</div>
                    </div> : ""}
                </article>
            </div>
        </section>
    )
}

export default AboutCell