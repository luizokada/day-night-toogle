import styled, { css,keyframes } from 'styled-components'

type ContainerProps = {
    isDark: boolean
}


const BlackToWhite = keyframes`
    from {
        background-color: black;
    }
    to {
        background-color: white;
    }
`;

const WhiteToBlack = keyframes`

    from {
        background-color: white;
    }
    to {
        background-color: black;
    }
`;
export const WhiteContainer = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    ${props => props.isDark && css`animation:${WhiteToBlack} 1s linear;`}  
    background-color:${props => props.isDark? 'black' : 'white'};
    `;

export const BlackContainer = styled.div<ContainerProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${props => props.isDark? 'black' : 'white'};;
    ${props => !props.isDark && css`animation:${BlackToWhite} 1s linear;`}
    `;
