import { useState } from 'react';
import alexProfileCartoonImg from '../imgs/cartoonImage.png';
import alexProfileImg from '../imgs/profileImage.png';
import workInProgressImg from '../imgs/workInProgress.png';
import Header from './header';
import SectionTopics from './sectionTopics';
import SkillCard from '../components/skilCard';
import getTypingString from '../function/typingEffect';
import styles from '../styles/layout.module.css';

export default function Layout() {
  const textArray = ['Engenheiro de Software', 'Desenvolvedor Front-end']
  const [skillList] = useState([
    {skillIllustrationURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4zBDLADQ8jgT9pWcucvZjsyPoWme7A-auA&s', skillTitle: 'HTML', skillCourse: 'SoloLearn',},
    {skillIllustrationURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4zBDLADQ8jgT9pWcucvZjsyPoWme7A-auA&s', skillTitle: 'CSS', skillCourse: 'SoloLearn',},
    {skillIllustrationURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4zBDLADQ8jgT9pWcucvZjsyPoWme7A-auA&s', skillTitle: 'JS', skillCourse: 'SoloLearn',},
    {skillIllustrationURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAACUCAMAAABY+0dBAAAAnFBMVEX///8AAAC+MvX7+/t8fHyioqKvr69kZGTMzMw6Ojq7H/XNc/e9LfXTh/i8KfXe3t79+/+3APT57/7o6OiRkZHu7u7z4f3RfvjYlvnnwfv15/22tracnJwMDAzS0tK8vLzhrvr79P7JYfbBQfXkuvvEUPbbnfnqx/zdpfpsbGxPT08rKyuJiYlCQkJbW1vLavft0vzWj/nHWfYdHR1LormKAAAEpklEQVR4nO2c21bqMBBADy0ghtASSik3uZU7Kqj//2+n6HiO0EmDQBsaZj/5wLgm2+lkki7884e4FeqtVl13DrdAd8n4qKs7C+2MpxPGOdtOx7oz0csisJgVwaxgpzsXjYyDkHHrE87C2t12ilHogIZPFU441Z2RFnYz8UPDV1W8t3RnlTmtmnCsGI54u6/9ozuyRFzDHhFOG7qzy4zxYnv8VPwsiuriTrrmruYwmYavrfTtHrbSRnvGpOXw3TRnc+Pnq+mMI00y9nzwWUd3pqnSCFXV8KMqzO0U4zdsy5RWhZibqaIxDSVbpoxoKzWvVdQXVfmWKS0KFix0J35ldm9W4pYpg1ltk6buxjJ2rjgVLt6XxjwfnYnziyZ5jMMnZjwfjeolGj5VOEH+i6LeVm6Z3HFUzw0Ty7xvpYFqy3ScsDMKleOm2OpeyYXUkjeLaIBsR2XfqKlGTlbVvZILSRbBeA0OmrtAcSQ1WQQX1cW/LtjoTJK2WJNFCGd6cC/XHTH5h80V4Yha7HqyFUi3GFNFRE0SvYXayZqmmSI4C0eygGWIThUmiti/1Eq4qe4GISLPQBGMVxVnh06Vx6NME8HZRH3bMh69H7cK00QwvjzpVVZrfjRfmSWCi6B74uGp3jq80TJJBBf8Vy9uFkyYKCI6Xy5/Gzz/f0A3RgSzgjPec3eD76tOQ0Q4TLVlyphumWOMiIsuYOHi1wQRzJpfdCW/a0fzVf5FCFHdXXjfWF9sRe5FBKJzhWvX8VRMLv8tWrnaK4nRtX4RQRAEQRAEQRAEQRAEcV+4lRjeWVFu+rmmyvPm8YhNTxlkl2NRj8UMkk2TYiFGWRlkl+JRDxkkmyYkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAiARAAkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAgAEVGyVUF2Mx61yiLbFEFENJUifCwqi2xTBFnSylcFeet4VD+LbFMEKfKN8ntqbjzohM5y2yBtr1BRBQ3PCbpxsDU9K5qEvUKC8v51R6zKC4om4WMx2aSbItiiFI0PabAGiPjAVpX4ZWC0iPI+T0n+vEnTkf+CRZQySzgtetiyktb1jAYMsss4JdBCLzxJx4L+E/b5jXIIu3l8ZErcm8Brwm6iHgpF5Vh++5TRlUVrQ/7I3qvkw3kfp/YMJGuLpuZDFbbfl31ynfdxao+Pd789m7LrQc37notN44D65J4HKugoAbw2y8OI8jPeSr54yf+esQe7Xfgd6huMfFB5vMyDER3iE3mXOIWPvF9F/Me+qCRedad/Rbykfqlgozv5q4Ldz5zGxwn/tipP4EeIE+rBhJnygP5ZT8fLUHfeV8cun9Ex18bVQ4RdQW9ckngwrD9848vOlhJMGSgRZEdyFEPL4Qt7tTlJwtMm/5eUCgZFdat4WjfzfzWnZtB/SNxKH4slo5+KH3jDvuwRWRdLFXN7JII3GJaKrwc2XlbNXsW9h2fiCNv3Pdd1K8NerzeIfvD8uyqFW+UvlrdUP6PQnfMAAAAASUVORK5CYII=', skillTitle: 'React', skillCourse: 'Udemy',},
    {skillIllustrationURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAACUCAMAAABY+0dBAAAAnFBMVEX///8AAAC+MvX7+/t8fHyioqKvr69kZGTMzMw6Ojq7H/XNc/e9LfXTh/i8KfXe3t79+/+3APT57/7o6OiRkZHu7u7z4f3RfvjYlvnnwfv15/22tracnJwMDAzS0tK8vLzhrvr79P7JYfbBQfXkuvvEUPbbnfnqx/zdpfpsbGxPT08rKyuJiYlCQkJbW1vLavft0vzWj/nHWfYdHR1LormKAAAEpklEQVR4nO2c21bqMBBADy0ghtASSik3uZU7Kqj//2+n6HiO0EmDQBsaZj/5wLgm2+lkki7884e4FeqtVl13DrdAd8n4qKs7C+2MpxPGOdtOx7oz0csisJgVwaxgpzsXjYyDkHHrE87C2t12ilHogIZPFU441Z2RFnYz8UPDV1W8t3RnlTmtmnCsGI54u6/9ozuyRFzDHhFOG7qzy4zxYnv8VPwsiuriTrrmruYwmYavrfTtHrbSRnvGpOXw3TRnc+Pnq+mMI00y9nzwWUd3pqnSCFXV8KMqzO0U4zdsy5RWhZibqaIxDSVbpoxoKzWvVdQXVfmWKS0KFix0J35ldm9W4pYpg1ltk6buxjJ2rjgVLt6XxjwfnYnziyZ5jMMnZjwfjeolGj5VOEH+i6LeVm6Z3HFUzw0Ty7xvpYFqy3ScsDMKleOm2OpeyYXUkjeLaIBsR2XfqKlGTlbVvZILSRbBeA0OmrtAcSQ1WQQX1cW/LtjoTJK2WJNFCGd6cC/XHTH5h80V4Yha7HqyFUi3GFNFRE0SvYXayZqmmSI4C0eygGWIThUmiti/1Eq4qe4GISLPQBGMVxVnh06Vx6NME8HZRH3bMh69H7cK00QwvjzpVVZrfjRfmSWCi6B74uGp3jq80TJJBBf8Vy9uFkyYKCI6Xy5/Gzz/f0A3RgSzgjPec3eD76tOQ0Q4TLVlyphumWOMiIsuYOHi1wQRzJpfdCW/a0fzVf5FCFHdXXjfWF9sRe5FBKJzhWvX8VRMLv8tWrnaK4nRtX4RQRAEQRAEQRAEQRAEcV+4lRjeWVFu+rmmyvPm8YhNTxlkl2NRj8UMkk2TYiFGWRlkl+JRDxkkmyYkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAiARAAkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAgAEVGyVUF2Mx61yiLbFEFENJUifCwqi2xTBFnSylcFeet4VD+LbFMEKfKN8ntqbjzohM5y2yBtr1BRBQ3PCbpxsDU9K5qEvUKC8v51R6zKC4om4WMx2aSbItiiFI0PabAGiPjAVpX4ZWC0iPI+T0n+vEnTkf+CRZQySzgtetiyktb1jAYMsss4JdBCLzxJx4L+E/b5jXIIu3l8ZErcm8Brwm6iHgpF5Vh++5TRlUVrQ/7I3qvkw3kfp/YMJGuLpuZDFbbfl31ynfdxao+Pd789m7LrQc37notN44D65J4HKugoAbw2y8OI8jPeSr54yf+esQe7Xfgd6huMfFB5vMyDER3iE3mXOIWPvF9F/Me+qCRedad/Rbykfqlgozv5q4Ldz5zGxwn/tipP4EeIE+rBhJnygP5ZT8fLUHfeV8cun9Ex18bVQ4RdQW9ckngwrD9848vOlhJMGSgRZEdyFEPL4Qt7tTlJwtMm/5eUCgZFdat4WjfzfzWnZtB/SNxKH4slo5+KH3jDvuwRWRdLFXN7JII3GJaKrwc2XlbNXsW9h2fiCNv3Pdd1K8NerzeIfvD8uyqFW+UvlrdUP6PQnfMAAAAASUVORK5CYII=', skillTitle: 'Next', skillCourse: 'Udemy',},
    {skillIllustrationURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAACUCAMAAABY+0dBAAAAnFBMVEX///8AAAC+MvX7+/t8fHyioqKvr69kZGTMzMw6Ojq7H/XNc/e9LfXTh/i8KfXe3t79+/+3APT57/7o6OiRkZHu7u7z4f3RfvjYlvnnwfv15/22tracnJwMDAzS0tK8vLzhrvr79P7JYfbBQfXkuvvEUPbbnfnqx/zdpfpsbGxPT08rKyuJiYlCQkJbW1vLavft0vzWj/nHWfYdHR1LormKAAAEpklEQVR4nO2c21bqMBBADy0ghtASSik3uZU7Kqj//2+n6HiO0EmDQBsaZj/5wLgm2+lkki7884e4FeqtVl13DrdAd8n4qKs7C+2MpxPGOdtOx7oz0csisJgVwaxgpzsXjYyDkHHrE87C2t12ilHogIZPFU441Z2RFnYz8UPDV1W8t3RnlTmtmnCsGI54u6/9ozuyRFzDHhFOG7qzy4zxYnv8VPwsiuriTrrmruYwmYavrfTtHrbSRnvGpOXw3TRnc+Pnq+mMI00y9nzwWUd3pqnSCFXV8KMqzO0U4zdsy5RWhZibqaIxDSVbpoxoKzWvVdQXVfmWKS0KFix0J35ldm9W4pYpg1ltk6buxjJ2rjgVLt6XxjwfnYnziyZ5jMMnZjwfjeolGj5VOEH+i6LeVm6Z3HFUzw0Ty7xvpYFqy3ScsDMKleOm2OpeyYXUkjeLaIBsR2XfqKlGTlbVvZILSRbBeA0OmrtAcSQ1WQQX1cW/LtjoTJK2WJNFCGd6cC/XHTH5h80V4Yha7HqyFUi3GFNFRE0SvYXayZqmmSI4C0eygGWIThUmiti/1Eq4qe4GISLPQBGMVxVnh06Vx6NME8HZRH3bMh69H7cK00QwvjzpVVZrfjRfmSWCi6B74uGp3jq80TJJBBf8Vy9uFkyYKCI6Xy5/Gzz/f0A3RgSzgjPec3eD76tOQ0Q4TLVlyphumWOMiIsuYOHi1wQRzJpfdCW/a0fzVf5FCFHdXXjfWF9sRe5FBKJzhWvX8VRMLv8tWrnaK4nRtX4RQRAEQRAEQRAEQRAEcV+4lRjeWVFu+rmmyvPm8YhNTxlkl2NRj8UMkk2TYiFGWRlkl+JRDxkkmyYkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAiARAAkAiARAIkASARAIgASAZAIgEQAJAIgEQCJAEgEQCIAEgGQCIBEACQCIBEAiQBIBEAiABIBkAgAEVGyVUF2Mx61yiLbFEFENJUifCwqi2xTBFnSylcFeet4VD+LbFMEKfKN8ntqbjzohM5y2yBtr1BRBQ3PCbpxsDU9K5qEvUKC8v51R6zKC4om4WMx2aSbItiiFI0PabAGiPjAVpX4ZWC0iPI+T0n+vEnTkf+CRZQySzgtetiyktb1jAYMsss4JdBCLzxJx4L+E/b5jXIIu3l8ZErcm8Brwm6iHgpF5Vh++5TRlUVrQ/7I3qvkw3kfp/YMJGuLpuZDFbbfl31ynfdxao+Pd789m7LrQc37notN44D65J4HKugoAbw2y8OI8jPeSr54yf+esQe7Xfgd6huMfFB5vMyDER3iE3mXOIWPvF9F/Me+qCRedad/Rbykfqlgozv5q4Ldz5zGxwn/tipP4EeIE+rBhJnygP5ZT8fLUHfeV8cun9Ex18bVQ4RdQW9ckngwrD9848vOlhJMGSgRZEdyFEPL4Qt7tTlJwtMm/5eUCgZFdat4WjfzfzWnZtB/SNxKH4slo5+KH3jDvuwRWRdLFXN7JII3GJaKrwc2XlbNXsW9h2fiCNv3Pdd1K8NerzeIfvD8uyqFW+UvlrdUP6PQnfMAAAAASUVORK5CYII=', skillTitle: 'React Native', skillCourse: 'Udemy',},
  ]);

  return (
    <div className={styles.wrapper}>
      <Header />

      <section className={styles.sectionContainer}>
        <div className={styles.welcomeContainer}>
          <h3 className={styles.welcomeText}>
            Olá, meu nome é
            <span className={styles.usernameText}>Gabriel Alexandre</span>
            e eu sou <span className={styles.emphasisText}> {getTypingString(textArray)} </span>
          </h3>

          <img
            src={alexProfileCartoonImg}
            alt='Alex Profile Cartoon'
          />
        </div>

        <SectionTopics title='Sobre Mim' customClassName={styles.aboutMeContainer}>
          <img
            src={alexProfileImg}
            alt='Profile'
            height={140}
            width={140}
          />

          <p className={styles.descriptionText}>
            Meu nome é <span className={styles.emphasisText}>Gabriel Alexandre</span>, tenho 20 anos e resido em Belém/PA.
            Criar softwares vem de uma <span className={styles.emphasisText}>paixão de projetar e criar</span>, de forma
            que possa potencializar algo por meio dos sistemas de software.
            Atualmente eu faço faculdade de Engenharia de Software na Pitágoras,
            6° semestre, e busco uma oportunidade como <span className={styles.emphasisText}>desenvolvedor Front-end </span>
            para poder criar experiências e potencializar os resultados com os
            clientes. Estou aberto a aprender e crescer em outras áreas do
            desenvolvimento de software, sempre com o <span className={styles.emphasisText}>objetivo de agregar valor </span>
            e gerar impacto positivo.
          </p>
        </SectionTopics>

        <SectionTopics title='Habilidades' customClassName={styles.skillsContainer}>
          {skillList.map((item, key) => <SkillCard key={key} skillCardData={item} />)}
        </SectionTopics>
        
        <SectionTopics title='Projetos' customClassName={styles.projectsContainer}>
          <img
            src={workInProgressImg}
            alt='Working in progress'
            height={110}
          />
        </SectionTopics>
      </section>
    </div>
  );
}