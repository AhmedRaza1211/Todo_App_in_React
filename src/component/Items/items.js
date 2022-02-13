const Items = ({ showTodoSending, setTodosSending }) => {

    const deleteTodo = (i) => {
        let arr = [...showTodoSending];
        arr.splice(i,1);
        setTodosSending(arr);

    }

    return (
        <div>
            {showTodoSending.map((v, i) => {
                return <li key={i}> {v}
                    <button onClick={(i) => deleteTodo(i)}> Delete </button>
                </li>
            })}
        </div>
    )
}

export default Items;