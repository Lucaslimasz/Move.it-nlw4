import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import stlyes from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){

  const { challengesCompleted } = useContext(ChallengesContext);

  return(
    <div className={stlyes.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}