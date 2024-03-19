export default function style(props){

    const classApp = props.num >= 0 ? 'blue' : 'red'
    
    return(
        <div>
            <h1 style = {{
                backgroundColor: props.num >= 0 ? "#1ce41c" : "#f32626",
                color: props.color,
                textAlign: props.direction ? "right" : "left"
                }}>
                Text 01
            </h1>
            <h2 className={classApp}>Text02</h2>

        </div>
    )
}