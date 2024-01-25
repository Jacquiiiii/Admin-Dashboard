import styled from "styled-components"

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #092837;
  align-items: center;
  color: white;
  margin-bottom: 40px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 30px;
    margin: 20px;
  }
`

const LoggedInContainer = styled.div`
  margin: 20px;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
      transform: scale(0.99);
    }
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <h1>Admin Dashboard</h1>
      <LoggedInContainer>
        <button>Sign Out</button>
      </LoggedInContainer>
    </NavContainer>
  )
}

export default Nav