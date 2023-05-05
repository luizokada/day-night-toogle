import styled, { css} from "styled-components";


type ContainerProps = {
    isDark: boolean
}
export const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 90px;
    border-radius: 50px;
     background: ${props => props.isDark ? `linear-gradient(180deg, #364BBA 0%, #A979D9 100%)` : 'linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%)'};
     transition:  background 1s linear;
    position: relative;
    box-shadow: inset 0 0 20px black;;
    .toggle {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        ${props => props.isDark ? 'left: 10px' : 'left: calc(100% - 80px)'};
        transition: left 1s linear, background-color 1s linear;
        width: 70px;
        height: 70px; 
        background-color: ${props => props.isDark ?  `rgba(220, 240, 255, 1)` : 'rgb(252, 229, 112)'};
        border-radius: 50%}
    `;

export const NightSky = styled.div`
    width: 100%;
    height: 100%;
    >span{
        position: absolute;
        background-color: white;

    }
`;
    