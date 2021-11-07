import styled from 'styled-components/native'

const RegisterContainer = styled.View`
    padding: 30px 0;
    width: 100%;
    ${props => props.theme.components.Register.containerStyles(props)}
`

export default RegisterContainer
