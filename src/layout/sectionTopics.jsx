import styles from '../styles/sectionTopics.module.css';

export default function SectionTopics({ title, children, customClassName }) {
  return (
    <div className={styles.sectionTopicsContainer}>
      <h2 className={styles.topicTitle}> {title} </h2>

      <div className={`${styles.childrenTopicsContainer} ${customClassName}`}>
        {children}
      </div>
    </div>
  );
}