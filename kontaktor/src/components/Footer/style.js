import styled from "styled-components";

export const Sfooter = styled.footer`
  display: flex;
  background-color: #474a50;
  padding: 40px;
  margin-top: auto;
`

export const SfooterLogo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 260px;
  margin-right: 40px;
`

export const SfooterLogoItem = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
  &:nth-last-of-type(2n-1) {
    font-size: 12px;
  }
`

export const SfooterMenu = styled.menu`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  width: 200px;
  
`

export const SfooterMenuItem = styled.div`
  font-size: 20px;
  
`