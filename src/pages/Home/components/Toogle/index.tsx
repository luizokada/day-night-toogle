import { ToogleProps } from '../ToogleProps';
import { Container, Star } from './styles';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function getStartsPostions(){
  return Array.from(Array(30).keys()).map(() => ({
    top: getRandomInt(0, 50),
    left: getRandomInt(0, 100),
  }));
}
const Toogle: React.FC<ToogleProps> = ({ isDark, setIsDark }) => {


  return (
    <Container isDark={isDark}>
      <div className="background-day"></div>
      <div className="background-night"></div>
       {Array.from(Array(30).keys()).map((_, index) => (
          <Star
            key={index}
            isDark={isDark}
            top={getStartsPostions()[index].top}
            left={getStartsPostions()[index].left}
          />
        ))}
      <div onClick={() => setIsDark((prev) => !prev)} className="toggle">
        <div className="moon"></div>
        <div className="crater1"></div>
        <div className="crater2"></div>
        <div className="crater3"></div>
        <div className="sun"></div>
      </div>
    </Container>
  );
};

export default Toogle;
