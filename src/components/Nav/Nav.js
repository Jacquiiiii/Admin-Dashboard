import styled from "styled-components"

const NavContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  h1 {
    font-size: 40px;
    margin: 20px;
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <h1>Database Dashboard</h1>
    </NavContainer>
  )
}

export default Nav