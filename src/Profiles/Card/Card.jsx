import React from 'react'
import styles from './styles.module.scss'

const Card = ({url, name}) => {
  return (
    <div className={styles.boxWrapper}>
      <img src={url} alt="image" />
      <div className={styles.profileName}>{name}</div>
    </div>
  )
}

export default Card;
<<<<<<< HEAD
 
=======
>>>>>>> ce1dfe782dbcbd0fd517fd8c6fd07ca68dd4f379
