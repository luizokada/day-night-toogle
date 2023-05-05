import { ToogleProps } from "../ToogleProps"
import { Container } from "./styles"

const Toogle:React.FC<ToogleProps> = ({isDark,setIsDark}) => {
    

    return (
        <Container isDark={ isDark}>
<div onClick={()=>setIsDark(prev=>!prev)} className="toggle"/>

        </Container>
    
    )
}

export default Toogle