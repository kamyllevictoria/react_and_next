function createList(){
    const list = []
    for(let i = 1; i <= 10; i++){
        list.push(<span>{i},</span>)
    }
    return list
}

export default function list(){
    return(
        <div>
            {createList()}
        </div>
    )
}