import React from 'react';

import '../stylesheets/board.css';

import zero from '../images/zero.svg';
import cross from '../images/cross.svg';

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

var images = {
    O: zero,
    X: cross,
};

var buttonStyles = [
    { borderTop: 'none', borderLeft: 'none' },
    { borderTop: 'none' },
    { borderTop: 'none', borderRight: 'none' },
    { borderLeft: 'none' },
    {},
    { borderRight: 'none' },
    { borderBottom: 'none', borderLeft: 'none' },
    { borderBottom: 'none' },
    { borderBottom: 'none', borderRight: 'none' },
];

const initialState = {
    boardState: initialBoard,
    turn: 'X',
    active: true,
    winText: null,
    checks: false,
};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            computer: 0,
            you: 0,
        };
    }

    reset = () => {
        this.setState({
            ...initialState,
            boardState: Array(9).fill(null),
        });
    };

    componentDidUpdate() {
        if (!this.state.active) {
            return;
        }
        if (!this.state.checks) {
            if (this.checkWinCondition('O')) {
                var computer = this.state.computer;
                this.setState({
                    active: false,
                    winText: 'Computer wins!',
                    computer: computer + 1,
                });
            } else if (this.checkWinCondition('X')) {
                var you = this.state.you;
                this.setState({
                    active: false,
                    winText: 'You win!',
                    you: you + 1,
                });
            } else if (this.checkDrawCondition()) {
                this.setState({
                    active: false,
                    winText: 'Game is Draw',
                });
            }
            this.setState({
                checks: true,
            });
        }
        if (this.state.checks) {
            this.computerMoves();
        }
    }

    computerMoves = () => {
        if (!this.state.active) return;
        if (this.state.turn === 'X') return;
        var board = this.state.boardState;
        var moved = false;

        for (var seq of winSeq) {
            var inPos = [];
            for (var i of seq) {
                if (board[i] === 'O') {
                    inPos.push(i);
                }
            }
            if (inPos.length >= 2) {
                for (i of seq) {
                    if (!inPos.includes(i) && board[i] === null) {
                        this.handleMove(i);
                        moved = true;
                        return;
                    }
                }
            }
        }

        if (moved) return;

        for (var seq of winSeq) {
            var inPos = [];
            for (var i of seq) {
                if (board[i] === 'X') {
                    inPos.push(i);
                }
            }
            if (inPos.length >= 2) {
                for (i of seq) {
                    if (!inPos.includes(i) && board[i] === null) {
                        this.handleMove(i);
                        moved = true;
                        return;
                    }
                }
            }
        }

        if (moved) return;

        while (!moved) {
            var random = Math.floor(Math.random() * 9);
            if (board[random] === null) {
                this.handleMove(random);
                moved = true;
            }
        }
    };

    checkDrawCondition = () => {
        if (this.state.active) {
            if (this.state.boardState.filter((v) => v === null).length === 0)
                return true;
        }
        return false;
    };

    checkWinCondition = (turn) => {
        var board = this.state.boardState;
        var flag = false;
        for (var seq of winSeq) {
            flag = true;
            for (var i of seq) {
                if (board[i] !== turn) {
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
        if (boardState[index] !== null) return;

        boardState[index] = turn;
        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }

        this.setState({
            boardState,
            turn,
            checks: false,
        });
    };

    renderGrid = () => {
        var buttons = this.state.boardState.map((v, index) => {
            return (
                <button
                    onClick={() => {
                        this.handleMove(index);
                    }}
                    style={buttonStyles[index]}
                >
                    {v && (
                        <img
                            src={images[v]}
                            alt={v}
                            style={{ filter: 'invert(100%)' }}
                        />
                    )}
                </button>
            );
        });

        return <div className="grid">{buttons}</div>;
    };

    render() {
        let grid = this.renderGrid();

        let turnText = this.state.turn === 'X' ? 'Your turn' : "O's turn";

        if (!this.state.active) turnText = 'Game Over';

        return (
            <div className="container">
                <h1>Tic Tac Toe</h1>
                <div className="text">{`You: ${this.state.you} | Computer: ${this.state.computer}`}</div>
                <div className="text">{turnText}</div>
                {grid}
                <div className="text" style={{ fontSize: '42px' }}>
                    {this.state.winText || <>&nbsp;</>}
                </div>
                <button className="restart-btn" onClick={this.reset}>
                    Restart
                </button>
            </div>
        );
    }
}

export default Board;
