import styled from "styled-components"

export const SMenu = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

export const MenuItem = styled.div`
  font-size: 24px;
  font-weight: normal;
  &:hover{
    padding-bottom: 4px;
    border-bottom: solid black 1px;
    transition: all 0.3s ease;
  }
`