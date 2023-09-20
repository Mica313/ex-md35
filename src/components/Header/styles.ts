import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const HeaderBar = styled.div`
  background-color: ${cores.rose};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
  }
`
export const HeaderBKG = styled.div`
  width: 2032px;
  height: 495px;
  top: -24px;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
