import './App.css';
import Icon from '@mdi/react';
import { mdiPencil, mdiPlus} from '@mdi/js';

function App() {
    return (
        <div className={"app"}>
            <h3>
                Task List
            </h3>
            <ul className={'todoList'}>
                <li>
                    <input type="checkbox"/>
                    <div>
                        <span>Hello World</span>
                        <Icon path={mdiPencil} size={0.8} color="red" />
                    </div>
                </li>
            </ul>
            <button
                className="iconAddTodo"
                onClick={() => (alert("Add Task"))}
            >
                <span className={'label'}>Add Todo</span>
                <Icon className={'icon'} path={mdiPlus} size={2}/>
            </button>
        </div>
    );
}

export default App;
