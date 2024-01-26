const { default: styled } = require("styled-components");

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgb(9, 40, 55);
  height: 100vh;

  h1 {
    font-size: 40px;
    color: whitesmoke;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 30vw;

  input {
    border-radius: 2px;
    padding: 20px;
    width: 100%;
    border: none;
    font-size: 20px;
  }

  button {
    width: 100%;
    border: none;
    padding: 20px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 20px;
    background-color: #7fa99b;
    transition: 0.2s all; 

    &:hover {
      transform: scale(0.98); 
    }
  }

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 75vw;
  }
`