import React, { useEffect, useState } from 'react'
import { gameOptions } from './utils/dummy'
import toast from 'react-hot-toast'
import { ButtonSection, RPSBox, RPSContainer, ResetGameButton, ResultSection } from './components/rps-style/style'


const RPS = ({ gameState, setGameState }) => {
    const [userScore, setUserScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [tied, setTied] = useState(0)
    const [matchCount, setMatchCount] = useState(0)

    const generateComputerChoice = () => {
        const randomIndex = Math.floor(Math.random() * gameOptions.length);
        return gameOptions[randomIndex]
    }

    // check here who is won
    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            setTied(tied + 1)
            return
        }
        if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            setUserScore(userScore + 1)
            return
        } else {
            setComputerScore(computerScore + 1)
            return
        }

    }

    const handleUserOptions = (userChoice) => {
        setMatchCount(prevState => prevState + 1)
        const computerChoice = generateComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        setGameState(prevState => ({
            ...prevState,
            userChoice: userChoice
        }));
        setGameState(prevState => ({
            ...prevState,
            computerChoice: computerChoice
        }));
        setGameState(prevState => ({
            ...prevState,
            result: result
        }));
    }

    useEffect(() => {
        if (matchCount === 10) {
            setTimeout(() => {
                resetGame();
            }, 2000);
            if (userScore > computerScore) {
                toast.success("User won!!")
                return
            } else if (userScore === computerScore) {
                toast.error("Match tied!!")
                return
            } else {
                toast.error("Computer won!!")
                return
            }
        }

    }, [matchCount]);


    const resetGame = () => {
        setComputerScore(0);
        setUserScore(0);
        setMatchCount(0);
        setTied(0);
    }

    const handleResetGame = () => {
        resetGame();
        console.log("llll")
    }


    return (
        <RPSContainer>
            <RPSBox>
                <h2 className='mb-15'>Match Count: {matchCount}</h2>
                <ResultSection>
                    <h3 style={{ color: 'green' }}>Your score:{userScore}</h3>
                    <h3 style={{ color: 'crimson' }}>Match tied score:{tied}</h3>
                    <h3 style={{ color: 'blue' }}>Computer score:{computerScore}</h3>
                </ResultSection>
                <ButtonSection>
                    {gameOptions.map((option, index) => (
                        <React.Fragment key={index}>
                            <button onClick={() => handleUserOptions(option)}>{option}</button>
                        </React.Fragment>
                    ))}
                </ButtonSection>
                {matchCount !== 0 &&

                    <ResetGameButton>
                        <button disabled={matchCount === 0} onClick={handleResetGame}>Reset Game</button>
                    </ResetGameButton>
                }

            </RPSBox>

        </RPSContainer>
    )
}

export default RPS