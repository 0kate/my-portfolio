import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import {
  MdOpenInNew,
} from 'react-icons/md';
import styles from './introduction.module.css';

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.grid}>
        <div>
          <span className={styles.name}>Keito Osaki</span>
          <div className={styles.bars}>
            <div className={styles.shortBar}></div>
            <div className={styles.middleBar}></div>
            <div className={styles.longBar}></div>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
            <div><FaGithub className={styles.icon} /> GitHub</div>
            <div><FaLinkedin className={styles.icon} /> LinkedIn</div>
            <div><MdOpenInNew className={styles.icon} /> TechBlog</div>
          </div>
        </div>
      </div>
    </div>
  );
}
