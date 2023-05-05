import styled from 'styled-components';

type ContainerProps = {
  isDark: boolean;
};

const ANIMATION_DURATION = 1;


export const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 90px;
  border-radius: 50px;
  position: relative;
  transition: left ${ANIMATION_DURATION}s linear;
  box-shadow: inset 0 0 20px black;
  overflow: hidden;
  cursor: pointer;

  .toggle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.isDark ? 'left: 10px' : 'left: calc(100% - 80px)')};
    transition: left ${ANIMATION_DURATION}s linear, background-color ${ANIMATION_DURATION}s linear;
    width: 70px;
    height: 70px;
    background-color: ${(props) =>
      props.isDark ? `rgba(220, 240, 255, 1)` : 'rgb(252, 229, 112)'};
    border-radius: 50%;
    overflow: hidden;

    ::before {
        content: ' ';
        position: absolute;
        width: 70px;
        height: 70px;
        background-color:rgba(220, 240, 255, 1);
        left: 100%;
        top: 0;
        ${({isDark}) => (isDark ? 'left:0%;' : 'left:100%;')}
        transition: left ${ANIMATION_DURATION}s linear;

  }
  .moon {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    background: linear-gradient(180deg, #D6E9FF 0%, #CDE4FF 100%);;
    ${({ isDark }) => (isDark ? 'left:0%;' : 'left:500%;')}
     transition: left ${ANIMATION_DURATION}s linear;

    }
    .crater1 {
       position: absolute;
       width: 10px;
       height: 10px;
       border-radius: 50%;
       top: 10%;

       background: linear-gradient(180deg, #D6E9FF 0%, #CDE4FF 100%);;
       ${({ isDark }) => (isDark ? 'left:30%;' : 'left:100%;')}
       transition: left ${ANIMATION_DURATION}s linear;

    }

    .crater2 {
       position: absolute;
       width: 30px;
       height: 30px;
       border-radius: 50%;
       top: 10%;
       background: linear-gradient(180deg, #D6E9FF 0%, #CDE4FF 100%);;
       ${({ isDark }) => (isDark ? 'left:80%;' : 'left:100%;')}
       transition: left ${ANIMATION_DURATION}s linear;
    }

}

  .background-day {
      background:linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    ${({isDark}) => (isDark ? 'left:-100%;' : 'left:0;')}
    transition: left ${ANIMATION_DURATION}s linear;
  }

  .background-night {
    background: linear-gradient(180deg, #364BBA 0%, #A979D9 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    ${({ isDark }) => (!isDark ? 'left:100%;' : 'left:0;')}
    transition: left ${ANIMATION_DURATION}s linear;
  }
`;

export const NightSky = styled.div`
  width: 100%;
  height: 100%;
  > span {
    position: absolute;
    background-color: white;
  }
`;
