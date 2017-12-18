import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    console.log("data",data);
    if(!data) return 0;
    let average = data.reduce((sum, number) => sum + number, 0) / data.length;
    return Math.round(average);
}


export default (props) => {
    return (
        <div>
            <Sparklines height={25} width={120} data={props.data}>
                <SparklinesLine color = {props.color} />
                <SparklinesReferenceLine type ="avg" />
            </Sparklines>
            <div> { average(props.data) }</div>
        </div>
    );
}

