import styled from "styled-components"

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  color: ##2d373b;
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
    color: #2d373b;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
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