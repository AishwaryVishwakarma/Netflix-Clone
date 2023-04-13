import React from 'react'
import styles from './styles.module.scss'
import Card from './Card/Card'

const DUMMY_PROFILES = [
  { url: 'https://i.postimg.cc/2jG0Z8zv/blue.jpg', name: 'Dipayan' },
  { url: 'https://i.postimg.cc/yYNvX4dG/red.jpg', name: 'Rishi' },
  { url: 'https://i.postimg.cc/L50PHWjC/yellow.jpg', name: 'Shuvo' }
]

const Profiles = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerText}>Who's watching?</div>
        <div className={styles.profilesContainer}>
          {DUMMY_PROFILES.map((element, idx) => (
            <Card key={idx} url={element.url} name={element.name} />
          ))}
        </div>
        <div className={styles.manageProfilesBox}>
          <p>Manage Profiles</p>
        </div>
      </div>
    </>
  )
}

export default Profiles
