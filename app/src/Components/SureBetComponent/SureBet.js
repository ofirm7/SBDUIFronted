import "./SureBet.css";
import React from "react";

//Consts
const profitMeasurements = '%'
//End of consts

const SureBet = (args) => {
    return (
        <div className="SureBetMain">
            <h3 className="GameTitleLable">{args.GameTitle}</h3>
            <div className="SureBetProperties">
                <p className="ProfitLable">profit: {args.Profit}{profitMeasurements}</p>
                <div className="ChoicesContainer">
                    {args.Choices.map(choice => (
                    <div className="ChoiceProperties">
                        <p className="NameRewardLable">
                            {choice._name} : {choice._reward}
                        </p>
                        <p className="SiteLable">
                            Site: <a href={choice._SureChoice__link}>{choice._SureChoice__site}</a>
                        </p>
                        <p className="ChoiceInvestLable">
                            Invest: {(choice._SureChoice__invest / 1000 * 100).toFixed(3)}{profitMeasurements}
                        </p>
                    </div>
                    ))}
              </div>
            </div>
        </div>
    )
};

export default SureBet;