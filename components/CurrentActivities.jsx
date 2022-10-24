import { useState } from "react";
import styles from '../styles/About.module.css'
import Image from "next/image";
import datum from './ActivitiesData.js'
import ActivityItem from "./ActivityItem";

function CurrentActivities() {
    const [index, chooseIndex] = useState(1);
    return ( <div className={styles.position}>
        <h1>Currently, I'm: </h1>
        <ActivityItem data={datum[index]} id={index} />
    </div> );
}

export default CurrentActivities;