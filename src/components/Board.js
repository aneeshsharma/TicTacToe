import React from 'react';

import '../stylesheets/board.css';

const initialBoard = Array(9).fill(null);

const winSeq = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardState: initialBoard,
            turn: 'X',
            active: true,
        };
    }

    componentDidUpdate() {
        if (!this.state.active) {
            return;
        }
        if (this.state.turn === 'X') {
            if (this.checkWinCondition('O')) {
                this.setState({
                    active: false,
                });
                alert('O wins');
            }
        }
        if (this.state.turn === 'O') {
            if (this.checkWinCondition('X')) {
                this.setState({
                    active: false,
                });
                alert('X wins');
            }
        }
    }

    checkWinCondition = (turn) => {
        var board = this.state.boardState;
        var flag = false;
        for (var seq of winSeq) {
            flag = true;
            for (var i of seq) {
                if (board[i] != turn) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return true;
            }
        }
        return false;
    };

    handleMove = (index) => {
        if (!this.state.active) return;
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

        return <div className="container">{grid}</div>;
    }
}

export default Board;
