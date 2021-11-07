import styled from 'styled-components/native'

const ErrorContainer = styled.View`
    background-color: ${props => props.theme.errorBgColor};
    color: ${props => props.theme.errorColor};
    ${props => props.theme.components.ErrorContainer.styles(props)}
`

export default ErrorContainer
