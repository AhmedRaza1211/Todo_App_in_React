const Items = ({ showTodoSending, setTodosSending }) => {

    const deleteTodo = (i) => {
        let arr = [...showTodoSending];
        arr.splice(i,1);
        setTodosSending(arr);
    }

    const editTodo = (i) => {
        let ques = prompt('Edit your todo here');
        let arr = [...showTodoSending];
        arr.splice(i,1,ques);
        setTodosSending(arr);
    }

    return (
        <div>
            {showTodoSending.map((v, i) => {
                return <li key={i}> {v}
                    <button onClick={(i) => deleteTodo(i)}> Delete </button>
                    <button onClick={(i) => editTodo(i)}> Edit </button>
                </li>
            })}
        </div>
    )
}

export default Items;