import * as React from 'react'
import { BlackContainer, WhiteContainer } from './styles'
import { useState, useEffect, useRef } from 'react'
import Toogle from './components/Toogle'

const Home: React.FC = () => {
    const [isDark, setIsDark] = useState(false)
    const [shoulRender, setShouldRender] = useState(false)
    const currentTheme = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentTheme.current) {
            currentTheme.current.addEventListener('animationend', () => {
                setShouldRender(isDark);
              currentTheme.current?.removeEventListener('animationend', () => {
                    console.log('removido')
                })
            })
        }
        
        
    }, [isDark])


    const HomeDiv = React.useMemo(() => {
        return (<>
            {
                shoulRender ?
                    (<BlackContainer ref={currentTheme} isDark={isDark}> 
                        <Toogle isDark={isDark} setIsDark={setIsDark}></Toogle>
                    </BlackContainer >)
                    : (<WhiteContainer ref={currentTheme} isDark={isDark}> 
                    
                       <Toogle isDark={isDark} setIsDark={setIsDark}></Toogle>
                    </WhiteContainer>)
            }
        </>
        )
    },[isDark,shoulRender])

    return (
        <>
            {HomeDiv}
        </>
       
    )
}
    
export default Home