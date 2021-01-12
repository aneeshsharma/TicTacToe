import './App.css';

import Board from './components/Board';

function App() {
    return (
        <div
            className="App"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <Board />
        </div>
    );
}

export default App;
