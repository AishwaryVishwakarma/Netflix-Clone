import React from 'react'
import styles from './styles.module.scss'
import ProfileCard from '../../components/Profiles/ProfileCard/ProfileCard'
import { Link } from 'react-router-dom'

export const DUMMY_PROFILES = [
  { url: 'https://i.postimg.cc/2jG0Z8zv/blue.jpg', name: 'Dipayan' },
  { url: 'https://i.postimg.cc/yYNvX4dG/red.jpg', name: 'Rishi' },
  { url: 'https://i.postimg.cc/L50PHWjC/yellow.jpg', name: 'Shuvo' }
]

const ProfilesPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerText}>Who's watching?</div>
        <div className={styles.profilesContainer}>
          {DUMMY_PROFILES.map((element, idx) => (
            <Link to="/home" key={idx}>
              <ProfileCard url={element.url} name={element.name} />
            </Link>
          ))}
        </div>
        <div className={styles.manageProfilesBox}>
          <p>Manage Profiles</p>
        </div>
      </div>
    </>
  )
}

export default ProfilesPage
