import styled from 'styled-components/native'

const LoginContainer = styled.View`
    padding: 30px 0;
    width: 100%;
    ${props => props.theme.components.Login.containerStyles(props)}
`

export default LoginContainer
