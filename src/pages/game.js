import { Flex, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "@/styles/Game.module.css";

const SnakeAndLadder = () => {
  const SNAKE = 1;
  const PLAYER1 = 2;
  const PLAYER2 = 4;
  const LADDER = 3;
  const [player, setPlayer] = useState(1);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [winner, setWinner] = useState(null);
  const snakePositions = [17, 26, 49, 52, 87, 98];
  const ladderPositions = [4, 10, 28, 80];
  const rowCount = 10;
  const cellSize = 50;
  const [cells, setCells] = useState(Array(rowCount * rowCount).fill(0));

  useEffect(() => {
    const arr = [...cells];

    // place player(s)
    arr[position1] = PLAYER1;
    arr[position2] = PLAYER2;

    // place snakes
    snakePositions.forEach((p) => (arr[p] = SNAKE));

    // place ladders
    ladderPositions.forEach((p) => (arr[p] = LADDER));
    setCells(arr);
    // console.log(arr);
  }, []);

  const rollDice = () => {
    const snakeAndLadder = {
      17: 8,
      26: 18,
      49: 29,
      52: 9,
      87: 24,
      98: 79,
      4: 14,
      10: 32,
      28: 84,
      80: 99,
    };

    const diceValue = Math.floor(Math.random() * 6) + 1;
    setCurrentRoll(diceValue);

    let newPosition;
    if (player === 1) {
      newPosition = position1 + diceValue;
      if (newPosition >= 100) {
        setPosition1(100);
      } else {
        if (snakeAndLadder[newPosition]) {
          newPosition = snakeAndLadder[newPosition];
        }
        setPosition1(newPosition);
      }
      setPlayer(2);
    } else {
      newPosition = position2 + diceValue;
      if (newPosition >= 100) {
        setPosition2(100);
      } else {
        if (snakeAndLadder[newPosition]) {
          newPosition = snakeAndLadder[newPosition];
        }
        setPosition2(newPosition);
      }
      setPlayer(1);
    }

    const updatedCells = [...cells];
    updatedCells[position1] = player === 1 ? 0 : PLAYER1;
    updatedCells[position2] = player === 2 ? 0 : PLAYER2;
    updatedCells[newPosition] = player === 1 ? PLAYER1 : PLAYER2;
    setCells(updatedCells);

    checkWin(newPosition, player);
  };

  function Cell({ position, children = null }) {
    // console.log(children);
    return (
      <div
        style={{
          height: `${cellSize}px`,
          width: `${cellSize}px`,
          outline: "1px solid",
          textAlign: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {children}
      </div>
    );
  }
  const resetGame = () => {
    setPosition1(0);
    setPosition2(0);
    setCurrentRoll(null);
    setWinner(null);
    setPlayer(1);
  };

  useEffect(() => {
    // Reset the cells array with player positions, snakes, and ladders
    const arr = Array(rowCount * rowCount).fill(0);
    arr[position1] = PLAYER1;
    arr[position2] = PLAYER2;
    snakePositions.forEach((p) => (arr[p] = SNAKE));
    ladderPositions.forEach((p) => (arr[p] = LADDER));
    setCells(arr);
  }, [position1, position2]);

  function getGrid() {
    console.log(cells);
    return (
      <div className={styles.board}>
        {cells.slice(0, 100).map((el, i) => {
          if (el === SNAKE)
            return <Cell key={`${i}-cell`} position={i} children={"🐍"} />;
          if (el === PLAYER1)
            return <Cell key={`${i}-cell`} position={i} children={"🔴"} />;
          if (el === PLAYER2)
            return <Cell key={`${i}-cell`} position={i} children={"🔵"} />;
          if (el === LADDER)
            return <Cell key={`${i}-cell`} position={i} children={"🪜"} />;
          return <Cell position={i} key={`${i}-cell`} />;
        })}
        {position1 === 100 && <Cell position={100} children={"🔴"} />}
        {position2 === 100 && <Cell position={100} children={"🔵"} />}
      </div>
    );
  }

  const checkWin = (position, player) => {
    if (position >= 100) {
      setWinner(player);
    }
  };

  return (
    <div>
      <h1>🐍 Snake and Ladder 🪜</h1>
      <p>Player {player}'s turn</p>
      <p>Current Position Player 1: {position1}</p>
      <p>Current Position Player 2: {position2}</p>
      {currentRoll && <p>Current Roll: {currentRoll}</p>}
      {winner && <p>Player {winner} wins!</p>}
      <Button onClick={rollDice} disabled={!!winner}>
        Roll Dice
      </Button>
      <br></br>
      <br></br>
      <Button onClick={resetGame}>Reset Game</Button>
      <Flex justify={"center"}>{getGrid()}</Flex>;
    </div>
  );
};

export default SnakeAndLadder;
