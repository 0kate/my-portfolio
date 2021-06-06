import styles from './background.module.css';

export default function Background() {
  const text = `\
const f = function() {
    return 'Hello';
}`
  return (
    <div className={styles.background}>
      <div className={styles.code}>{text}</div>
    </div>
  );
}
