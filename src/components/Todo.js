import { useState } from "react";

function Todo() {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?' : null;

        setTodo(inputValue);
        setWarning(warning);
    };

    return (
        <div>
        <p>{todo}</p>
        <p>
            <textarea
            name="todo"
            value={todo}
            onChange={handleInput}
            ></textarea>
        </p>
        <hr />
        <h2>{ warning || 'Good choice!'}</h2>
        </div>
    );
}

export default Todo;
