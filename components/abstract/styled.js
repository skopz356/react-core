import {ScrollView} from 'react-native'
import styled from 'styled-components/native'

// TODO: move this to separate folder

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  position: relative;
`

export const ScrollScreen = styled(ScrollView)`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`
