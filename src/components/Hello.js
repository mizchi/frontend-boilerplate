/* @flow */
import React from 'react'
import styles from './styles.css'

export default function Hello (_props: {} = {}): React$Element<any> {
  return <div className={styles.Hello}>
    <div className={styles.title}>Hello</div>
  </div>
}
