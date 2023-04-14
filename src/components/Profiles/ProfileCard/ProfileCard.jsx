import React from 'react'
import styles from './styles.module.scss'

const ProfileCard = ({url, name}) => {
  return (
    <div className={styles.boxWrapper}>
      <img src={url} alt="image" />
      <div className={styles.profileName}>{name}</div>
    </div>
  )
}

export default ProfileCard;
