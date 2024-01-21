import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
      text-align: end;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span>DESIGNED AND DEVELOPED BY JACQUI KOROLL</span>
      </div>
    </FooterContainer>
  )
}

export default Footer