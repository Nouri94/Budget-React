import React from "react";
import {Statistic} from 'semantic-ui-react';
function DispalyBalance ({title, value, color="black", size="tiny"}){
    return(
        <div>
            <Statistic size={size} color={color}>
                <Statistic.Label style={{ textAlign: "left" }}>{title}</Statistic.Label>
                <Statistic.Value>{value}</Statistic.Value>
              </Statistic>
        </div>
    )
}

export default DispalyBalance;