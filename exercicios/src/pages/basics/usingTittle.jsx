import Tittle from '../../../components/tittle'

export default function usingTittle(){
    return(
         <>
            <Tittle 
            principal = "Login page" 
            second = "Add, remove and change things">
            </Tittle>
            <Tittle 
            principal = "Info page" 
            second = "Enter your email and password"
            small = {true}>
            </Tittle>
         </>
    )
 }