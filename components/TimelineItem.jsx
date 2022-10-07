import React, { useState } from 'react';
import styles from '../styles/Timeline.module.css'

const TimelineItem = ({ data }) => {
    return <div className={styles.item}>
        <h1>Achievements</h1>
        <div className={styles.year}>
            <h1>{data.year}</h1>
        </div>

        <div className={styles.content}>
            {
                data.contents.map((item) => (
                    <div className={styles.contents}>
                        <h3>{item.month}</h3>
                        <ul>
                            {item.text.map((texts) => (
                                <li>{texts}</li>
                            ))}
                        </ul>

                    </div>
                ))
            }
        </div>
    </div>
}

export default TimelineItem;