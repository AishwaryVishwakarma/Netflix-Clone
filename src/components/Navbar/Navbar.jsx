import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai'
import { FaRegBell } from 'react-icons/fa'

const TABS = [
  'Home',
  'TV Shows',
  'Movies',
  'News & Popular',
  'My List',
  'Browse by Languages'
]

const Navbar = () => {
  const [scrollAmount, setScrollAmount] = React.useState(0)

  const handleScroll = () => {
    setScrollAmount(window.scrollY)
  }

  React.useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollAmount])

  return (
    <nav
      className={`${styles.navbar} ${scrollAmount > 10 ? styles.bgDark : null}`}
    >
      <img
        src="https://i.postimg.cc/MTkxkpnT/Logonetflix.png"
        alt=""
        className={styles.logo}
      />
      <ul>
        {TABS.map((tab, idx) => (
          <li key={idx}>{tab}</li>
        ))}
      </ul>
      <div className={styles.rightContainer}>
        <AiOutlineSearch className={styles.searchIcon} />
        <p>Children</p>
        <FaRegBell className={styles.bellIcon} />
        <div className={styles.profileDropdown}>
          <img src="https://i.postimg.cc/yYNvX4dG/red.jpg" alt="" />
          <AiFillCaretDown className={styles.caret} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
