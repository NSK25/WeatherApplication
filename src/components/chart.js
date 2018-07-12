import React  from 'react';
// eslint-disable-next-line
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function(props)
{
    return (
     <div>
         <Sparklines data={props.data}>
             <SparklinesLine color={props.color} />
             <SparklinesReferenceLine type="avg" />
         </Sparklines>
     </div>
    )
}