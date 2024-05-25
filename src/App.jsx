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
            <div className="iconAddTodo">
                <Icon path={mdiPlus} size={2.5} />
            </div>
        </div>
    );
}

export default App;
