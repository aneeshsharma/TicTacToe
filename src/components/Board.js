import React from 'react';

import '../stylesheets/board.css';

const initialBoard = Array(9).fill(null);

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardState: initialBoard,
            turn: 'X',
        };
    }

    handleMove = (index) => {
        var turn = this.state.turn;
        var boardState = this.state.boardState;
        if (boardState[index] == null) boardState[index] = turn;
        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }

        this.setState({
            boardState,
            turn,
        });
    };

    renderGrid = () => {
        var buttons = this.state.boardState.map((v, index) => {
            return (
                <button
                    onClick={() => {
                        this.handleMove(index);
                    }}
                >
                    {v}
                </button>
            );
        });

        return <div className="grid">{buttons}</div>;
    };

    render() {
        let grid = this.renderGrid();

        return grid;
    }
}

export default Board;
