import React from 'react';
import styles from '../styles/skillCard.module.css';

export default function SkillCard({ skillCardData }) {
  return (
    <div className={styles.skillCard}>
      <div 
        className={styles.skillIllustration}
        style={{ backgroundImage: `url(${skillCardData.skillIllustrationURL})` }}
      ></div>

      <div className={styles.cardCourseInfo}>
        <h4 className={styles.skillTitle}> {skillCardData.skillTitle} </h4>

        <p className={styles.skillCourse}> {skillCardData.skillCourse} </p>
        
        <span className={styles.skillCourseConclusion}> 21/05/2022 </span>
      </div>
    </div>
  );
}