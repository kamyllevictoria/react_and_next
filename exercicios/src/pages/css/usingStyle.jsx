import Style from "../../../components/style"
export default function usingStyle(){
    return(
        <div>
            <Style num={10}></Style>
            <Style num={-10} color = '#fff' direction = {true} ></Style>
        </div>
    )
}