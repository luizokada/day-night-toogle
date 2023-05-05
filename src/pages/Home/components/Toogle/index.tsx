import { ToogleProps } from '../ToogleProps';
import { Container } from './styles';



const Toogle: React.FC<ToogleProps> = ({ isDark, setIsDark }) => {

  return (
      <Container isDark={isDark}>
          <div className="background-day"></div>
          <div className="background-night"></div>
          <div onClick={() => setIsDark((prev) => !prev)} className="toggle" >
              
              <div className="moon">
              </div>
                  <div className="crater1"></div>
                  <div className="crater2"></div>
                    <div className="crater3"></div>
              <div className="sun"></div>


      </div>
    </Container>
  );
};

export default Toogle;
