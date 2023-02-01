import React, { useState } from 'react';
import styles from '../styles/Timeline.module.css'
import datum from './TimelineData'
import TimelineItem from './TimelineItem';
import ReactTooltip from 'react-tooltip';
import aboutStyles from '../styles/About.module.css'

function indexOfYear(year) {
    let ls = datum.map(item => item.year)
    return ls.indexOf(year)
}

const Timeline = () => {
    const [select, chooseSelect] = useState(2023)

    return <div className={styles.container}>
        
        <div>
            
            <TimelineItem data={datum[indexOfYear(select)]}/>
        </div>
        
        <div className={styles.buttons}>

                <button className={styles.node} onClick={() => chooseSelect(2023)}>2023</button> 

                <button className={styles.node} onClick={() => chooseSelect(2022)}>2022</button> 
                
                <button className={styles.node} onClick={() => chooseSelect(2021)}>2021</button>
                
                <button className={styles.node} onClick={() => chooseSelect(2020)}>2020</button>
        </div>
        {/* {data.map(item => (<TimelineItem data={item} id={item.year}/>))} */}
        
        {/* <p1>{select}</p1> */}
    </div>
}

export default Timeline;