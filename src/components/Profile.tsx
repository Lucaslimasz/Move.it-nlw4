import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/lucaslimasz.png' />
      <div>
        <strong>Lucas Lima</strong>
        <p>
          <img src='icons/level.svg' />
          Level 11
        </p>
      </div>
    </div>
  )
}