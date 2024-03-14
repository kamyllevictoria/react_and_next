export default function Tittle(props){
    console.log(props)
    if(props.small){
        return(
            <>
                <p>{props.principal}</p>
                <p>{props.second}</p>
            </>
        )
    } else{
        return(
            <>
                <h1>{props.principal}</h1>
                <h2>{props.second}</h2>
            </>
        )
    }
    
}