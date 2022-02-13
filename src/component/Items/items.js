const Items = ({ showTodoSending }) => {

    return (
        <div>
            {showTodoSending.map((v, i) => {
                return <li key={i}> {v} </li>
            })}
        </div>
    )
}

export default Items;