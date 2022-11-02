import { Button } from "./components/Button/Button";
import React, { useState } from "react";
import { Input } from "./components/Input/Input";

const Answers = [
  "Так",
  "Ні",
  "Гарна ідея",
  "Погана ідея",
  "Звучить добре",
  "Звучить дивно",
  "Зроби це",
  "В жодному разі не роби цього",
];

function App() {
  let [answersNum, setAnswersNum] = useState("");
  let [animBoll, setAnimBoll] = useState(false);
  let [change, setChange] = useState("");

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  };

  const handleMouseDown = () => {
    if (change) {
      setAnswersNum(randomNum(Answers.length));
      setAnimBoll(true);
    }
  };

  const handleMouseUp = () => {
    if (change) {
      setAnimBoll(false);
    }
  };

  return (
    <div className="wrapper">
      <Input
        className={"input"}
        placeholder={"Введіть питання"}
        change={change}
        setChange={setChange}
      />

      <div className="buttons">
        <Button md={handleMouseDown} mu={handleMouseUp}>
          Отримати відповідь
        </Button>
      </div>

      <div
        className="boll"
        style={{ animation: animBoll && "anim-boll 0.3s ease-in-out 1" }}
      >
        <span>{change ? Answers[answersNum] : "Введіть питання"}</span>
      </div>
    </div>
  );
}

export default App;
