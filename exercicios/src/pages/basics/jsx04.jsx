export default function jsx04(){
    const subtitle = 'Im in js'


    return (
        <div>
            <h1>Js and Jsx</h1>
            <h2>{subtitle}</h2>
            <h2>{3*4}</h2>
            <h2>{Math.max(13,89)}</h2>
            <h3>{enter(20, 1, 80)}</h3>
        </div>
    )
}

function enter(value, min, max){
    if(value >= min && value <= max){
        return "yes"
    } else{
        return "no"
    }
}