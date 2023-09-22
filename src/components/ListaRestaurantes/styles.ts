import styled from 'styled-components'
import { cores } from '../../styles'
import { Card } from '../Restaurante/styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.fundo};
  ${Card} {
    background-color: ${cores.branca};
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
