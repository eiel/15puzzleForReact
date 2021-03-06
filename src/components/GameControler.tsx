import React, { FC } from "react";
import Controller from "./Controller";

// ゲームコントローラコンポーネント
type GameControllerProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
  difficult: string;
  isComplate: boolean;
};

const GameController: FC<GameControllerProps> = ({
  handleSubmit,
  difficult,
  isComplate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Controller difficult={difficult} isComplate={isComplate} />
    </form>
  );
};

export default GameController;
