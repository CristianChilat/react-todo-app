import './App.css';
import Icon from '@mdi/react';
import { mdiPlus, mdiDelete} from '@mdi/js';
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    return (
        <div className={"app"}>
            <h3>
                Task List
            </h3>
            <ul className={'todoList'}>
                <li>
                    <div>
                        <input onChange={event => setValue(event.target.value)} type="text"/>
                    </div>
                </li>
            </ul>
            <button
                className="iconAddTodo"
                onClick={() => setTodos([...todos, value])}
            >
                <span className={'label'}>Add Todo</span>
                <Icon className={'icon'} path={mdiPlus} size={2}/>
            </button>
            
            <ul className={'todoList'}>
                {todos.map((todo) => (
                    <li>
                        <input
                            type="checkbox"
                        />
                        <div>
                            <span>{todo}</span>
                            <Icon path={mdiDelete} size={1} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
