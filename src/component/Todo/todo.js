// TODOS
import react, { useState } from 'react';
import Input from '../Input/input';
import Button from '../Button/button';
import List from '../List/list';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => setInputValue(e.target.value);
    const addTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue('');
    }
    
    return (
        <div>
            <h1> Todo App</h1>
            <Input val={inputValue} onInputChangeSending={onInputChange} />
            <Button onClickSending={addTodo} />
            <List showTodoSending={todos}/>
        </div>
    )
}

export default Todo;