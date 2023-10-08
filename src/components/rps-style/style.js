import styled from 'styled-components'

export const RPSContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`
export const RPSBox = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  margin: 100px auto;
  background: #f0f0f0;
  min-height: 250px;
  border-radius: 15px;
  box-shadow: 0px 1px 6px 4px rgba(0,0,0,0.3);
`
export const ResultSection = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonSection = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    padding: 10px 15px;
    color: #f0f0f0;
    background: #529daf;
    font-size: 18px;
    max-width: 150px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #73c4d8;
    }
  }
`
export const ResetGameButton = styled.div`
     margin: 30px 0px;
     text-align: center;
     width: 100%;
  button{
    padding: 15px;
    color: #f0f0f0;
    background: crimson;
    font-size: 18px;
    max-width: 250px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #a93c50;
    }
  }
`