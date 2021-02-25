import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number,
  experienceToNextLevel: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLeve] = useState(1);
  const [currentExperience, setCurrenteExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  
  const [ activeChallenge, setActiveChallenge ] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {}

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
